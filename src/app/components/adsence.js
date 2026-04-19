"use client";
import { useEffect, useRef } from "react";

/** nature-nest-camping — ca-pub-2010341405700903 / 9800205682 */
const AD_CLIENT = "ca-pub-2010341405700903";
const AD_SLOT = "9800205682";

/**
 * Manual ad unit: `<ins class="adsbygoogle">` + `(adsbygoogle=[]).push({})` in the page
 * body only (Google: do not place ad unit markup outside `<body>`). The async loader
 * script is in `layout.tsx`. Wrap units in a centered container like Google’s
 * `<div align="center">` example — we use flex + text-center for the same effect.
 *
 * @param {{ className?: string }} props
 */
export default function GoogleAd({ className = "" }) {
  const containerRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pushAd = () => {
      if (pushedRef.current) return;
      pushedRef.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        pushedRef.current = false;
        console.error("AdSense load error:", err);
      }
    };

    const tryWhenSized = (attempts = 0) => {
      const el = containerRef.current;
      if (!el) return;
      if (el.offsetWidth > 0) {
        pushAd();
        return;
      }
      if (attempts < 50) {
        setTimeout(() => tryWhenSized(attempts + 1), 100);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        tryWhenSized();
        observer.disconnect();
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative z-0 isolate w-full max-w-full overflow-hidden text-center ${className}`}
    >
      {/* nature-nest-camping — responsive display ad (not the sample 728×90 dimensions) */}
      <div className="mx-auto flex w-full max-w-full justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={AD_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
