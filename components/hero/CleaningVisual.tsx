export default function CleaningVisual() {
    return (
      <div
        className="
          relative
          w-[340px]
          h-[340px]
          animate-[cleanFloat_7s_ease-in-out_infinite]
        "
      >
  
        {/* main glow */}
  
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-[#023E8A]/20
            blur-[90px]
          "
        />
  
  
        {/* floating circles */}
  
        <div
          className="
            absolute
            inset-8
            rounded-full
            border
            border-white/20
            animate-[spinSlow_20s_linear_infinite]
          "
        />
  
  
        <div
          className="
            absolute
            inset-16
            rounded-full
            border
            border-[#023E8A]/30
            animate-[spinReverse_14s_linear_infinite]
          "
        />
  
  
  
        {/* SVG core */}
  
        <svg
          viewBox="0 0 300 300"
          className="
            relative
            w-full
            h-full
            drop-shadow-[0_0_50px_rgba(2,62,138,.25)]
          "
          fill="none"
        >
  
  
          {/* outer ring */}
  
          <circle
            cx="150"
            cy="150"
            r="105"
            stroke="#F4F1E8"
            strokeOpacity=".15"
            strokeWidth="2"
          />
  
  
  
          {/* inner glass */}
  
          <circle
            cx="150"
            cy="150"
            r="75"
            fill="#1E1E1C"
          />
  
  
  
          <circle
            cx="150"
            cy="150"
            r="60"
            fill="#023E8A"
            opacity=".25"
          />
  
  
  
          {/* shine */}
  
          <path
            d="
              M80 150
              C110 100 190 100 220 150
            "
            stroke="#F4F1E8"
            strokeOpacity=".5"
            strokeWidth="2"
            strokeLinecap="round"
            className="
              animate-[shine_3s_ease-in-out_infinite]
            "
          />
  
  
  
          {/* sparkle points */}
  
          <circle
            cx="95"
            cy="90"
            r="5"
            fill="#F4F1E8"
            className="
              animate-[sparkle_2s_ease-in-out_infinite]
            "
          />
  
  
          <circle
            cx="210"
            cy="190"
            r="4"
            fill="#F4F1E8"
            className="
              animate-[sparkle_2.5s_ease-in-out_infinite]
            "
          />
  
  
  
          <text
            x="150"
            y="165"
            textAnchor="middle"
            fill="#F4F1E8"
            fontSize="44"
            fontFamily="Bebas Neue"
          >
            EB
          </text>
  
  
        </svg>
  
  
        {/* particles */}
  
        <span
          className="
            absolute
            top-10
            left-20
            w-2
            h-2
            rounded-full
            bg-white
            animate-[particle_4s_ease-in-out_infinite]
          "
        />
  
  
        <span
          className="
            absolute
            bottom-16
            right-20
            w-3
            h-3
            rounded-full
            bg-[#023E8A]
            animate-[particle_5s_ease-in-out_infinite]
          "
        />
  
  
      </div>
    );
  }