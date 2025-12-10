// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
import Snowfall from 'react-snowfall';

export default function TravelingObjects() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      background: 'linear-gradient(180deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background content */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1,
        color: 'white'
      }}>
      </div>

      {/* Enhanced Snowfall Layer */}
      <div style={{ 
        position: 'fixed', 
        width: '100%', 
        height: '100%', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none', 
        zIndex: 10 
      }}>
        <Snowfall 
          snowflakeCount={200}
          color="#ffffff"
          speed={[0.5, 3.0]}
          wind={[-0.5, 2.0]}
          radius={[0.5, 4.0]}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            opacity: 0.8
          }}
        />
      </div>

      {/* Foreground larger snowflakes for depth */}
      <div style={{ 
        position: 'fixed', 
        width: '100%', 
        height: '100%', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none', 
        zIndex: 20 
      }}>
        <Snowfall 
          snowflakeCount={50}
          color="#ffffff"
          speed={[1.0, 5.0]}
          wind={[-1.0, 3.0]}
          radius={[4.0, 8.0]}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            opacity: 0.6
          }}
        />
      </div>

      {/* Subtle background layer for depth */}
      <div style={{ 
        position: 'fixed', 
        width: '100%', 
        height: '100%', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none', 
        zIndex: 0 
      }}>
        <Snowfall 
          snowflakeCount={100}
          color="#e0f2ff"
          speed={[0.3, 1.5]}
          wind={[-0.3, 1.0]}
          radius={[0.3, 2.0]}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            opacity: 0.3
          }}
        />
      </div>
    </div>
  );
  // const [objects, setObjects] = useState([
  //   { id: 1, src: '/images/hicker-remove-bg.png', x: 150, y: 800, speed: 1.4, size: 100 },
  //   { id: 2, src: '/images/hicker-remove-bg.png', x: 700, y: 850, speed: 1.8, size: 100 },
  // ]);

  // const animationRef = useRef(null);

  // useEffect(() => {
  //   let lastTime = 0;

  //   const animate = (time) => {
  //     if (time - lastTime > 16) {
  //       setObjects((prev) =>
  //         prev.map((obj) => {
  //           let newY = obj.y - obj.speed;
  //           if (newY < -100) {
  //             newY = window.innerHeight + 100;
  //             obj.x = Math.random() * window.innerWidth;
  //             obj.speed = 1 + Math.random() * 1.5;
  //           }
  //           return { ...obj, y: newY };
  //         })
  //       );
  //       lastTime = time;
  //     }

  //     animationRef.current = requestAnimationFrame(animate);
  //   };

  //   animationRef.current = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(animationRef.current);
  // }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setObjects((prev) =>
  //       prev.map((obj) => ({
  //         ...obj,
  //         x: Math.min(obj.x, window.innerWidth - 50),
  //         y: Math.min(obj.y, window.innerHeight + 50),
  //       }))
  //     );
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // return (
  //   <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
  //     {objects.map((obj) => (
  //       <div
  //         key={obj.id}
  //         className="absolute opacity-80 animate-float-slow select-none"
  //         style={{
  //           left: `${obj.x}px`,
  //           top: `${obj.y}px`,
  //           transform: 'translate(-50%, -50%)',
  //         }}
  //       >
  //         <Image
  //           src={obj.src}
  //           alt=""
  //           width={obj.size}
  //           height={obj.size}
  //           style={{ objectFit: 'contain' }}
  //           priority
  //         />
  //       </div>
  //     ))}

  //     {/* Floating animation */}
  //     <style jsx>{`
  //       @keyframes floatSlow {
  //         0% {
  //           transform: translate(-50%, -50%) rotate(0deg);
  //         }
  //         100% {
  //           transform: translate(-50%, -60%) rotate(5deg);
  //         }
  //       }
  //       .animate-float-slow {
  //         animation: floatSlow 3s ease-in-out infinite alternate;
  //       }
  //     `}</style>
  //   </div>
  // );
}
