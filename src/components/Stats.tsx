const stats = [
  { value: '1 App', label: 'for your entire life', sub: 'Tasks, Calendar, Email, Notes & more' },
  { value: 'Real-time', label: 'AI responses', sub: 'Stream-powered Nova AI assistant' },
  { value: '6+', label: 'connected tools', sub: 'Gmail, Calendar, GitHub & more' },
  { value: '∞', label: 'AI memory', sub: 'Never forgets what matters to you' },
]

export default function Stats() {
  return (
    <section className="relative py-16 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-transparent to-pink-950/10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="stat-number text-4xl lg:text-5xl font-black mb-1 group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-white/80 font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/35 text-xs leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
