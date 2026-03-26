import { useEffect, useRef, useState } from 'react'
import { Brain, Sparkles, LayoutDashboard, Shield, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    icon: Brain,
    emoji: '🧠',
    title: 'Lifetime Memory',
    subtitle: 'Your AI Never Forgets',
    description: 'Every note, task, conversation, and preference is remembered permanently. Ask Nova about something from months ago — it knows.',
    color: 'from-purple-600/20 to-purple-500/5',
    border: 'border-purple-700/20',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-950',
  },
  {
    icon: Sparkles,
    emoji: '✨',
    title: 'Smart AI Assistant',
    subtitle: 'Always Here to Help',
    description: 'Natural conversations, automated task creation, smart suggestions based on your habits, and proactive alerts — Nova works 24/7 for you.',
    color: 'from-pink-600/20 to-pink-500/5',
    border: 'border-pink-700/20',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-950',
  },
  {
    icon: LayoutDashboard,
    emoji: '🏠',
    title: 'Everything in One App',
    subtitle: 'Your Life, Simplified',
    description: 'Calendar, tasks, notes, shopping lists, emails, and finance tracking — all unified in one beautifully designed interface.',
    color: 'from-blue-600/20 to-blue-500/5',
    border: 'border-blue-700/20',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-950',
  },
  {
    icon: Shield,
    emoji: '🔒',
    title: 'Secure & Private',
    subtitle: 'Your Data is Safe',
    description: 'End-to-end encryption, zero data selling, and a privacy-first architecture. Your life\'s information stays yours — always.',
    color: 'from-green-600/20 to-green-500/5',
    border: 'border-green-700/20',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-950',
  },
]

export default function Onboarding() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % slides.length), 4000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[active]
  const Icon = slide.icon

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="orb orb-purple w-[500px] h-[500px] bottom-[-100px] right-[-100px]" style={{ background: 'rgba(236,72,153,0.08)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/30 text-xs text-purple-300 mb-6">
            <Sparkles size={12} />
            Core Values
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Built on principles{' '}
            <span className="text-gradient">that matter.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Every feature in Lifetime AI was designed around four core pillars.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-10 items-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left — card */}
          <div
            className={`rounded-3xl p-8 lg:p-10 border bg-gradient-to-br ${slide.color} ${slide.border} transition-all duration-500`}
          >
            <div className={`w-16 h-16 rounded-2xl ${slide.iconBg} border ${slide.border} flex items-center justify-center text-3xl mb-6`}>
              {slide.emoji}
            </div>
            <div className="text-sm font-semibold text-white/40 mb-2 uppercase tracking-wider">{slide.subtitle}</div>
            <h3 className="text-3xl font-black text-white mb-4">{slide.title}</h3>
            <p className="text-white/55 text-base leading-relaxed">{slide.description}</p>
          </div>

          {/* Right — slide list */}
          <div className="space-y-4">
            {slides.map((s, i) => {
              const SIcon = s.icon
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl p-5 border transition-all duration-300 flex items-center gap-4 ${
                    active === i
                      ? `bg-gradient-to-br ${s.color} ${s.border}`
                      : 'bg-white/2 border-white/8 hover:bg-white/5'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${
                    active === i ? `${s.iconBg} border ${s.border}` : 'bg-white/5 border border-white/10'
                  }`}>
                    {s.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm transition-colors ${active === i ? 'text-white' : 'text-white/60'}`}>
                      {s.title}
                    </div>
                    <div className="text-xs text-white/35 truncate">{s.subtitle}</div>
                  </div>
                  {active === i && (
                    <div className="w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0" />
                  )}
                </button>
              )
            })}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      active === i ? 'w-6 h-2 bg-gradient-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActive(a => (a - 1 + slides.length) % slides.length)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => setActive(a => (a + 1) % slides.length)}
                  className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
