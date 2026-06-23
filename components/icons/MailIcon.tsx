import {SVGProps} from "react";

export default function MailIcon(
props:SVGProps<SVGSVGElement>
){

return(

<svg
viewBox="0 0 24 24"
fill="none"
{...props}
>


<path
d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"

stroke="currentColor"
strokeWidth="2"
/>


<path
d="M22 6l-10 7L2 6"

stroke="currentColor"
strokeWidth="2"

/>


</svg>

)

}