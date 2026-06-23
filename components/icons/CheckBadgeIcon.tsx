import { SVGProps } from "react";

export default function CheckBadgeIcon(
props: SVGProps<SVGSVGElement>
){
return(
<svg viewBox="0 0 24 24" fill="none" {...props}>
<path
d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
stroke="currentColor"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
)
}