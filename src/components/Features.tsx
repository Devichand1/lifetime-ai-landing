import { useEffect, useRef } from 'react'
import {
  Bot, CheckSquare, Calendar, Mail, FileText,
  Search, Zap, Bell, BarChart2, Shield
} from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Nova AI Assistant',
    description: 'Chat naturally with Nova — your personal AI that understands context, answers questions, and automates your workflow with real-time streaming responses.',
    gradient: 'from-purple-600/20 to-purple-500/5',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-950/60',
    border: 'border-purple-700/20',
    highlight: true,
    badge: 'AI-Powered',
  },
  {
    icon: CheckSquare,
    title: 'Smart Task Management',
    description: 'Organize tasks with priority levels (High/Medium/Low), due dates, and completion tracking. Let AI suggest what to tackle first.',
    gradient: 'from-green-600/15 to-green-500/5',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-950/60',
    border: 'border-green-700/20',
  },
  {
    icon: Calendar,
    title: 'Google Calendar Sync',
    description: 'See all your events in a clean timeline view. Seamless OAuth integration keeps your schedule always in sync — no manual entry needed.',
    gradient: 'from-blue-600/15 to-blue-500/5',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-950/60',
    border: 'border-blue-700/20',
  },
  {
    icon: Mail,
    title: 'Gmail Integration',
    description: 'Read and manage emails without switching apps. Unread badges, sender previews, and AI summaries keep your inbox under control.',
    gradient: 'from-red-600/15 to-red-500/5',
    iconColor: 'text-red-400',
    iconBg: 'bg-red-950/60',
    border: 'border-red-700/20',
  },
  {
    icon: FileText,
    title: 'Intelligent Notes',
    description: 'Capture ideas instantly with category tags — Personal, Work, Health, Finance. Find any note in seconds with universal search.',
    gradient: 'from-amber-600/15 to-amber-500/5',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-950/60',
    border: 'border-amber-700/20',
  },
  {
    icon: Search,
    title: 'Universal Search',
    description: 'One search bar to find anything across tasks, emails, calendar events, and notes. Powered by AI to understand natural language queries.',
    gradient: 'from-cyan-600/15 to-cyan-500/5',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-950/60',
    border: 'border-cyan-700/20',
  },
  {
    icon: Zap,
    title: 'Unified Dashboard',
    description: 'Your day\'s events, unread emails, and pending tasks — all visible at a glance. Animated stats and quick-action tiles keep you moving.',
    gradient: 'from-yellow-600/15 to-yellow-500/5',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-950/60',
    border: 'border-yellow-700/20',
  },
  {
    icon: Bell,
    title: 'Daily Briefings',
    description: 'Get a personalized morning briefing from Nova. Know what\'s ahead, what\'s urgent, and get AI suggestions to make your day more productive.',
    gradient: 'from-pink-600/15 to-pink-500/5',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-950/60',
    border: 'border-pink-700/20',
  },
  {
    icon: BarChart2,
    title: 'Expense Tracking',
    description: 'Track your spending alongside your schedule and tasks. Get AI-powered financial insights and summaries directly in the app.',
    gradient: 'from-indigo-600/15 to-indigo-500/5',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-950/60',
    border: 'border-indigo-700/20',
    badge: 'Coming Soon',
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'End-to-end encryption keeps your data safe. You own your data — no selling, no tracking. Built with a privacy-first architecture.',
    gradient: 'from-teal-600/15 to-teal-500/5',
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-950/60',
    border: 'border-teal-700/20',
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="orb orb-purple w-[500px] h-[500px] top-0 right-[-200px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/30 text-xs text-purple-300 mb-6">
            <Zap size={12} />
            Everything You Need
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            One app.<br />
            <span className="text-gradient">Every aspect of life.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Lifetime AI combines all the tools you use every day into a single, intelligent interface — powered by AI that actually understands your life.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={`reveal card-hover relative rounded-2xl p-6 bg-gradient-to-br ${f.gradient} border ${f.border} backdrop-blur-sm cursor-default ${f.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                {/* Badge */}
                {f.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${f.badge === 'AI-Powered' ? 'bg-gradient-primary text-white' : 'bg-white/10 text-white/60'}`}>
                      {f.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${f.iconBg} border ${f.border} flex items-center justify-center mb-4 icon-ring`}>
                  <Icon size={20} className={f.iconColor} />
                </div>

                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
