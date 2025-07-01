// "use client";

// import { useRef } from "react";

// export default function AnimatedCircleButton() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const innerCircleRef = useRef<HTMLImageElement>(null);

//   const handleClick = (e: React.MouseEvent) => {
//     const container = containerRef.current;
//     const innerCircle = innerCircleRef.current;
//     if (!container || !innerCircle) return;

//     // 1. Риппл эффект
//     const ripple = document.createElement("span");
//     ripple.className =
//       "absolute rounded-full bg-black/20 animate-ripple pointer-events-none";
//     const rect = container.getBoundingClientRect();
//     const size = Math.max(rect.width, rect.height);
//     const x = e.clientX - rect.left - size / 2;
//     const y = e.clientY - rect.top - size / 2;

//     ripple.style.width = ripple.style.height = `${size}px`;
//     ripple.style.left = `${x}px`;
//     ripple.style.top = `${y}px`;
//     container.appendChild(ripple);
//     ripple.addEventListener("animationend", () => ripple.remove());

//     // 2. Анимация внутреннего круга
//     innerCircle.classList.remove("animate-ping-custom");
//     void innerCircle.offsetWidth; // Reset animation
//     innerCircle.classList.add("animate-ping-custom");
//   };

//   return (
//     <div
//       ref={containerRef}
//       onClick={handleClick}
//       className="relative mt-[78px] w-[228px] h-[228px] mx-auto overflow-hidden cursor-pointer"
//     >
//       <img src="/buttoncircle.svg" className="w-full h-full" alt="Outer" />

//       <img
//         ref={innerCircleRef}
//         src="/buttoncircle2.svg"
//         className="absolute top-1/2 left-1/2 w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2"
//         alt="Inner"
//       />

//       <img
//         src="/moon.svg"
//         className="absolute top-1/2 left-1/2 w-[70px] h-[70px] -translate-x-1/2 -translate-y-1/2"
//         alt="Moon"
//       />

//       {/* ripple + circle animation */}
//       <style>{`
//         @keyframes ripple {
//           0% { transform: scale(0); opacity: 0.6; }
//           100% { transform: scale(2.5); opacity: 0; }
//         }
//         .animate-ripple {
//           animation: ripple 600ms linear;
//         }

//         @keyframes ping-custom {
//           0% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.1); opacity: 0.7; }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         .animate-ping-custom {
//           animation: ping-custom 400ms ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// }
