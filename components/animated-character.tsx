export function AnimatedCharacter() {
  return (
    <div className="animated-character" aria-hidden="true">
      <svg
        viewBox="60 30 400 520"
        role="img"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hoodie" x1="145" x2="386" y1="250" y2="492" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffaf0" />
            <stop offset="1" stopColor="#eee8da" />
          </linearGradient>
          <linearGradient id="skin" x1="210" x2="315" y1="92" y2="236" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffd5c2" />
            <stop offset="1" stopColor="#f0a38e" />
          </linearGradient>
          <linearGradient id="laptop" x1="135" x2="386" y1="402" y2="510" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f5f7fb" />
            <stop offset="1" stopColor="#b9c2cf" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0f172a" floodOpacity="0.18" />
          </filter>
        </defs>

        <g className="animated-character-body" filter="url(#softShadow)">
          <path
            d="M139 487c5-92 31-166 79-214h90c48 48 74 122 79 214H139Z"
            fill="url(#hoodie)"
            stroke="#171717"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path
            d="M217 273c14 33 76 33 91 0l31 28c-23 30-48 45-77 45-27 0-52-15-76-45l31-28Z"
            fill="#e8dfcf"
            stroke="#171717"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path d="M214 318c-8 46-10 93-6 141" stroke="#17305f" strokeWidth="7" strokeLinecap="round" />
          <path d="M311 318c8 46 10 93 6 141" stroke="#17305f" strokeWidth="7" strokeLinecap="round" />
          <circle cx="208" cy="459" r="8" fill="#17305f" />
          <circle cx="317" cy="459" r="8" fill="#17305f" />

          <g className="animated-character-rocket">
            <path
              d="M259 391c18-31 49-41 70-30 9 22-5 51-37 67l-33-37Z"
              fill="#f8fafc"
              stroke="#1f2937"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <circle cx="296" cy="388" r="13" fill="#7dd3fc" stroke="#1f2937" strokeWidth="5" />
            <path d="M265 420l-8 33 29-15" fill="#ef4444" stroke="#1f2937" strokeWidth="5" strokeLinejoin="round" />
            <path d="M316 368l30-7-12 27" fill="#ef4444" stroke="#1f2937" strokeWidth="5" strokeLinejoin="round" />
            <path d="M248 432c-18 9-25 24-28 45 21-5 36-14 43-31" fill="#fb923c" stroke="#1f2937" strokeWidth="5" />
          </g>
        </g>

        <g className="animated-character-head">
          <path
            d="M147 199c-30-7-39 43-11 55 20 8 33-14 30-32"
            fill="#f2a690"
            stroke="#171717"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M378 199c30-7 39 43 11 55-20 8-33-14-30-32"
            fill="#f2a690"
            stroke="#171717"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M157 157c8-62 50-100 106-100s98 38 106 100c8 67-18 126-68 151-24 12-52 12-76 0-50-25-76-84-68-151Z"
            fill="url(#skin)"
            stroke="#171717"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path
            d="M151 159c14-74 54-110 120-111 55-1 91 29 106 86-34-26-74-31-118-16-45 15-79 29-108 41Z"
            fill="#161616"
            stroke="#171717"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path d="M208 181c17-9 36-10 54-2" stroke="#171717" strokeWidth="9" strokeLinecap="round" />
          <path d="M299 179c17-8 36-7 52 3" stroke="#171717" strokeWidth="9" strokeLinecap="round" />
          <g className="animated-character-eyes">
            <circle cx="232" cy="218" r="14" fill="#3b2418" />
            <circle cx="325" cy="218" r="14" fill="#3b2418" />
            <circle cx="237" cy="213" r="5" fill="#fff" />
            <circle cx="330" cy="213" r="5" fill="#fff" />
          </g>
          <path d="M279 222c-6 21-13 34-21 40 11 6 24 6 34 1" stroke="#9d554c" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M238 281c18 10 49 10 70 0" stroke="#59322c" strokeWidth="6" strokeLinecap="round" />
          <path
            d="M191 196c16-13 66-13 82 0v38c-15 12-66 12-82 0v-38Zm89 12h14m7-12c16-13 66-13 82 0v38c-15 12-66 12-82 0v-38Z"
            fill="none"
            stroke="#0f172a"
            strokeWidth="9"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>

        <g className="animated-character-hands">
          <path d="M144 408c-37 9-56 29-57 62 31 17 62 6 78-27" fill="#f2a690" stroke="#171717" strokeWidth="7" />
          <path className="animated-character-wave" d="M383 407c38 8 59 29 60 63-31 17-64 6-80-27" fill="#f2a690" stroke="#171717" strokeWidth="7" />
        </g>

        <g>
          <path
            d="M112 407h302c18 0 31 16 28 34l-18 94H99l-18-94c-3-18 11-34 31-34Z"
            fill="url(#laptop)"
            stroke="#1f2937"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <circle cx="262" cy="474" r="23" fill="#64748b" opacity="0.35" />
          <path d="M95 535h334" stroke="#1f2937" strokeWidth="8" strokeLinecap="round" />
          <g className="animated-character-code" stroke="#2563eb" strokeLinecap="round" strokeWidth="5">
            <path d="M137 433h56" />
            <path d="M137 452h34" />
            <path d="M335 433h45" />
            <path d="M310 452h70" />
          </g>
        </g>
      </svg>
    </div>
  );
}
