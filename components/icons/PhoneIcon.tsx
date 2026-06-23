import {SVGProps} from "react";

export default function PhoneIcon(
props:SVGProps<SVGSVGElement>
){

return(

<svg
viewBox="0 0 24 24"
fill="none"
{...props}
>

<path
d="M22 16.92v3a2 2 0 01-2.18 2
19.79 19.79 0 01-8.63-3.07
A19.5 19.5 0 014.5 10.5
1 9.79 9.79 0 011.43 1.83
A2 2 0 013.41 0h3a2 2 0 012 1.72
c.12.96.36 1.9.7 2.81
a2 2 0 01-.45 2.11L7.91 7.91
a16 16 0 006.29 6.29l.79-.79
a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"

stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"

/>

</svg>

)
}