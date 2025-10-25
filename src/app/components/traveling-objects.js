'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function TravelingObjects() {
  const [objects, setObjects] = useState([
    { id: 1, src: '/images/hicker-remove-bg.png', x: 150, y: 800, speed: 1.4, size: 100 },
    { id: 2, src: '/images/lamp-remove-bg.png', x: 400, y: 900, speed: 1.2, size: 100 },
    { id: 3, src: '/images/hicker-remove-bg.png', x: 700, y: 850, speed: 1.8, size: 100 },
    { id: 4, src: '/images/lamp-remove-bg.png', x: 950, y: 950, speed: 1.1, size: 100 },
  ]);

  const animationRef = useRef(null);

  useEffect(() => {
    let lastTime = 0;

    const animate = (time) => {
      if (time - lastTime > 16) {
        setObjects((prev) =>
          prev.map((obj) => {
            let newY = obj.y - obj.speed;
            if (newY < -100) {
              newY = window.innerHeight + 100;
              obj.x = Math.random() * window.innerWidth;
              obj.speed = 1 + Math.random() * 1.5;
            }
            return { ...obj, y: newY };
          })
        );
        lastTime = time;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setObjects((prev) =>
        prev.map((obj) => ({
          ...obj,
          x: Math.min(obj.x, window.innerWidth - 50),
          y: Math.min(obj.y, window.innerHeight + 50),
        }))
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {objects.map((obj) => (
        <div
          key={obj.id}
          className="absolute opacity-80 animate-float-slow select-none"
          style={{
            left: `${obj.x}px`,
            top: `${obj.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image
            src={obj.src}
            alt=""
            width={obj.size}
            height={obj.size}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      ))}

      {/* Floating animation */}
      <style jsx>{`
        @keyframes floatSlow {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -60%) rotate(5deg);
          }
        }
        .animate-float-slow {
          animation: floatSlow 3s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
