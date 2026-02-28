function PrinterSVG() {
  return (
    <svg viewBox="0 0 320 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
      {/* Base platform */}
      <rect x="40" y="300" width="240" height="20" rx="4" fill="#e2e8f0" />
      {/* Build plate */}
      <rect x="60" y="270" width="200" height="32" rx="3" fill="#cbd5e1" />
      <rect x="70" y="275" width="180" height="22" rx="2" fill="#dde4ef" />
      {/* Frame left vertical */}
      <rect x="50" y="80" width="16" height="220" rx="4" fill="#e2e8f0" />
      {/* Frame right vertical */}
      <rect x="254" y="80" width="16" height="220" rx="4" fill="#e2e8f0" />
      {/* Frame top horizontal */}
      <rect x="50" y="70" width="220" height="16" rx="4" fill="#cbd5e1" />
      {/* Cross bar (X-axis gantry) */}
      <rect x="58" y="140" width="204" height="12" rx="4" fill="#94a3b8" />
      {/* Print head carriage */}
      <rect x="138" y="128" width="44" height="36" rx="5" fill="#64748b" />
      {/* Nozzle */}
      <rect x="156" y="164" width="8" height="16" rx="2" fill="#475569" />
      <circle cx="160" cy="182" r="4" fill="#f97316" />
      {/* Filament spool housing */}
      <rect x="210" y="80" width="60" height="60" rx="8" fill="#f1f5f9" />
      <circle cx="240" cy="110" r="20" fill="#e2e8f0" />
      <circle cx="240" cy="110" r="8" fill="#cbd5e1" />
      {/* AMS multi-color unit at base */}
      <rect x="60" y="235" width="200" height="36" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Color slots */}
      {['#ef4444','#3b82f6','#22c55e','#f59e0b'].map((color, i) => (
        <rect key={i} x={72 + i * 46} y="245" width="34" height="16" rx="3" fill={color} opacity="0.85" />
      ))}
      {/* Control panel */}
      <rect x="54" y="82" width="40" height="26" rx="4" fill="#1e293b" />
      <circle cx="64" cy="95" r="4" fill="#3b82f6" />
      <rect x="72" y="91" width="16" height="3" rx="1" fill="#475569" />
      <rect x="72" y="97" width="10" height="3" rx="1" fill="#475569" />
      {/* Brand text on body */}
      <rect x="108" y="195" width="104" height="28" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="160" y="214" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155" fontFamily="system-ui">BAMBU LAB</text>
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            New Arrival
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Bambu Lab A1 Combo 3D Printer
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            Fast. Precise. Effortless.
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors text-base shadow-md shadow-blue-200">
              Buy Now
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <span className="text-gray-400 text-sm">
              AED 2,150 · Free shipping
            </span>
          </div>
        </div>

        {/* Product image */}
        <div className="flex-1 w-full">
          <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-3xl p-8 flex items-center justify-center aspect-square max-w-sm mx-auto lg:max-w-full">
            <PrinterSVG />
          </div>
        </div>
      </div>
    </section>
  )
}
