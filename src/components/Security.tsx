import { useEffect, useRef } from 'react'
import { Shield, Lock, Eye, Server, Key, CheckCircle } from 'lucide-react'

const pillars = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All your data is encrypted in transit and at rest. Nobody — not even us — can read your private information.',
  },
  {
    icon: Eye,
    title: 'Zero Data Selling',
    description: 'Your personal data is never sold to advertisers or third parties. Period. We make money from the app, not from you.',
  },
  {
    icon: Key,
    title: 'Secure OAuth Only',
    description: 'Google integrations use industry-standard OAuth 2.0. We never see or store your Google password.',
  },
  {
    icon: Server,
    title: 'Privacy-First Architecture',
    description: 'Minimal data collection by design. We only request the permissions we actually need to provide our features.',
  },
]

const trustBadges = [
  { label: 'OAuth 2.0', sub: 'Google Verified' },
  { label: 'HTTPS', sub: 'All connections' },
  { label: 'AES-256', sub: 'Encryption standard' },
  { label: '0 Ads', sub: 'No tracking' },
]

export default function Security() {
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
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/5 to-transparent" />
      <div className="orb w-[400px] h-[400px] top-1/2 left-[-100px] -translate-y-1/2" style={{ background: 'rgba(52,211,153,0.05)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="reveal order-2 lg:order-1">
            {/* Central shield */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-green-950/80 to-teal-950/40 border border-green-700/30 flex items-center justify-center animate-glow shadow-xl shadow-green-900/20">
                  <Shield size={52} className="text-green-400" />
                </div>
                {/* Orbiting badges */}
                {trustBadges.map((badge, i) => {
                  const angle = (i * 360) / trustBadges.length
                  const rad = (angle * Math.PI) / 180
                  const x = Math.cos(rad) * 110
                  const y = Math.sin(rad) * 90
                  return (
                    <div
                      key={badge.label}
                      className="absolute text-center"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                        top: '50%',
                        left: '50%',
                      }}
                    >
                      <div className="px-3 py-2 rounded-xl bg-[#111] border border-white/10 min-w-[72px] shadow-lg shadow-black/40">
                        <div className="text-white font-bold text-xs">{badge.label}</div>
                        <div className="text-white/40 text-[9px]">{badge.sub}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-3 mt-16">
              {[
                'Your data stays on encrypted servers',
                'Google passwords never touched',
                'Transparent privacy policy',
                'You can delete all data anytime',
                'No ads, no tracking pixels',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-950/60 border border-green-700/30 text-xs text-green-300 mb-6">
                <Shield size={12} />
                Security & Privacy
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Your data.{' '}
                <span className="text-gradient">Your control.</span>
                <br />Always.
              </h2>
              <p className="text-lg text-white/50 mb-10 leading-relaxed">
                We take privacy as seriously as you do. Lifetime AI is built with security-first principles — because your personal life deserves nothing less.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className="reveal rounded-2xl p-5 bg-white/3 border border-white/8 card-hover"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-green-950/60 border border-green-700/30 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-green-400" />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1.5">{pillar.title}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{pillar.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
