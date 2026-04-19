"use client";
import { useLayoutEffect, useRef } from "react";

/** nature-nest-camping — ca-pub-2010341405700903 / 9800205682 */
const AD_CLIENT = "ca-pub-2010341405700903";
const AD_SLOT = "9800205682";

/**
 * Mirrors Google’s snippet: `<ins class="adsbygoogle">` then `(adsbygoogle=[]).push({})`
 * once per unit. Loader is in `layout.tsx` (`id="adsbygoogle-js"`).
 *
 * Avoids IntersectionObserver + width checks — they prevented `push()` on some pages.
 *
 * @param {{ className?: string }} props
 */
export default function GoogleAd({ className = "" }) {
  const pushedRef = useRef(false);

  useLayoutEffect(() => {
    if (pushedRef.current) return;
    pushedRef.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      pushedRef.current = false;
      console.error("AdSense push error:", err);
    }
  }, []);

  return (
    <div
      className={`relative z-0 mx-auto w-full max-w-full text-center ${className}`}
    >
      {/* nature-nest-camping */}
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
