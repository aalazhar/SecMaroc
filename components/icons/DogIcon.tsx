import { SVGProps } from "react";

export default function DogIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >

      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8 15c2 2 6 2 8 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle
        cx="9"
        cy="10"
        r="1"
        fill="currentColor"
      />

      <circle
        cx="15"
        cy="10"
        r="1"
        fill="currentColor"
      />

    </svg>
  );
}