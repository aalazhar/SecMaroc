import { SVGProps } from "react";

export default function SurveillanceIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >

      <path
        d="M23 7l-7 5 7 5V7z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <rect
        x="1"
        y="5"
        width="15"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

    </svg>
  );
}