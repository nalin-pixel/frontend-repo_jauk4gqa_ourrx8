import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-neutral-900/70 dark:via-neutral-900/40 dark:to-neutral-900 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 ring-1 ring-emerald-300/50 mb-4">Since 1981 • Singapore</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Solution for Construction and Renovation in Singapore
          </h1>
          <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
            HRFC (Happy Renovation & Furniture Contractor) delivers end‑to‑end interior outfitting for homes and businesses — fast, reliable, and quality‑driven.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 text-white font-medium shadow hover:bg-emerald-500 focus:outline-none focus-visible:ring ring-emerald-500">
              Get a Free Quote
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring ring-emerald-500">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
