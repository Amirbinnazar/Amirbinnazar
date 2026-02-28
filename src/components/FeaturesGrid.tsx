import type { ReactNode } from 'react'

interface Feature {
  icon: ReactNode
  label: string
  value: string
  sub?: string
}

function SpeedIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 6v6l4 2" />
      <path d="M20 2l-4 4m4 0h-4v-4" />
    </svg>
  )
}

function VolumeIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

function SetupIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  )
}

function ColorsIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="6.5" cy="12" r="2.5" />
      <circle cx="20" cy="14.5" r="2.5" />
      <circle cx="11.5" cy="20" r="2.5" />
      <path d="M15.5 8.5c.5 1 .5 3-.5 5s-3 3.5-4 4" />
    </svg>
  )
}

const features: Feature[] = [
  {
    icon: <SpeedIcon />,
    label: 'SPEED',
    value: '500 mm/s',
    sub: 'Max print speed',
  },
  {
    icon: <VolumeIcon />,
    label: 'VOLUME',
    value: '256³',
    sub: 'Build volume (mm)',
  },
  {
    icon: <SetupIcon />,
    label: 'SETUP',
    value: 'AI Monitor',
    sub: 'Spaghetti detection',
  },
  {
    icon: <ColorsIcon />,
    label: 'COLORS',
    value: 'Multi-Color',
    sub: 'Up to 4 filaments',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <div
            key={f.label}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            <div className="text-blue-500">{f.icon}</div>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">
              {f.label}
            </p>
            <p className="text-xl font-black text-gray-900 leading-none">
              {f.value}
            </p>
            {f.sub && (
              <p className="text-xs text-gray-400">{f.sub}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
