"use client";
import { useEffect, useRef } from "react";

/** nature-nest-camping — ca-pub-2010341405700903 / 9800205682 */
const AD_CLIENT = "ca-pub-2010341405700903";
const AD_SLOT = "9800205682";

/**
 * Responsive AdSense needs a non-zero width before `push({})` or you get:
 * "TagError: adsbygoogle.push() error: No slot size for availableWidth=0".
 * We wait for layout (ResizeObserver + rAF) then push once.
 *
 * @param {{ className?: string }} props
 */
export default function GoogleAd({ className = "" }) {
  const containerRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;

    const tryPush = () => {
      if (cancelled || pushedRef.current) return;
      if (el.offsetWidth <= 0) return;
      pushedRef.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        pushedRef.current = false;
        console.error("AdSense push error:", err);
      }
    };

    const ro = new ResizeObserver(() => {
      tryPush();
    });
    ro.observe(el);

    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(tryPush);
    });

    const poll = setInterval(() => {
      if (pushedRef.current || cancelled) {
        clearInterval(poll);
        return;
      }
      tryPush();
    }, 80);

    const stopPoll = setTimeout(() => clearInterval(poll), 20000);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      clearInterval(poll);
      clearTimeout(stopPoll);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative z-0 mx-auto w-full min-w-0 max-w-full text-center ${className}`}
    >
      {/* nature-nest-camping */}
      <div className="mx-auto flex w-full min-w-0 max-w-full justify-center">
        <ins
          className="adsbygoogle w-full min-w-0"
          style={{ display: "block", width: "100%" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={AD_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
