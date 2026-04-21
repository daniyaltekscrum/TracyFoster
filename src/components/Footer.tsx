import { MapPin, Phone, Mail, Shield } from 'lucide-react';

const navLinks = [
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'About', href: '#about' },
  { label: 'Areas I Work With', href: '#areas' },
  { label: 'Services & Fees', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
  { label: 'Book Free Chat', href: '#booking' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#2B2B2B' }}>
      {/* CTA Banner */}
      <div
        className="py-14 px-6"
        style={{ background: 'linear-gradient(90deg, #7A9E7E 0%, #6B8F6F 100%)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">
              Ready to take the first step?
            </h3>
            <p className="font-light text-white/75">
              Your free 15-minute chat is waiting — no commitment required.
            </p>
          </div>
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#booking');
            }}
            className="whitespace-nowrap py-4 px-8 rounded-full font-medium text-base transition-all duration-200"
            style={{
              background: 'white',
              color: '#7A9E7E',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
            }}
          >
            Book Free Initial Chat
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div>
              <p className="font-serif text-2xl font-semibold text-white">Tracy Foster</p>
              <p
                className="text-xs font-light tracking-widest uppercase mt-0.5"
                style={{ color: '#7A9E7E', letterSpacing: '0.18em' }}
              >
                Therapy
              </p>
            </div>
            <p className="font-light text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', maxWidth: '320px' }}>
              Compassionate, integrative therapy for adults navigating anxiety, grief,
              relationship difficulties, and life transitions. Based in Weybridge,
              Surrey — available online throughout the UK.
            </p>

            {/* BACP badge */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl self-start"
              style={{ background: 'rgba(122,158,126,0.15)', border: '1px solid rgba(122,158,126,0.25)' }}
            >
              <Shield size={18} style={{ color: '#7A9E7E' }} />
              <div>
                <p className="text-xs font-semibold text-white">MBACP Accredited</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>British Association for Counselling</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-light transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#7A9E7E')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin size={15} style={{ color: '#7A9E7E', flexShrink: 0, marginTop: '2px' }} />
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.6' }}>
                  Elgin Road<br />
                  Weybridge, Surrey<br />
                  KT13 8SN
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} style={{ color: '#7A9E7E', flexShrink: 0 }} />
                <a
                  href="tel:+447444917007"
                  className="text-sm font-light transition-colors"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#7A9E7E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  +44 7444 917007
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} style={{ color: '#7A9E7E', flexShrink: 0 }} />
                <a
                  href="mailto:tracyjanefoster@gmail.com"
                  className="text-sm font-light transition-colors"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#7A9E7E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  tracyjanefoster@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
        >
          <p>© {new Date().getFullYear()} Tracy Foster Therapy. All rights reserved.</p>
          <p>ICO Registration ZA501800 · Professionally Indemnity Insured · MBACP Accredited</p>
        </div>
      </div>
    </footer>
  );
}
