import { SVGProps } from "react";

export default function VipIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >

      <rect
        x="3"
        y="7"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="12"
        cy="13"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

    </svg>
  );
}