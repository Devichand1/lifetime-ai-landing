import { Shield, Database, BarChart2, Share2, UserCheck, Mail, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    icon: <Database size={18} className="text-purple-400" />,
    title: 'Data We Collect',
    bullets: [
      'Account info: your name, email address, and profile picture from Google sign-in.',
      'App data: tasks, events, notes, expenses, and other content you create.',
      'Connected services: data from Gmail and Google Calendar when you grant access.',
      'Usage data: app interactions and feature usage to improve the experience.',
    ],
  },
  {
    icon: <BarChart2 size={18} className="text-purple-400" />,
    title: 'How We Use Your Data',
    bullets: [
      'To provide and personalize the app experience for you.',
      'To power AI features that help organize your daily life.',
      'To sync across your connected services (Gmail, Calendar).',
      'To improve app performance, fix bugs, and develop new features.',
    ],
  },
  {
    icon: <Share2 size={18} className="text-purple-400" />,
    title: 'Third-Party Sharing',
    bullets: [
      'We do not sell your personal data to third parties.',
      'We only share data with service providers necessary to operate the app (e.g., cloud hosting).',
      'We may share anonymized, aggregated data for analytics purposes.',
    ],
  },
  {
    icon: <UserCheck size={18} className="text-purple-400" />,
    title: 'Your Rights',
    bullets: [
      'Access: Request a copy of all your personal data at any time.',
      'Deletion: Request permanent deletion of your account and all associated data.',
      'Portability: Export your data in a standard format.',
      'Correction: Update your personal information through the app.',
    ],
  },
  {
    icon: <Mail size={18} className="text-purple-400" />,
    title: 'Contact Us',
    bullets: [
      'For privacy-related questions or requests, reach out via the Help & Support section or email us at hello@lifetimeai.app.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Lifetime AI" className="w-7 h-7 object-contain rounded-lg" />
            <span className="text-sm font-semibold text-white/70">Lifetime AI</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3">
            Privacy{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-white/40 text-sm">Last updated: February 2026</p>
        </div>

        {/* Intro card */}
        <div className="flex items-start gap-4 bg-purple-500/8 border border-purple-500/20 rounded-2xl p-5 mb-10">
          <Shield size={20} className="text-purple-400 mt-0.5 shrink-0" />
          <p className="text-white/60 text-sm leading-relaxed">
            We believe in transparency. Here's exactly what data we collect and how we use it.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white/3 border border-white/8 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-base font-semibold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-2.5">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/25 text-xs mt-12">
          © {new Date().getFullYear()} Lifetime AI. All rights reserved.
        </p>
      </div>
    </div>
  )
}
