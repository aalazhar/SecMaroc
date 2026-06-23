import {SVGProps} from "react";

export default function LocationIcon(
props:SVGProps<SVGSVGElement>
){
return(
<svg viewBox="0 0 24 24" fill="none" {...props}>
<path
d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
stroke="currentColor"
strokeWidth="1.5"
/>
<circle
cx="12"
cy="11"
r="3"
stroke="currentColor"
strokeWidth="1.5"
/>
</svg>
)
}