import { useEffect, useRef } from 'react'
import { Link, Puzzle } from 'lucide-react'

const integrations = [
  {
    name: 'Gmail',
    description: 'Read emails, track unread counts, and get AI summaries — all without leaving the app.',
    icon: '📧',
    color: '#EA4335',
    bg: 'rgba(234,67,53,0.1)',
    border: 'rgba(234,67,53,0.2)',
    status: 'Available',
  },
  {
    name: 'Google Calendar',
    description: 'View and manage your events. Get daily schedule overviews powered by AI.',
    icon: '📅',
    color: '#4285F4',
    bg: 'rgba(66,133,244,0.1)',
    border: 'rgba(66,133,244,0.2)',
    status: 'Available',
  },
  {
    name: 'Google Sign-In',
    description: 'Secure, one-tap authentication with your existing Google account.',
    icon: '🔐',
    color: '#34A853',
    bg: 'rgba(52,168,83,0.1)',
    border: 'rgba(52,168,83,0.2)',
    status: 'Available',
  },
  {
    name: 'GitHub',
    description: 'Connect your repos and get AI-powered code activity summaries and PR tracking.',
    icon: '🐙',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.1)',
    status: 'Beta',
  },
  {
    name: 'Expense Tracking',
    description: 'Log and categorize expenses. Get AI insights on your spending patterns.',
    icon: '💰',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.2)',
    status: 'Coming Soon',
  },
  {
    name: 'More Integrations',
    description: 'Slack, Notion, Linear, and more are on the roadmap. Request your favorite tool.',
    icon: '🔌',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.2)',
    status: 'Roadmap',
  },
]

const statusStyle: Record<string, string> = {
  'Available': 'bg-green-900/60 text-green-400 border border-green-700/30',
  'Beta': 'bg-blue-900/60 text-blue-300 border border-blue-700/30',
  'Coming Soon': 'bg-amber-900/60 text-amber-300 border border-amber-700/30',
  'Roadmap': 'bg-purple-900/60 text-purple-300 border border-purple-700/30',
}

export default function Integrations() {
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
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-700/30 text-xs text-blue-300 mb-6">
            <Puzzle size={12} />
            Integrations
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Works with the tools{' '}
            <span className="text-gradient">you already use.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Lifetime AI connects to your existing digital life. No migration, no new accounts — just connect and go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.map((integration, i) => (
            <div
              key={integration.name}
              className="reveal card-hover rounded-2xl p-6 border backdrop-blur-sm cursor-default"
              style={{
                background: integration.bg,
                borderColor: integration.border,
                transitionDelay: `${(i % 3) * 80}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                  style={{ background: integration.bg, borderColor: integration.border }}
                >
                  {integration.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[integration.status]}`}>
                  {integration.status}
                </span>
              </div>
              <h3 className="text-white font-bold text-base mb-2">{integration.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{integration.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <div className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors cursor-pointer">
            <Link size={14} />
            <span>Request an integration</span>
          </div>
        </div>
      </div>
    </section>
  )
}
