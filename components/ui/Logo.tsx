// // import Link from "next/link";

// // export default function Logo() {
// //   return (
// //     <Link
// //       href="/"
// //       className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl lg:text-3xl tracking-[3px]"
// //     >
// //       <span className="h-2 w-2 rounded-full bg-red-700 animate-pulse" />

// //       <span>GRS MAROC</span>
// //     </Link>
// //   );
// // }

// import Link from "next/link";

// export default function Logo() {
//   return (
//     <Link
//       href="/"
//       className="
// inline-flex
// items-center
// gap-3
// font-bebas
// text-3xl
// tracking-[3px]
// text-dark
// "
//     >
//       <span
//         className="
// w-2
// h-2
// bg-red
// rounded-full
// animate-pulse
// "
//       />
//       GRS MAROC
//     </Link>
//   );
// }


export default function Logo() {
  return (
    <div
      className="
inline-flex
items-center
gap-3
font-bebas
text-3xl
tracking-[3px]
text-dark
"
    >
      <span
        className="
w-2
h-2
bg-red
rounded-full
animate-pulse
"
      />
      GRS MAROC
    </div>
  );
}
