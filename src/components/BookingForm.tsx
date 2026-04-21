import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferred_contact: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  preferred_contact: 'email',
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { ref, visible } = useScrollReveal();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_requests').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        preferred_contact: form.preferred_contact,
      });
      if (error) throw error;
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="booking"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2B2B2B 0%, #3D3D3D 100%)',
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(122,158,126,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'rgba(196,168,130,0.08)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div
            ref={ref}
            className={`scroll-reveal ${visible ? 'visible' : ''} flex flex-col gap-6`}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: '#7A9E7E' }}
            >
              Get in Touch
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold"
              style={{ color: 'white', lineHeight: '1.2' }}
            >
              Begin your journey today
            </h2>
            <p className="text-lg font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.8' }}>
              Reaching out takes courage. Send me a message and I'll be in touch within
              one working day to arrange your free 15-minute chat.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              {[
                { label: 'Phone', value: '+44 7444 917007' },
                { label: 'Email', value: 'tracyjanefoster@gmail.com' },
                { label: 'Location', value: 'Elgin Road, Weybridge, Surrey KT13 8SN' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-1"
                    style={{ color: '#7A9E7E' }}
                  >
                    {label}
                  </p>
                  <p className="font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'success' ? (
              <div
                className="rounded-3xl p-10 flex flex-col items-center gap-5 text-center"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <CheckCircle size={52} style={{ color: '#7A9E7E' }} />
                <h3 className="font-serif text-2xl font-semibold" style={{ color: 'white' }}>
                  Message received!
                </h3>
                <p className="font-light" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Thank you for reaching out. I'll be in touch within one working day
                  to arrange your free initial chat.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-8 md:p-10 flex flex-col gap-5"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Your Name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label="Phone (optional)"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7000 000000"
                  />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Preferred Contact
                    </label>
                    <select
                      name="preferred_contact"
                      value={form.preferred_contact}
                      onChange={handleChange}
                      className="rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'white',
                        focusRingColor: '#7A9E7E',
                      } as React.CSSProperties}
                    >
                      <option value="email" style={{ background: '#2B2B2B' }}>Email</option>
                      <option value="phone" style={{ background: '#2B2B2B' }}>Phone</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me a little about what's brought you here and what you're hoping to work on..."
                    className="rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 resize-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'white',
                      lineHeight: '1.7',
                    }}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#F87171' }}>
                    <AlertCircle size={14} />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary flex items-center justify-center gap-2 w-full"
                  style={status === 'loading' ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                >
                  {status === 'loading' ? (
                    <>
                      <div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        style={{ animation: 'spin 0.8s linear infinite' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  All enquiries are strictly confidential. ICO Reg: ZA501800
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        textarea::placeholder, input::placeholder {
          color: rgba(255,255,255,0.3) !important;
        }
        select option {
          background: #2B2B2B;
          color: white;
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 transition-all"
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'white',
        }}
      />
    </div>
  );
}
