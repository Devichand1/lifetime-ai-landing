import { CheckCircle, User, CheckSquare, Award, AlertTriangle, XCircle, Edit3, FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    icon: <CheckCircle size={18} className="text-purple-400" />,
    title: 'Acceptance of Terms',
    bullets: [
      'By accessing or using LifeGPT, you agree to be bound by these Terms of Service.',
      'If you do not agree to these terms, you may not use the app.',
      'You must be at least 13 years old to use this service.',
    ],
  },
  {
    icon: <User size={18} className="text-purple-400" />,
    title: 'User Accounts',
    bullets: [
      'You are responsible for maintaining the security of your account.',
      'You must provide accurate and complete information during sign-up.',
      'You are responsible for all activities that occur under your account.',
      'Notify us immediately if you suspect unauthorized access to your account.',
    ],
  },
  {
    icon: <CheckSquare size={18} className="text-purple-400" />,
    title: 'Acceptable Use',
    bullets: [
      'Do not use the app for any unlawful or prohibited purpose.',
      'Do not attempt to access other users\' accounts or data.',
      'Do not interfere with the app\'s functionality or infrastructure.',
      'Do not use automated systems to access the service without permission.',
    ],
  },
  {
    icon: <Award size={18} className="text-purple-400" />,
    title: 'Intellectual Property',
    bullets: [
      'All app content, design, and code are owned by LifeGPT and protected by intellectual property laws.',
      'You retain ownership of the content you create within the app.',
      'You grant us a license to store and process your content to provide the service.',
    ],
  },
  {
    icon: <AlertTriangle size={18} className="text-purple-400" />,
    title: 'Limitation of Liability',
    bullets: [
      'The app is provided "as is" without warranties of any kind.',
      'We are not liable for any indirect, incidental, or consequential damages.',
      'Our total liability is limited to the amount you paid for the service.',
    ],
  },
  {
    icon: <XCircle size={18} className="text-purple-400" />,
    title: 'Termination',
    bullets: [
      'You can delete your account at any time through the app settings.',
      'We reserve the right to suspend or terminate accounts that violate these terms.',
      'Upon termination, your data will be permanently deleted within 30 days.',
    ],
  },
  {
    icon: <Edit3 size={18} className="text-purple-400" />,
    title: 'Changes to Terms',
    bullets: [
      'We may update these terms from time to time.',
      'We will notify you of significant changes via the app or email.',
      'Continued use of the app after changes constitutes acceptance of the updated terms.',
    ],
  },
]

export default function TermsOfService() {
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
            Terms of{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-white/40 text-sm">Last updated: February 2026</p>
        </div>

        {/* Intro card */}
        <div className="flex items-start gap-4 bg-purple-500/8 border border-purple-500/20 rounded-2xl p-5 mb-10">
          <FileText size={20} className="text-purple-400 mt-0.5 shrink-0" />
          <p className="text-white/60 text-sm leading-relaxed">
            By using LifeGPT, you agree to the following terms. Please read them carefully.
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
