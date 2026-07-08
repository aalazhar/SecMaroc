export default function ShieldVisual() {
    return (
      <div
        className="
          relative
          animate-[shieldFloat_6s_ease-in-out_infinite]
        "
      >
  
        {/* glow */}
  
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-[#C8102E]/20
            blur-[90px]
          "
        />
  
  
        <svg
          viewBox="0 0 280 320"
          className="
            relative
            w-[320px]
            drop-shadow-[0_0_60px_rgba(200,16,46,.25)]
          "
          fill="none"
        >
  
          <path
            className="shield-path"
            d="
            M140 16
            L32 56
            V152
            C32 212 80 264 140 284
            C200 264 248 212 248 152
            V56
            L140 16Z"
            fill="#1E1E1C"
            stroke="#F4F1E8"
            strokeOpacity=".15"
            strokeWidth="2"
          />
  
  
          <path
            d="
            M140 32
            L48 68
            V152
            C48 204 88 252 140 268
            C192 252 232 204 232 152
            V68
            L140 32Z"
            fill="#111"
            opacity=".9"
          />
  
  
          <path
            d="
            M140 48
            L64 80
            V152
            C64 196 96 240 140 252
            C184 240 216 196 216 152
            V80
            L140 48Z"
            fill="#C8102E"
            opacity=".18"
          />
  
  
  
          <text
            x="140"
            y="175"
            textAnchor="middle"
            fill="#F4F1E8"
            fontSize="58"
            fontFamily="Bebas Neue"
          >
            EB
          </text>
  
  
        </svg>
  
  
      </div>
    );
  }