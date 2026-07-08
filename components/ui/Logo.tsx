import Image from "next/image";

interface LogoProps {
  src: string;
  alt?: string;
}

export default function Logo({ src, alt = "Eden Baco Security" }: LogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={65}
      priority
      className="
        w-[140px]
        sm:w-[150px]
        md:w-[160px]
        h-auto
      "
    />
  );
}
