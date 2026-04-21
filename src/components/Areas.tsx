import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, Heart, Users, Compass, Leaf, Sun } from 'lucide-react';

const areas = [
  {
    icon: Brain,
    title: 'Anxiety & OCD',
    subtitle: 'Including Pure O & Intrusive Thoughts',
    description:
      'Specialist support for all forms of anxiety and OCD, including the lesser-known "Pure O" — where obsessions are internal and invisible to others.',
    color: '#EBF2EC',
    iconColor: '#7A9E7E',
  },
  {
    icon: Sun,
    title: 'Life Transitions',
    subtitle: 'Change, Identity & New Beginnings',
    description:
      'Navigating major life changes — career shifts, relationship endings, parenthood, retirement — can unsettle our sense of self. Together, we find your footing.',
    color: '#F0E6D8',
    iconColor: '#C4A882',
  },
  {
    icon: Leaf,
    title: 'Loss & Grief',
    subtitle: 'Bereavement & Unexpected Loss',
    description:
      'Drawing on over 7 years with Cruse Bereavement Support, I offer compassionate, experienced care for those navigating loss in all its forms.',
    color: '#EBF2EC',
    iconColor: '#7A9E7E',
  },
  {
    icon: Users,
    title: 'Relationship Difficulties',
    subtitle: 'Couples, Family & Self-Relating',
    description:
      'Whether with a partner, family members, or your own inner critic, relationship challenges can be explored and transformed in a supportive space.',
    color: '#F0E6D8',
    iconColor: '#C4A882',
  },
  {
    icon: Heart,
    title: 'Trauma & EMDR',
    subtitle: 'Processing Difficult Experiences',
    description:
      'EMDR (Eye Movement Desensitisation and Reprocessing) is a powerful, evidence-based therapy for processing traumatic memories and their lasting effects.',
    color: '#EBF2EC',
    iconColor: '#7A9E7E',
  },
  {
    icon: Compass,
    title: 'Low Mood & Depression',
    subtitle: 'Finding Your Way Back',
    description:
      'When life feels flat, heavy or purposeless, therapy can provide a gentle but effective path toward renewed energy, hope and connection.',
    color: '#F0E6D8',
    iconColor: '#C4A882',
  },
];

export default function Areas() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="areas" className="section-padding" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`scroll-reveal ${visible ? 'visible' : ''} max-w-2xl mb-16`}
        >
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#7A9E7E' }}
          >
            Areas I Work With
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-5"
            style={{ color: '#2B2B2B', lineHeight: '1.2' }}
          >
            You don't have to face it alone
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
            Whatever brought you here, there is a way through. I work with a wide range
            of difficulties — here are some of the areas where I can offer specialist support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <AreaCard key={area.title} area={area} delay={i * 80} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-light mb-6" style={{ color: '#5A5A5A' }}>
            Don't see your concern listed? Please reach out — I'm happy to discuss
            whether I'm the right fit.
          </p>
          <a href="#booking" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function AreaCard({
  area,
  delay,
}: {
  area: (typeof areas)[0];
  delay: number;
}) {
  const { ref, visible } = useScrollReveal();
  const Icon = area.icon;

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'visible' : ''} card-hover rounded-2xl p-7 flex flex-col gap-4`}
      style={{
        background: area.color,
        transitionDelay: `${delay}ms`,
        border: '1px solid rgba(0,0,0,0.04)',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: 'white' }}
      >
        <Icon size={20} style={{ color: area.iconColor }} />
      </div>
      <div>
        <h3
          className="font-serif text-xl font-semibold mb-1"
          style={{ color: '#2B2B2B' }}
        >
          {area.title}
        </h3>
        <p className="text-xs font-medium tracking-wide uppercase" style={{ color: area.iconColor }}>
          {area.subtitle}
        </p>
      </div>
      <p className="text-sm font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.75' }}>
        {area.description}
      </p>
    </div>
  );
}
