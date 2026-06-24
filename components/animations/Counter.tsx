// "use client";

// import { useEffect, useRef, useState } from "react";

// interface CounterProps {
//   value: number;

//   duration?: number;

//   suffix?: string;
// }

// export default function Counter({
//   value,
//   duration = 2000,
//   suffix = "",
// }: CounterProps) {
//   const [count, setCount] = useState(0);

//   const ref = useRef<HTMLSpanElement | null>(null);

//   const started = useRef(false);

//   useEffect(() => {
//     const element = ref.current;

//     if (!element) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];

//         if (entry.isIntersecting && !started.current) {
//           started.current = true;

//           animate();

//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//   function animate() {
//     const start = performance.now();

//     function update(now: number) {
//       const progress = Math.min((now - start) / duration, 1);

//       /*
// same easing from original html
// */

//       const eased = 1 - Math.pow(1 - progress, 3);

//       setCount(Math.floor(eased * value));

//       if (progress < 1) {
//         requestAnimationFrame(update);
//       }
//     }

//     requestAnimationFrame(update);
//   }

//   return (
//     <span ref={ref}>
//       {count}
//       {value >= 500 ? "+" : ""}
//       {suffix}
//     </span>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
}

export default function Counter({
  value,
  suffix = "+",
}: Props) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;

    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, hasStarted]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}