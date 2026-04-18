"use client";
import { useEffect, useState, useRef } from "react";

export default function GoogleAd() {
  const [loaded, setLoaded] = useState(false);
  const slotId = "5470040138"; // Your AdSense slot ID
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
  }, [slotId]);

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
      <ins
        className="adsbygoogle"
        style={{ display: "block", position: "relative", zIndex: 0 }}
        data-ad-client="ca-pub-2010341405700903"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
