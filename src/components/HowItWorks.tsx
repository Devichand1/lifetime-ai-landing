import { useEffect, useRef } from 'react'
import { UserCheck, PlugZap, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserCheck,
    title: 'Sign in with Google',
    description: 'One tap sign-in with your Google account. Lifetime AI instantly recognizes you and sets up your personalized workspace — no lengthy setup required.',
    highlight: 'Instant setup. No passwords.',
    color: 'purple',
  },
  {
    number: '02',
    icon: PlugZap,
    title: 'Connect your apps',
    description: 'Grant access to Gmail and Google Calendar via secure OAuth. Your data syncs in real time, keeping Lifetime AI always up-to-date with what matters to you.',
    highlight: 'Gmail + Calendar in one click.',
    color: 'pink',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Let AI take the wheel',
    description: 'Nova AI instantly analyzes your schedule, emails, and tasks to provide intelligent briefings, smart suggestions, and automate the repetitive parts of your day.',
    highlight: 'Your AI starts working for you.',
    color: 'amber',
  },
]

const colorMap = {
  purple: {
    badge: 'bg-purple-950/60 border-purple-700/30 text-purple-300',
    icon: 'bg-purple-950/60 border-purple-700/30 text-purple-400',
    connector: 'from-purple-600/40',
    highlight: 'text-purple-300',
    number: 'text-purple-500',
  },
  pink: {
    badge: 'bg-pink-950/60 border-pink-700/30 text-pink-300',
    icon: 'bg-pink-950/60 border-pink-700/30 text-pink-400',
    connector: 'from-pink-600/40 to-amber-600/40',
    highlight: 'text-pink-300',
    number: 'text-pink-500',
  },
  amber: {
    badge: 'bg-amber-950/60 border-amber-700/30 text-amber-300',
    icon: 'bg-amber-950/60 border-amber-700/30 text-amber-400',
    connector: 'from-amber-600/40',
    highlight: 'text-amber-300',
    number: 'text-amber-500',
  },
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="orb orb-purple w-[400px] h-[400px] bottom-0 left-1/2 -translate-x-1/2" style={{ background: 'rgba(124,58,237,0.06)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/30 text-xs text-purple-300 mb-6">
            <Sparkles size={12} />
            Simple Onboarding
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Up and running in{' '}
            <span className="text-gradient">under a minute.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            No complex configuration. No data entry. Lifetime AI reads your digital life and gets to work immediately.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[33%] right-[33%] h-px bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-amber-600/20" />

          {steps.map((step, i) => {
            const Icon = step.icon
            const colors = colorMap[step.color as keyof typeof colorMap]
            return (
              <div
                key={step.number}
                className="reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Number + icon */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-2xl border ${colors.icon} flex items-center justify-center backdrop-blur-sm mb-2 relative z-10`}>
                    <Icon size={24} className={colors.icon.split(' ').find(c => c.startsWith('text-')) || ''} />
                  </div>
                  <div className={`absolute -top-1 -right-3 text-3xl font-black ${colors.number} opacity-30`}>
                    {step.number}
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{step.description}</p>
                <div className={`text-xs font-semibold ${colors.highlight} px-3 py-1.5 rounded-full ${colors.badge} border`}>
                  {step.highlight}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
