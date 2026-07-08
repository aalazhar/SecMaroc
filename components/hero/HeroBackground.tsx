export default function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div
        className="
          absolute
          inset-0
          bg-[#F0F6FC]
        "
      />

      {/* Dark diagonal panel */}
      <div
        className="
          hidden
          lg:block
          absolute
          top-0
          right-0
          h-full
          w-[45%]
          bg-[#1E1E1C]
          [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]
          overflow-hidden
        "
      >
        {/* soft sky glow inside the dark panel so it doesn't feel disconnected */}
        <div
          aria-hidden
          className="
            absolute
            top-1/4
            right-1/4
            h-[300px]
            w-[300px]
            rounded-full
            bg-[radial-gradient(circle,rgba(14,165,233,0.18),transparent_70%)]
            blur-2xl
            animate-glow-pulse
          "
        />
      </div>

      {/* Grid texture */}
      <div
        className="
          absolute
          inset-0
          opacity-40
          bg-[linear-gradient(rgba(14,165,233,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,.05)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Left brand line */}
      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-[4px]
          bg-gradient-to-b
          from-[#C8102E]
          via-[#C8102E]
          to-[#0EA5E9]
        "
      />

      {/* Visual glow area — now breathing instead of static */}
      <div
        className="
          absolute
          right-[12%]
          top-1/2
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-[#0EA5E9]/20
          blur-[120px]
          animate-glow-pulse
        "
      />
    </>
  );
}
