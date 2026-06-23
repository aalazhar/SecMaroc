import {SVGProps} from "react";

export default function ClipboardIcon(
props:SVGProps<SVGSVGElement>
){
return(
<svg viewBox="0 0 24 24" fill="none" {...props}>
<path
d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
stroke="currentColor"
strokeWidth="1.5"
/>

<path
d="M9 5a3 3 0 006 0"
stroke="currentColor"
strokeWidth="1.5"
/>

</svg>
)
}