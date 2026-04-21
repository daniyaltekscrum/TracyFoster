import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, Heart, BookOpen } from 'lucide-react';

const credentials = [
  { icon: Award, label: 'MBACP Accredited Member' },
  { icon: Heart, label: '7+ Years with Cruse Bereavement' },
  { icon: BookOpen, label: 'EMDR · CBT · ERP Trained' },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #F8F6F3 0%, #EBF2EC 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Image column — 2/5 */}
          <div className="md:col-span-2 relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-xl"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src="https://iili.io/BrkGscJ.md.png"
                alt="Warm, inviting therapy room with natural textures"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(43,43,43,0.3) 0%, transparent 60%)' }}
              />
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full pointer-events-none -z-10"
              style={{ background: 'rgba(122,158,126,0.15)' }}
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full pointer-events-none -z-10"
              style={{ background: 'rgba(196,168,130,0.2)' }}
            />
          </div>

          {/* Text column — 3/5 */}
          <div
            ref={ref}
            className={`scroll-reveal ${visible ? 'visible' : ''} md:col-span-3 flex flex-col gap-7`}
          >
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase"
                style={{ color: '#7A9E7E' }}
              >
                A Little About Me
              </span>
              <h2
                className="font-serif text-4xl md:text-5xl font-semibold mt-3"
                style={{ color: '#2B2B2B', lineHeight: '1.2' }}
              >
                I'm Tracy Foster
              </h2>
            </div>

            <p className="text-lg font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
              I'm a BACP Accredited psychotherapist and counsellor based in Weybridge,
              Surrey, offering both in-person and online sessions. I work with adults
              navigating anxiety, OCD, grief, relationship difficulties, and life
              transitions.
            </p>

            <p className="font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
              My journey into therapy was shaped by many years volunteering with Cruse
              Bereavement Support, where I learned the profound power of being truly
              heard. I later worked with young people at Woking College and undertook
              training with Relate to deepen my understanding of relationship dynamics.
            </p>

            <p className="font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
              I take an integrative approach — meaning I draw on a range of evidence-based
              methods, including EMDR, CBT, and ERP, to create a therapy experience that
              is entirely personal to you.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 pt-2">
              {credentials.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium"
                  style={{
                    background: 'white',
                    color: '#2B2B2B',
                    border: '1px solid rgba(122,158,126,0.25)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <Icon size={14} style={{ color: '#7A9E7E' }} />
                  {label}
                </div>
              ))}
            </div>

            {/* Divider quote */}
            <blockquote
              className="font-serif italic text-xl font-light border-l-2 pl-5"
              style={{
                color: '#2B2B2B',
                borderColor: '#7A9E7E',
                lineHeight: '1.7',
              }}
            >
              "My aim is to provide a space that feels genuinely safe — where you can
              explore difficult feelings without fear of judgement."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
