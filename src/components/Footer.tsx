import { Mail, Github, Twitter } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Roadmap', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '#security' },
    { label: 'Data Policy', href: '/privacy' },
  ],
  Support: [
    { label: 'Help Center', href: '#' },
    { label: 'Report a Bug', href: '#' },
    { label: 'Suggestions', href: '#' },
    { label: 'Status', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Lifetime AI" className="w-9 h-9 object-contain rounded-xl" />
              <span className="text-lg font-bold text-white">
                Lifetime <span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Your AI Life OS. Everything organized. Nothing forgotten. Built to help you take control of every aspect of your daily life.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="mailto:hello@lifetimeai.app"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">{section}</div>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Lifetime AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <span>v1.0.2 Beta</span>
            <span>·</span>
            <span>Built with ❤️ using React Native & Expo</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
