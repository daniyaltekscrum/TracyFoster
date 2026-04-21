import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(122,158,126,0.2)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="px-5 py-3">
        <a
          href="#booking"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-medium text-sm"
          style={{
            background: '#7A9E7E',
            color: 'white',
            boxShadow: '0 4px 14px rgba(122,158,126,0.35)',
          }}
        >
          <Calendar size={15} />
          Book Free Initial Chat
        </a>
      </div>
    </div>
  );
}
