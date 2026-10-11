"use client"

import { useEffect, useRef } from "react"

// ─────────────────────────────────────────────────────────────
// THE CITY OPENS — locked scroll-scrub video hero
// The page cannot move while this is active — body is pinned
// with position:fixed (the same bulletproof technique modal
// libraries use; plain overflow:hidden alone isn't reliable
// across browsers). Wheel/touch input is captured and used
// purely to drive video.currentTime, forward and backward. Once
// the video reaches the end and the user keeps pushing forward,
// the page unlocks and continues normally — and re-locks if they
// scroll back up into it. No dependencies, system fonts only.
// ─────────────────────────────────────────────────────────────

export interface MetroHeroProps {
  videoSrc?: string
  title?: string
  scrollHint?: string
  tagline?: string
  signature?: { name: string; url: string } | false
  /** Total input distance (px) needed to scrub the full video. Tune to taste. */
  scrubDistance?: number
  className?: string
  style?: React.CSSProperties
  /** Optional callback fired every animation frame with current progress [0..1] */
  onProgress?: (progress: number) => void
  /** Optional callback fired when scrub reaches 100% */
  onComplete?: () => void
  /** If true, automatically unlocks and unmounts/releases lock when scrub finishes */
  autoUnlockOnEnd?: boolean
  /** If true, video plays continuously in the background instead of locking frames to scroll */
  autoplayVideo?: boolean
  /** Custom overlay children (e.g. for custom TB branding & percentage counter) */
  children?: React.ReactNode
}

const DEFAULT_VIDEO = "/gemini_generated_video_aaa8ec55.mp4"
const DEFAULT_SIGNATURE = { name: "guglielmogiannattasio.exe", url: "https://www.guglielmogiannattasio.it" }
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

const COL_BG = "#05070d"
const COL_TEXT = "#f2f4f8"

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export default function MetroHero({
  videoSrc = DEFAULT_VIDEO,
  title = "THE CITY OPENS",
  scrollHint = "SCROLL",
  tagline = "Every door in the city is already open.",
  signature = DEFAULT_SIGNATURE,
  scrubDistance = 3200,
  className,
  style,
  onProgress,
  onComplete,
  autoUnlockOnEnd = false,
  children,
}: MetroHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  // Keep callback refs fresh
  const onProgressRef = useRef(onProgress)
  onProgressRef.current = onProgress
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    let duration = 0
    let rafId = 0
    let targetProgress = 0
    let currentProgress = 0
    let hasStartedScrolling = false
    let isSeeking = false
    let locked = false
    let lockedScrollY = 0
    let touchStartY = 0
    let completedTriggered = false
    let velocity = 0
    let lastTime = typeof performance !== "undefined" ? performance.now() : Date.now()

    // Use multiple events so cached-reload hits are covered.
    const onVideoReady = () => {
      duration = video.duration || 0
      if (reduceMotion) {
        video.currentTime = duration * 0.92
      }
    }
    // If the video is already ready (e.g. cached), fire immediately
    if (video.readyState >= 2) {
      onVideoReady()
    }
    video.addEventListener("loadeddata", onVideoReady)
    video.addEventListener("canplay", onVideoReady)
    video.addEventListener("canplaythrough", onVideoReady)

    // iOS Safari often won't buffer any video data until playback starts
    const kickstartLoad = () => {
      const p = video.play()
      if (p && typeof p.then === "function") {
        p.then(() => video.pause()).catch(() => {})
      } else {
        video.pause()
      }
    }
    kickstartLoad()

    const onSeeked = () => {
      isSeeking = false
    }
    video.addEventListener("seeked", onSeeked)

    function engageLock() {
      if (locked || typeof document === "undefined") return
      locked = true
      lockedScrollY = window.scrollY
      const b = document.body.style
      b.position = "fixed"
      b.top = `-${lockedScrollY}px`
      b.left = "0"
      b.right = "0"
      b.width = "100%"
      b.height = "100%"
      b.overscrollBehavior = "none"
    }

    function releaseLock() {
      if (!locked || typeof document === "undefined") return
      locked = false
      const y = lockedScrollY
      const b = document.body.style
      b.position = ""
      b.top = ""
      b.left = ""
      b.right = ""
      b.width = ""
      b.height = ""
      b.overscrollBehavior = ""
      window.scrollTo(0, y)
    }

    engageLock()

    // Liquid momentum scroll accumulator
    function addDelta(deltaY: number) {
      hasStartedScrolling = true
      // Smoothly accumulate velocity scaled to scrubDistance
      const deltaProgress = deltaY / scrubDistance
      velocity += deltaProgress
      return true
    }

    const onWheel = (e: WheelEvent) => {
      let dy = e.deltaY
      if (e.deltaMode === 1) dy *= 25 // Line mode
      else if (e.deltaMode === 2) dy *= 450 // Page mode
      addDelta(dy)
      e.preventDefault()
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0
      velocity = 0
    }
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? touchStartY
      const deltaY = (touchStartY - y) * 1.3
      touchStartY = y
      addDelta(deltaY)
      e.preventDefault()
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })
    section.addEventListener("touchstart", onTouchStart, { passive: true, capture: true })
    section.addEventListener("touchmove", onTouchMove, { passive: false, capture: true })

    // Ultra-smooth 60/120fps physics & video synchronization frame loop
    function frame(now: number) {
      const dt = Math.min(Math.max((now - lastTime) / 1000, 0.001), 0.05)
      lastTime = now

      // 1. Fluid momentum physics with exponential friction decay
      targetProgress = clamp(targetProgress + velocity, 0, 1)
      velocity *= Math.pow(0.12, dt * 7)
      if (Math.abs(velocity) < 0.00002) velocity = 0

      // 2. Critically damped spring lerp for currentProgress
      const lerpSpeed = 1 - Math.exp(-14 * dt)
      currentProgress += (targetProgress - currentProgress) * lerpSpeed

      // Fire callback for external indicators
      if (onProgressRef.current) {
        onProgressRef.current(currentProgress)
      }

      // 3. ULTRA-SMOOTH VIDEO TRACKING ENGINE
      // Uses hardware playback acceleration forward and throttled seek backward
      if (duration > 0 && video) {
        const targetVideoTime = currentProgress * duration
        const currentVideoTime = video.currentTime
        const timeDiff = targetVideoTime - currentVideoTime

        if (timeDiff > 0.02 && timeDiff < 1.6) {
          // Forward scrub: adjust playbackRate smoothly to track target time
          // GPU hardware decoder streams continuous frames at 60fps without keyframe stalls!
          const targetRate = clamp(timeDiff * 5.0, 0.5, 4.0)
          video.playbackRate = targetRate
          if (video.paused) {
            video.play().catch(() => {})
          }
        } else if (timeDiff <= 0.015 && timeDiff >= -0.03) {
          // Cleanly locked onto target frame: pause video
          if (!video.paused) {
            video.pause()
          }
        } else {
          // Backward scrub or significant seek gap
          if (!video.paused) {
            video.pause()
          }
          if (!isSeeking && Math.abs(timeDiff) > 0.035) {
            isSeeking = true
            if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
              ;(video as any).fastSeek(targetVideoTime)
            } else {
              video.currentTime = targetVideoTime
            }
          }
        }
      }

      // 4. Overlays & UI transformations
      if (titleRef.current) {
        const t = 1 - clamp(currentProgress / 0.35, 0, 1)
        titleRef.current.style.opacity = String(t)
        titleRef.current.style.transform = `translateY(${(1 - t) * -24}px) scale(${0.96 + t * 0.04})`
        titleRef.current.style.filter = `blur(${(1 - t) * 10}px)`
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling ? "0" : "1"
      }
      if (taglineRef.current) {
        const t = clamp((currentProgress - 0.82) / 0.18, 0, 1)
        taglineRef.current.style.opacity = String(t)
        taglineRef.current.style.transform = `translateY(${(1 - t) * 20}px) scale(${0.97 + t * 0.03})`
        taglineRef.current.style.filter = `blur(${(1 - t) * 8}px)`
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`
      }

      // 5. Auto unlock on completion
      if (autoUnlockOnEnd && currentProgress >= 0.995 && !completedTriggered) {
        completedTriggered = true
        releaseLock()
        onCompleteRef.current?.()
      }

      rafId = requestAnimationFrame(frame)
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(frame)
    }

    return () => {
      video.removeEventListener("loadeddata", onVideoReady)
      video.removeEventListener("canplay", onVideoReady)
      video.removeEventListener("canplaythrough", onVideoReady)
      video.removeEventListener("seeked", onSeeked)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      section.removeEventListener("touchstart", onTouchStart, true)
      section.removeEventListener("touchmove", onTouchMove, true)
      cancelAnimationFrame(rafId)
      releaseLock()
    }
  }, [scrubDistance, autoUnlockOnEnd])

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        position: "relative",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: COL_BG,
        touchAction: "none",
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
          transformOrigin: "center center",
          willChange: "auto",
          imageRendering: "auto",
          transition: "opacity 0.6s ease",
          touchAction: "none",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(5,7,13,0.35), rgba(5,7,13,0) 30%, rgba(5,7,13,0.15) 70%, rgba(5,7,13,0.55))",
          pointerEvents: "none",
        }}
      />

      {title && (
        <div
          ref={titleRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 6%",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: SANS,
              fontWeight: 800,
              fontSize: "clamp(30px, 7vw, 96px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: COL_TEXT,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {title}
          </span>
        </div>
      )}

      {tagline && (
        <div
          ref={taglineRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 8%",
            textAlign: "center",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: "clamp(20px, 3.4vw, 40px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: COL_TEXT,
              textShadow: "0 4px 24px rgba(0,0,0,0.5)",
            }}
          >
            {tagline}
          </span>
        </div>
      )}

      {scrollHint && (
        <div
          ref={hintRef}
          style={{
            position: "absolute",
            left: "50%",
            bottom: "clamp(20px, 6vh, 48px)",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "rgba(240,244,248,0.75)",
            fontFamily: SANS,
            fontSize: "clamp(10px, 1.4vw, 12px)",
            fontWeight: 600,
            letterSpacing: "0.3em",
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        >
          <span>{scrollHint}</span>
          <svg width="14" height="18" viewBox="0 0 14 18" style={{ animation: "metro-hero-bounce 1.6s ease-in-out infinite" }}>
            <style>{`
              @keyframes metro-hero-bounce {
                0%, 100% { transform: translateY(0); opacity: 0.5; }
                50% { transform: translateY(5px); opacity: 1; }
              }
            `}</style>
            <path d="M7 1 L7 17 M2 12 L7 17 L12 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      {/* Thin progress line — fills as the video advances. */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background: "rgba(255,255,255,0.12)",
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.95))",
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      </div>

      {signature && (
        <span
          style={{
            position: "absolute",
            right: "clamp(12px, 2.5vw, 24px)",
            bottom: "clamp(10px, 2vw, 18px)",
            fontFamily: SANS,
            fontWeight: 500,
            fontSize: "clamp(11px, 1.4vw, 13px)",
            letterSpacing: "0.01em",
            color: "rgba(220,224,232,0.6)",
            zIndex: 2,
          }}
        >
          by{" "}
          <a
            href={signature.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(220,224,232,0.6)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = COL_TEXT
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = "rgba(220,224,232,0.6)"
            }}
          >
            {signature.name}
          </a>
        </span>
      )}

      {/* Custom injected children (e.g., custom TB branding and progress) */}
      {children}
    </div>
  )
}
