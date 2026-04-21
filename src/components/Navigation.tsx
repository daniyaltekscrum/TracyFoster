import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'About', href: '#about' },
  { label: 'Areas', href: '#areas' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start group"
          >
            <span
              className="font-serif text-xl font-semibold leading-tight tracking-wide"
              style={{ color: scrolled ? '#2B2B2B' : '#2B2B2B' }}
            >
              Tracy Foster
            </span>
            <span
              className="text-xs font-light tracking-widest uppercase"
              style={{ color: '#7A9E7E', letterSpacing: '0.18em' }}
            >
              Therapy
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: scrolled ? '#3D3D3D' : '#2B2B2B' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#7A9E7E')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled ? '#3D3D3D' : '#2B2B2B')
                }
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#booking')}
              className="btn-primary text-sm py-3 px-6"
            >
              Book Free Chat
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#2B2B2B' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(43, 43, 43, 0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 transition-transform duration-300 md:hidden flex flex-col`}
        style={{
          background: 'white',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: '#EBF2EC' }}>
          <span className="font-serif text-lg font-semibold" style={{ color: '#2B2B2B' }}>
            Tracy Foster Therapy
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={20} style={{ color: '#6B7280' }} />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-8 gap-6 flex-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base font-medium transition-colors"
              style={{ color: '#2B2B2B' }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="px-6 pb-8">
          <button
            onClick={() => handleNavClick('#booking')}
            className="btn-primary w-full text-center"
          >
            Book Free Chat
          </button>
        </div>
      </div>
    </>
  );
}
