import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

const typingPhrases = [
  'What tasks do I have today?',
  'Summarize my unread emails.',
  'Schedule a meeting for tomorrow.',
  'Write a note about my project idea.',
  'Show my week at a glance.',
]

function PhoneMockup() {
  return (
    <div className="phone-mockup animate-float">
      <div className="phone-notch" />
      <div className="phone-screen">
        {/* Status bar */}
        <div className="flex justify-between items-center px-5 py-1 text-[9px] text-white/40">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-px">
              {[4, 3, 2, 1].map(h => (
                <div key={h} style={{ height: h * 2 }} className="w-1 bg-white/50 rounded-sm self-end" />
              ))}
            </div>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <rect x="0.5" y="0.5" width="10" height="7" rx="1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
              <rect x="1.5" y="1.5" width="7" height="5" rx="0.5" fill="rgba(255,255,255,0.5)"/>
            </svg>
          </div>
        </div>

        {/* App header */}
        <div className="px-4 pt-3 pb-2">
          <div className="text-[10px] text-white/40">Good Morning</div>
          <div className="text-[14px] font-bold text-white leading-tight">Your Day at a Glance</div>
        </div>

        {/* Hero card */}
        <div className="mx-4 rounded-2xl p-3 mb-3" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)' }}>
          <div className="flex justify-between mb-2">
            <div className="text-center">
              <div className="text-[16px] font-bold text-white">5</div>
              <div className="text-[8px] text-white/70">Events</div>
            </div>
            <div className="text-center">
              <div className="text-[16px] font-bold text-white">12</div>
              <div className="text-[8px] text-white/70">Emails</div>
            </div>
            <div className="text-center">
              <div className="text-[16px] font-bold text-white">8</div>
              <div className="text-[8px] text-white/70">Tasks</div>
            </div>
          </div>
          <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
            <div className="text-[9px] text-white font-medium">✨ Ask AI for insights</div>
          </div>
        </div>

        {/* Quick access grid */}
        <div className="px-4">
          <div className="text-[9px] text-white/40 mb-2">Quick Access</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Tasks', emoji: '✅', badge: 8 },
              { label: 'Calendar', emoji: '📅', badge: 5 },
              { label: 'Email', emoji: '📧', badge: 12 },
              { label: 'AI Chat', emoji: '🤖', badge: 0 },
              { label: 'Notes', emoji: '📝', badge: 0 },
              { label: 'Finance', emoji: '💰', badge: 0 },
            ].map(item => (
              <div
                key={item.label}
                className="relative rounded-xl p-2 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="text-[14px] mb-0.5">{item.emoji}</div>
                <div className="text-[7px] text-white/60">{item.label}</div>
                {item.badge > 0 && (
                  <div
                    className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[6px] font-bold text-white"
                    style={{ background: '#ec4899' }}
                  >
                    {item.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI Chat preview */}
        <div className="px-4 mt-3">
          <div className="chat-bubble-ai p-2.5 text-[8px] text-white/80 leading-relaxed">
            <span className="text-purple-400 font-semibold">Nova AI: </span>
            You have 2 meetings today and 3 high-priority tasks due. Want me to help you prioritize?
          </div>
          <div className="mt-1.5 ml-auto max-w-[70%] chat-bubble-user p-2 text-[8px] text-white">
            Yes, prioritize my tasks for today
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60)
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length - 1)), 30)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setPhraseIndex(i => (i + 1) % typingPhrases.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, phraseIndex])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="orb orb-purple w-[600px] h-[600px] top-[-100px] left-[-200px]" />
      <div className="orb orb-pink w-[400px] h-[400px] bottom-0 right-[-100px]" />
      <div className="orb orb-purple w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(168,85,247,0.08)' }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-700/40 text-sm text-purple-300 mb-8 backdrop-blur-sm">
              <Sparkles size={14} className="text-purple-400" />
              <span className="font-medium">AI-Powered Life Management</span>
              <span className="bg-gradient-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">Beta</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-white">Your AI</span>
              <br />
              <span className="text-gradient">Life OS.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl lg:text-2xl text-white/50 font-medium mb-4 leading-relaxed">
              Everything organized.{' '}
              <span className="text-white/80">Nothing forgotten.</span>
            </p>

            {/* Typing animation */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white/60 mb-10 max-w-full">
              <span className="text-purple-400 font-medium text-xs">Nova AI</span>
              <span className="w-px h-3 bg-white/20" />
              <span className="truncate">{displayed}<span className="animate-pulse text-purple-400">|</span></span>
            </div>

            {/* Description */}
            <p className="text-base text-white/50 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Meet <strong className="text-white">Nova</strong>, your personal AI assistant that unifies Gmail, Google Calendar, tasks, and notes into one intelligent command center — so you can focus on what matters.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#download"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-base shadow-xl shadow-purple-900/40 hover:shadow-purple-900/60 hover:scale-105 transition-all duration-200"
              >
                Download Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                See Features
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                  <div
                    key={letter}
                    className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: `hsl(${260 + i * 20}, 70%, 50%)`,
                      zIndex: 5 - i,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-white/40 mt-0.5">Loved by early users</p>
              </div>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 scale-75 blur-3xl rounded-full bg-gradient-to-br from-purple-600/30 to-pink-500/20" />
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  )
}
