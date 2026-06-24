import React from "react";

interface PhoneIconProps extends React.SVGProps<SVGSVGElement> {}

export default function PhoneIcon({
  className = "",
  ...props
}: PhoneIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path
        d="
          M22 16.92v3a2 2 0 0 1-2.18 2
          19.8 19.8 0 0 1-8.63-3.07
          19.5 19.5 0 0 1-6-6
          A19.8 19.8 0 0 1 2.12 4.18
          2 2 0 0 1 4.11 2h3
          a2 2 0 0 1 2 1.72
          c.12.9.33 1.77.62 2.6
          a2 2 0 0 1-.45 2.11L8.01 9.7
          a16 16 0 0 0 6 6l1.27-1.27
          a2 2 0 0 1 2.11-.45
          c.83.29 1.7.5 2.6.62
          A2 2 0 0 1 22 16.92Z
        "
      />
    </svg>
  );
}
