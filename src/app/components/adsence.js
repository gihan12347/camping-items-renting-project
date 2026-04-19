"use client";
import { useEffect, useRef } from "react";

/** nature-nest-camping — AdSense account / ad unit (ca-pub-2010341405700903 / 9800205682) */
const AD_CLIENT = "ca-pub-2010341405700903";
const AD_SLOT = "9800205682";

/**
 * Ad unit for use inside the page body. The global loader script lives in `layout.tsx`
 * (`pagead/js/adsbygoogle.js?client=...`), per Google’s requirement that the script and
 * `<ins class="adsbygoogle">` + `push({})` appear in the document body.
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
      className={`relative z-0 isolate mx-auto flex w-full max-w-full justify-center overflow-hidden ${className}`}
    >
      {/* nature-nest-camping — matches AdSense unit snippet */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
