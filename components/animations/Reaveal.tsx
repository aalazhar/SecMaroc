// "use client";

// import { useEffect, useRef, useState } from "react";

// interface Props {
//   children: React.ReactNode;
// }

// export default function Reveal({ children }: Props) {
//   const ref = useRef<HTMLDivElement>(null);

//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-700 ${
//         visible
//           ? "opacity-100 translate-y-0"
//           : "opacity-0 translate-y-8"
//       }`}
//     >
//       {children}
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;

  className?: string;
}

export default function Reveal({
  children,

  className,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
