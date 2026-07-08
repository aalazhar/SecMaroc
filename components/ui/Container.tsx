interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
          mx-auto
          w-full
          max-w-[1400px]
  
          px-5
          md:px-8
          xl:px-16
  
          ${className}
        `}
    >
      {children}
    </div>
  );
}
