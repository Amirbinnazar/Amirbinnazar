export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-black tracking-widest text-gray-900 uppercase">
          Additronix
        </span>

        {/* CTA group */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm text-gray-500 font-medium">
            Starting at{' '}
            <span className="text-gray-900 font-semibold">AED 2,150</span>
          </span>
          <button className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Buy Now
          </button>
          {/* Hamburger */}
          <button className="flex flex-col gap-1.5 p-1" aria-label="Menu">
            <span className="block w-6 h-0.5 bg-gray-900 rounded" />
            <span className="block w-6 h-0.5 bg-gray-900 rounded" />
            <span className="block w-6 h-0.5 bg-gray-900 rounded" />
          </button>
        </div>
      </div>
    </header>
  )
}
