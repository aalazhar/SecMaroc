// import Link from "next/link";
// import clsx from "clsx";

// interface ButtonProps {
//   children: React.ReactNode;
//   href?: string;
//   variant?: "primary" | "secondary" | "outline";
//   className?: string;
// }

// export default function Button({
//   children,
//   href,
//   variant = "primary",
//   className,
// }: ButtonProps) {
//   const styles = clsx(
//     "inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm uppercase tracking-[2px] transition-all duration-300",
//     {
//       "bg-red-700 text-white hover:bg-red-800":
//         variant === "primary",

//       "border border-zinc-600 text-zinc-100 hover:bg-zinc-800":
//         variant === "secondary",
//     },
//     className
//   );

//   if (href) {
//     return (
//       <Link href={href} className={styles}>
//         {children}
//       </Link>
//     );
//   }

//   return <button className={styles}>{children}</button>;
// }

import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;

  href?: string;

  variant?: "primary" | "outline";

  type?: "button" | "submit";
}

export default function Button({
  children,

  href,

  variant = "primary",

  type = "button",
}: ButtonProps) {
  const styles = `

inline-flex
items-center
justify-center
px-8
py-4
text-xs
font-bold
tracking-[2px]
uppercase
transition
duration-300
cursor-pointer

${
  variant === "primary"
    ? "bg-red text-white hover:bg-red-dark"
    : "bg-transparent text-white border border-white/25 hover:bg-white/10"
}

`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  );
}
