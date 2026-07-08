// import type { ServiceItem } from "@/data/services";

// import ServiceCard from "./ServiceCard";

// interface Props {
//   services: ServiceItem[];
// }

// export default function ServiceGrid({ services }: Props) {
//   return (
//     <div
//       className="
//         grid
//         gap-6

//         sm:grid-cols-2

//         lg:grid-cols-3
//       "
//     >
//       {services.map((service, index) => (
//         <div
//           key={service.id}
//           className="
//             opacity-0
//             animate-[fadeUp_.6s_ease_forwards]
//           "
//           style={{
//             animationDelay: `${index * 120}ms`,
//           }}
//         >
//           <ServiceCard service={service} />
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import ServiceCard from "./ServiceCard";

interface Props {
  services: ServiceItem[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServiceGrid({ services }: Props) {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {services.map((service) => (
        <motion.div key={service.id} variants={itemVariants} className="h-full">
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}