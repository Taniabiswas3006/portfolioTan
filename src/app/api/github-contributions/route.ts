import { NextResponse } from "next/server";

/**
 * Fetches real GitHub contribution data for Taniabiswas3006.
 *
 * Uses the public GitHub GraphQL API. No token needed for public profiles,
 * but authenticated requests get higher rate limits. If you hit rate limits,
 * set GITHUB_TOKEN in your .env.local:
 *   GITHUB_TOKEN=ghp_xxxxxxxxxxxx
 *
 * Returns: { contributions: { date: string; count: number }[] }
 */

const GITHUB_USERNAME = "Taniabiswas3006";

const QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    // GitHub GraphQL API requires authentication
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      // Fallback: scrape the public contributions page via the JSON endpoint
      return await fetchFromPublicAPI();
    }

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) {
      console.error("GitHub GraphQL error:", res.status, await res.text());
      return await fetchFromPublicAPI();
    }

    const json = await res.json();
    const weeks =
      json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;

    if (!weeks) {
      console.error("Unexpected GraphQL response shape:", json);
      return await fetchFromPublicAPI();
    }

    const contributions: { date: string; count: number }[] = [];
    for (const week of weeks) {
      for (const day of week.contributionDays) {
        contributions.push({
          date: day.date,
          count: day.contributionCount,
        });
      }
    }

    return NextResponse.json({ contributions });
  } catch (err) {
    console.error("GitHub contributions fetch error:", err);
    return await fetchFromPublicAPI();
  }
}

/**
 * Fallback: fetch from GitHub's public contributions JSON endpoint.
 * This doesn't require authentication.
 */
async function fetchFromPublicAPI() {
  try {
    const url = `https://github.com/users/${GITHUB_USERNAME}/contributions`;
    const res = await fetch(url, {
      headers: {
        Accept: "text/html",
        "User-Agent": "Portfolio-App/1.0",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { contributions: [], error: "Failed to fetch contributions from GitHub" },
        { status: 502 }
      );
    }

    const html = await res.text();

    // Map each tooltip by for="ID"
    const tooltips = new Map<string, string>();
    const tipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
    let tMatch;
    while ((tMatch = tipRegex.exec(html)) !== null) {
      tooltips.set(tMatch[1], tMatch[2].trim());
    }

    // Match all contribution calendar cells
    const tdRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d+)"[^>]*>/g;
    let match;
    const contributions: { date: string; count: number }[] = [];

    while ((match = tdRegex.exec(html)) !== null) {
      const date = match[1];
      const id = match[2];
      const level = parseInt(match[3], 10);
      const tipText = tooltips.get(id) || "";

      let count = 0;
      const countMatch = tipText.match(/^(\d+)\s+contribution/i);
      if (countMatch) {
        count = parseInt(countMatch[1], 10);
      } else if (level > 0) {
        // Fallback mapping based on GitHub level if tooltip string varies
        const levelMap: Record<number, number> = { 1: 1, 2: 3, 3: 6, 4: 10 };
        count = levelMap[level] ?? level;
      }

      contributions.push({ date, count });
    }

    // Ensure sorted chronologically
    contributions.sort((a, b) => a.date.localeCompare(b.date));

    return NextResponse.json({
      contributions,
      totalContributions: contributions.reduce((s, d) => s + d.count, 0),
      username: GITHUB_USERNAME,
      source: "live-scrape",
    });
  } catch (err) {
    console.error("Public API fallback error:", err);
    return NextResponse.json(
      { contributions: [], error: "All fetch methods failed" },
      { status: 502 }
    );
  }
}
