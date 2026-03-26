import { useEffect, useRef } from 'react'
import { ArrowRight, Smartphone, Sparkles } from 'lucide-react'

export default function Download() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="download" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-transparent to-pink-950/20" />
      <div className="orb orb-purple w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(124,58,237,0.12)' }} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-700/40 text-sm text-purple-300 mb-8 backdrop-blur-sm">
          <Sparkles size={14} className="text-purple-400" />
          Free Download — No Credit Card Required
        </div>

        {/* Headline */}
        <h2 className="reveal text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Take control of
          <br />
          <span className="text-gradient">your life today.</span>
        </h2>

        <p className="reveal text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
          Download Lifetime AI for free. Connect your Google account, and let Nova start organizing your world in minutes.
        </p>

        {/* Download buttons */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* App Store */}
          <a
            href="#"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-white/90 transition-all duration-200 shadow-xl shadow-white/10 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-black/50 leading-none mb-0.5">Download on the</div>
              <div className="text-base font-bold leading-none">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#1a1a1a] border border-white/15 text-white font-semibold hover:bg-[#222] transition-all duration-200 shadow-xl shadow-black/30 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
              <path d="M3 20.5v-17c0-.83.93-1.3 1.6-.8l14 8.5c.63.38.63 1.32 0 1.7l-14 8.5c-.67.5-1.6.03-1.6-.8z" fill="#4285F4"/>
              <path d="M3 20.5v-17" stroke="#34A853" strokeWidth="2"/>
              <path d="M3 3.5l10.25 10.25" stroke="#FBBC04" strokeWidth="2"/>
              <path d="M3 20.5l10.25-10.25" stroke="#EA4335" strokeWidth="2"/>
              <path d="M3 3.5l10.25 10.25L17.6 12l-4.12-4.12" fill="#FBBC04"/>
              <path d="M3 20.5l10.25-10.25L17.6 12l-4.12 4.12" fill="#EA4335"/>
              <path d="M3 3.5v17l10.25-8.75L3 3.5z" fill="#34A853" opacity="0.5"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-white/50 leading-none mb-0.5">Get it on</div>
              <div className="text-base font-bold leading-none">Google Play</div>
            </div>
          </a>
        </div>

        {/* Features list */}
        <div className="reveal flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/40">
          {[
            '✓ Free to download',
            '✓ No credit card needed',
            '✓ Available on iOS & Android',
            '✓ Setup in under 60 seconds',
          ].map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {/* Version badge */}
        <div className="reveal mt-10 inline-flex items-center gap-2 text-xs text-white/30">
          <Smartphone size={12} />
          <span>Current version: v1.0.2 Beta</span>
        </div>
      </div>
    </section>
  )
}
