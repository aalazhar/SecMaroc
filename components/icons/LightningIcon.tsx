import { SVGProps } from "react";

export default function LightningIcon(
props:SVGProps<SVGSVGElement>
){
return(
<svg viewBox="0 0 24 24" fill="none" {...props}>
<path
d="M13 10V3L4 14h7v7l9-11h-7z"
stroke="currentColor"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
)
}