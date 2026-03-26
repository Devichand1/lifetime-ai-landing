import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Product Manager',
    avatar: 'S',
    color: '#7c3aed',
    rating: 5,
    text: "Lifetime AI completely changed how I start my day. Nova gives me a perfect morning briefing — emails, meetings, tasks. I feel in control of my schedule for the first time.",
    highlight: 'Nova gives me a perfect morning briefing',
  },
  {
    name: 'James K.',
    role: 'Freelance Developer',
    avatar: 'J',
    color: '#ec4899',
    rating: 5,
    text: "The Gmail integration alone is worth it. I asked Nova to summarize my unread emails and it gave me a perfect breakdown with priorities. Game changer for inbox zero.",
    highlight: 'Game changer for inbox zero',
  },
  {
    name: 'Priya L.',
    role: 'Startup Founder',
    avatar: 'P',
    color: '#f59e0b',
    rating: 5,
    text: "I was juggling 5 different apps — calendar, todoist, gmail, notes, and a finance tracker. Lifetime AI replaced all of them. The unified dashboard is absolutely brilliant.",
    highlight: 'Lifetime AI replaced all of them',
  },
  {
    name: 'Alex T.',
    role: 'Student',
    avatar: 'A',
    color: '#10b981',
    rating: 5,
    text: "As a student, I need to track assignments, deadlines, study notes, and emails. This app is my one-stop-shop. The task priority system keeps me focused during exam season.",
    highlight: 'My one-stop-shop for everything',
  },
  {
    name: 'Maria R.',
    role: 'Executive Assistant',
    avatar: 'M',
    color: '#3b82f6',
    rating: 5,
    text: "I manage calendars for 3 executives. The Google Calendar sync and AI briefings save me 2 hours every morning. Lifetime AI is now essential to my workflow.",
    highlight: 'Saves me 2 hours every morning',
  },
  {
    name: 'David C.',
    role: 'Content Creator',
    avatar: 'D',
    color: '#8b5cf6',
    rating: 5,
    text: "The notes feature with AI assistance is phenomenal. I dump all my content ideas into notes and Nova helps me organize and expand them. My output has doubled.",
    highlight: 'My output has doubled',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const row1 = testimonials.slice(0, 3)
  const row2 = testimonials.slice(3, 6)

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="orb orb-purple w-[400px] h-[400px] top-1/4 right-0" style={{ background: 'rgba(124,58,237,0.06)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-950/60 border border-yellow-700/30 text-xs text-yellow-300 mb-6">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            Early User Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            People are{' '}
            <span className="text-gradient">loving it.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Early users are transforming their daily routines with Lifetime AI. Here's what they have to say.
          </p>
        </div>

        {/* Two-row scroll */}
        <div className="space-y-5 overflow-hidden relative">
          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

          {/* Row 1 */}
          <div className="flex gap-5 marquee-container">
            <div className="flex gap-5 animate-scroll-left flex-shrink-0">
              {[...row1, ...row1, ...row1].map((t, i) => (
                <TestimonialCard key={`r1-${i}`} testimonial={t} />
              ))}
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex gap-5 marquee-container">
            <div className="flex gap-5 animate-scroll-right flex-shrink-0">
              {[...row2, ...row2, ...row2].map((t, i) => (
                <TestimonialCard key={`r2-${i}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial: t }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 rounded-2xl p-6 bg-[#111] border border-white/8 relative overflow-hidden whitespace-normal">
      <Quote size={20} className="text-white/10 absolute top-4 right-4" />
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: t.color }}
        >
          {t.avatar}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{t.name}</div>
          <div className="text-white/40 text-xs">{t.role}</div>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-white/55 text-sm leading-relaxed">
        "{t.text}"
      </p>
    </div>
  )
}
