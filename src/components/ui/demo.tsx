"use client"

import MetroHero from "@/components/ui/scroll-locked-video-hero"
import ContributionSkyline from "@/components/ui/contribution-skyline"
import MorphGallery from "@/components/ui/morph-gallery"

export function SkylineDemo() {
  return (
    <div className="w-full bg-background px-4 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[980px]">
        <ContributionSkyline endDate="2017-11-08" />
      </div>
    </div>
  )
}

export default function DemoOne() {
  return <MetroHero />
}

export function MorphGalleryDemo() {
  const ITEMS = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80",
      thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&auto=format&fit=crop&q=80",
      alt: "Sun rays through a forest",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&auto=format&fit=crop&q=80",
      thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&auto=format&fit=crop&q=80",
      alt: "Snow-capped mountain peak at night",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop&q=80",
      thumb: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&auto=format&fit=crop&q=80",
      alt: "Mountain reflected in a still lake",
    },
  ];

  return (
    <div className="relative w-full">
      <MorphGallery items={ITEMS} autoplay={4500} />
    </div>
  );
}
