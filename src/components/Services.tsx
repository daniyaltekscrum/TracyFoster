import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check } from 'lucide-react';

const services = [
  {
    name: 'Free Initial Chat',
    price: 'Free',
    duration: '15 minutes',
    description: "A relaxed, no-obligation conversation to explore how I can help and whether we're a good fit.",
    features: [
      'No commitment required',
      'Available online or by phone',
      'Completely confidential',
    ],
    highlight: true,
    cta: 'Book Now',
  },
  {
    name: 'Individual Therapy',
    price: '£80',
    duration: 'Per session',
    description: 'Regular one-to-one sessions tailored entirely to you, using integrative methods including CBT, EMDR and ERP.',
    features: [
      'In-person in Weybridge or online',
      'Flexible scheduling',
      'EMDR & CBT available',
    ],
    highlight: false,
    cta: 'Enquire',
  },
  {
    name: 'Couples Therapy',
    price: '£110',
    duration: 'Per session',
    description: 'Guided sessions for couples navigating communication, intimacy, conflict or major life transitions together.',
    features: [
      'Relate-trained approach',
      'In-person or online',
      'Both partners supported',
    ],
    highlight: false,
    cta: 'Enquire',
  },
  {
    name: 'Clinical Supervision',
    price: 'POA',
    duration: 'Flexible',
    description: 'Professional supervision for qualified therapists and counsellors, offered individually or in small groups.',
    features: [
      'BACP-ethical framework',
      'Individual & group options',
      'Online or in-person',
    ],
    highlight: false,
    cta: 'Enquire',
  },
];

export default function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #EBF2EC 0%, #F8F6F3 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`scroll-reveal ${visible ? 'visible' : ''} max-w-2xl mb-16`}
        >
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#7A9E7E' }}
          >
            Services & Fees
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-5"
            style={{ color: '#2B2B2B', lineHeight: '1.2' }}
          >
            Transparent pricing, no surprises
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
            Starting with a free 15-minute chat costs nothing. All sessions are available
            in-person in Weybridge or online to suit your lifestyle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} delay={i * 80} />
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-8 flex flex-col md:flex-row gap-4 items-center justify-between"
          style={{ background: 'white', border: '1px solid rgba(122,158,126,0.2)' }}
        >
          <div>
            <h3 className="font-serif text-xl font-semibold mb-1" style={{ color: '#2B2B2B' }}>
              Not sure which service is right for you?
            </h3>
            <p className="text-sm font-light" style={{ color: '#5A5A5A' }}>
              Book a free 15-minute call and we'll work it out together.
            </p>
          </div>
          <a href="#booking" className="btn-primary whitespace-nowrap">
            Book Free Chat
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'visible' : ''} card-hover rounded-2xl p-7 flex flex-col gap-5 relative`}
      style={{
        background: service.highlight ? '#2B2B2B' : 'white',
        transitionDelay: `${delay}ms`,
        border: service.highlight ? 'none' : '1px solid rgba(122,158,126,0.2)',
        boxShadow: service.highlight ? '0 20px 50px rgba(43,43,43,0.25)' : '0 4px 20px rgba(0,0,0,0.04)',
      }}
    >
      {service.highlight && (
        <span
          className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide"
          style={{ background: '#7A9E7E', color: 'white' }}
        >
          Start here
        </span>
      )}

      <div>
        <p
          className="text-sm font-medium mb-1"
          style={{ color: service.highlight ? 'rgba(255,255,255,0.6)' : '#7A9E7E' }}
        >
          {service.duration}
        </p>
        <h3
          className="font-serif text-xl font-semibold"
          style={{ color: service.highlight ? 'white' : '#2B2B2B' }}
        >
          {service.name}
        </h3>
      </div>

      <div>
        <span
          className="font-serif text-4xl font-semibold"
          style={{ color: service.highlight ? 'white' : '#2B2B2B' }}
        >
          {service.price}
        </span>
      </div>

      <p
        className="text-sm font-light leading-relaxed flex-1"
        style={{ color: service.highlight ? 'rgba(255,255,255,0.7)' : '#5A5A5A', lineHeight: '1.7' }}
      >
        {service.description}
      </p>

      <ul className="flex flex-col gap-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <Check
              size={14}
              style={{ color: service.highlight ? '#7A9E7E' : '#7A9E7E', flexShrink: 0 }}
            />
            <span style={{ color: service.highlight ? 'rgba(255,255,255,0.8)' : '#5A5A5A' }}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#booking"
        className="text-center py-3 px-6 rounded-full text-sm font-medium transition-all duration-200"
        style={{
          background: service.highlight ? '#7A9E7E' : 'transparent',
          color: service.highlight ? 'white' : '#7A9E7E',
          border: service.highlight ? 'none' : '1.5px solid #7A9E7E',
        }}
        onMouseEnter={(e) => {
          if (!service.highlight) {
            (e.currentTarget as HTMLAnchorElement).style.background = '#EBF2EC';
          }
        }}
        onMouseLeave={(e) => {
          if (!service.highlight) {
            (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
          }
        }}
      >
        {service.cta}
      </a>
    </div>
  );
}
