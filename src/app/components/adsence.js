"use client";
import { useEffect, useState, useRef } from "react";

/** nature-nest-camping — matches AdSense unit (ca-pub-2010341405700903 / 9800205682) */
const AD_CLIENT = "ca-pub-2010341405700903";
const AD_SLOT = "9800205682";

export default function GoogleAd() {
  const [loaded, setLoaded] = useState(false);
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    const loadAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense load error:", err);
      }
    };

    // Check if container has width
    const checkWidth = () => {
      const container = adRef.current;
      if (container && container.offsetWidth > 0) {
        loadAd();

        // Detect when iframe loads
        const checkIframe = setInterval(() => {
          if (container.querySelector("iframe")) {
            setLoaded(true);
            clearInterval(checkIframe);
          }
        }, 500);
      } else {
        // Retry after short delay if width=0
        setTimeout(checkWidth, 100);
      }
    };

    // Optional: lazy load only when visible
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        checkWidth();
        observer.disconnect();
      }
    });

    observer.observe(adRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={adRef}
      className="relative z-0 isolate max-w-full overflow-hidden"
      style={{
        width: "100%",
        minHeight: loaded ? "auto" : "0",
        display: loaded ? "block" : "none",
      }}
    >
      {/* nature-nest-camping */}
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
