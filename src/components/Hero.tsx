import { useEffect, useRef } from 'react';
import { ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current, badgesRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F8F6F3 0%, #EBF2EC 50%, #F8F6F3 100%)' }}
    >
      {/* Background botanical accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(122,158,126,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center min-h-screen md:min-h-0 md:py-32">
          {/* Left: Text */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase"
              style={{ color: '#7A9E7E', opacity: 0 }}
              ref={badgesRef as React.RefObject<HTMLDivElement>}
            >
              <span
                className="inline-block w-8 h-px"
                style={{ background: '#7A9E7E' }}
              />
              BACP Accredited Therapist · Weybridge, Surrey
            </div>

            <h1
              ref={headingRef}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
              style={{ color: '#2B2B2B' }}
            >
              Therapy{' '}
              <em className="italic font-normal" style={{ color: '#7A9E7E' }}>
                tailored
              </em>
              <br />
              to you
            </h1>

            <p
              ref={subRef}
              className="text-lg font-light leading-relaxed max-w-md"
              style={{ color: '#5A5A5A', lineHeight: '1.75' }}
            >
              A confidential, warm and non-judgmental space where you can explore what's
              holding you back — and move towards the life you want to live.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 items-center">
              <a href="#booking" className="btn-primary text-base">
                Book Free Initial Chat
              </a>
              <a href="#how-i-work" className="btn-outline text-base">
                How I Work
              </a>
            </div>

            {/* Trust signals */}
            <div
              className="flex flex-wrap gap-6 items-center pt-4"
              style={{ borderTop: '1px solid rgba(122,158,126,0.2)' }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} style={{ color: '#7A9E7E' }} />
                <span className="text-sm font-medium" style={{ color: '#5A5A5A' }}>
                  MBACP Accredited
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} style={{ color: '#C4A882' }} />
                <span className="text-sm font-medium" style={{ color: '#5A5A5A' }}>
                  7+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: '#7A9E7E' }}
                />
                <span className="text-sm font-medium" style={{ color: '#5A5A5A' }}>
                  Free 15-min Consultation
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 md:order-2 relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: '4/5', maxHeight: '620px' }}
            >
              <img
                src="https://static.wixstatic.com/media/7b852c_d851450285ec42e6b3675b47fcc3d99d~mv2.jpg"
                alt="Tracy Foster — Psychotherapist in a calm, welcoming office"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top center' }}
              />
              {/* Sage overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 50%, rgba(43,43,43,0.25) 100%)',
                }}
              />
            </div>

            {/* Floating card */}
            <div
              className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4"
            >
              <p className="font-serif italic text-base leading-snug" style={{ color: '#2B2B2B' }}>
                "You don't have to face this alone."
              </p>
              <p className="text-xs font-medium mt-1" style={{ color: '#7A9E7E' }}>
                — Tracy Foster, MBACP Accred
              </p>
            </div>

            {/* Decorative circle */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
              style={{ background: 'rgba(196, 168, 130, 0.2)' }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full pointer-events-none"
              style={{ background: 'rgba(122, 158, 126, 0.15)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#7A9E7E' }}>
          Scroll
        </span>
        <div
          className="w-px h-10 rounded-full"
          style={{
            background: 'linear-gradient(to bottom, #7A9E7E, transparent)',
            animation: 'fadeInUp 1.5s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
