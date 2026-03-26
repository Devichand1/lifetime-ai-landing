import { useEffect, useRef, useState } from 'react'
import { Bot, Send, Sparkles } from 'lucide-react'

const conversation = [
  {
    role: 'user',
    text: 'What should I focus on today?',
  },
  {
    role: 'ai',
    text: "Good morning! Here's your daily focus:\n\n**🔴 Urgent:** Project proposal due by 3 PM\n**📅 Today:** Team standup at 10 AM, client call at 2 PM\n**📧 Emails:** 3 unread require your attention\n\nI'd suggest starting with the proposal. Want me to help you outline it?",
  },
  {
    role: 'user',
    text: 'Yes, help me outline the Q4 proposal',
  },
  {
    role: 'ai',
    text: "I'll create a structured outline based on your previous proposals and notes:\n\n**Q4 Growth Proposal**\n1. Executive Summary\n2. Market Analysis\n3. Strategy & Goals\n4. Budget Breakdown\n5. Timeline & Milestones\n\nShall I draft each section using your saved notes?",
  },
]

const suggestions = [
  'Show pending tasks',
  'Calendar today',
  'Productivity tips',
  'Weekly summary',
  'Prioritize tasks',
  'Email summaries',
  'Meeting agendas',
  'Brainstorming',
  'Expense tracking',
  'Daily routines',
  'Goal setting',
  'Plan tomorrow',
]

export default function AIShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [showMessages, setShowMessages] = useState<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const intervals = conversation.map((_, i) =>
      setTimeout(() => setShowMessages(n => Math.max(n, i + 1)), i * 900 + 200)
    )
    return () => intervals.forEach(clearTimeout)
  }, [visible])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-x-hidden">
      <div className="orb orb-pink w-[400px] h-[400px] top-0 left-[-150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className={`w-full min-w-0 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/30 text-xs text-purple-300 mb-6">
              <Bot size={12} />
              Meet Nova
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              Your AI that truly{' '}
              <span className="text-gradient">understands you.</span>
            </h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Nova isn't just a chatbot. It reads your calendar, knows your tasks, and remembers your preferences — giving you intelligent, personalized answers every single time.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: '🎯', title: 'Context-Aware', desc: 'Knows your schedule, tasks, and emails before you even ask.' },
                { icon: '⚡', title: 'Real-Time Streaming', desc: 'Responses stream instantly — no waiting for the full answer.' },
                { icon: '🧠', title: 'Lifetime Memory', desc: 'Your AI remembers everything so you never have to repeat yourself.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{item.title}</div>
                    <div className="text-white/45 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggestion chips */}
            <div>
              <div className="text-xs text-white/30 mb-3 font-medium uppercase tracking-wider">Try asking Nova</div>
              <div className="marquee-container relative">
                <div className="flex gap-2 overflow-hidden">
                  <div className="flex gap-2 animate-scroll-left flex-shrink-0">
                    {[...suggestions, ...suggestions].map((s, i) => (
                      <span
                        key={i}
                        className="flex-shrink-0 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 whitespace-nowrap"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — chat UI */}
          <div className={`w-full min-w-0 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-full rounded-2xl bg-[#111] border border-white/8 overflow-hidden shadow-2xl shadow-black/40">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-white/2">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Nova AI</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
                    <span className="text-xs text-white/40">Always available</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <Sparkles size={16} className="text-purple-400" />
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[380px] flex flex-col justify-end">
                {conversation.slice(0, showMessages).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-500`}
                    style={{ animation: 'slideUp 0.4s ease-out' }}
                  >
                    {msg.role === 'ai' && (
                      <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mb-0.5">
                        <Bot size={12} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] px-4 py-3 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'chat-bubble-user text-white'
                          : 'chat-bubble-ai text-white/80'
                      }`}
                    >
                      {msg.text.split('\n').map((line, j) => (
                        <span key={j}>
                          {line.split(/(\*\*.*?\*\*)/).map((part, k) =>
                            part.startsWith('**') && part.endsWith('**')
                              ? <strong key={k} className="text-white font-semibold">{part.slice(2, -2)}</strong>
                              : part
                          )}
                          {j < msg.text.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {showMessages < conversation.length && showMessages > 0 && (
                  <div className="flex items-end gap-2 justify-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="chat-bubble-ai px-4 py-3 flex items-center gap-1.5">
                      {[0,1,2].map(d => (
                        <div
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"
                          style={{ animationDelay: `${d * 150}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-sm text-white/25 flex-1">Ask Nova anything...</span>
                  <button className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Send size={14} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
