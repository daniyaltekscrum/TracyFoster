import { useScrollReveal } from '../hooks/useScrollReveal';

const pillars = [
  {
    number: '01',
    title: 'A Collaborative Partnership',
    body:
      'Therapy works best when we work together. I follow your lead, moving at a pace that feels right for you — no pressure, no rigid agenda.',
  },
  {
    number: '02',
    title: 'Non-Judgmental & Safe',
    body:
      'Everything shared in our sessions remains completely confidential. My role is to listen deeply, without judgement, and to hold space for whatever you bring.',
  },
  {
    number: '03',
    title: 'Integrative & Personalised',
    body:
      'Drawing on CBT, EMDR, ERP and other evidence-based approaches, I tailor each session to your unique needs rather than applying a one-size-fits-all method.',
  },
];

export default function HowIWork() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="how-i-work" className="section-padding" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`scroll-reveal ${visible ? 'visible' : ''} max-w-2xl mb-16`}
        >
          <span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ color: '#7A9E7E' }}
          >
            My Approach
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-5"
            style={{ color: '#2B2B2B', lineHeight: '1.2' }}
          >
            How I Work
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
            I believe the relationship between therapist and client is the foundation of
            meaningful change. My practice is built on warmth, curiosity, and genuine care
            for your wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.number} pillar={pillar} delay={i * 150} />
          ))}
        </div>

        {/* Visual divider */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden" style={{ height: '380px' }}>
            <img
              src="https://iili.io/BrkDrx4.md.png"
              alt="Calm, welcoming therapy room with natural light"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(122,158,126,0.15) 0%, transparent 60%)' }}
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3
              className="font-serif text-3xl font-semibold"
              style={{ color: '#2B2B2B' }}
            >
              Your comfort is my priority
            </h3>
            <p className="font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
              Sessions are available both in-person in Weybridge, Surrey and online,
              so you can access support in whichever way feels most comfortable for you.
            </p>
            <p className="font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
              Whether you're navigating a specific challenge or simply feel that something
              isn't quite right, reaching out is a courageous first step — and I'm here
              to meet you exactly where you are.
            </p>
            <a href="#booking" className="btn-primary self-start">
              Take the First Step
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  delay,
}: {
  pillar: { number: string; title: string; body: string };
  delay: number;
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'visible' : ''} flex flex-col gap-4 p-8 rounded-2xl card-hover`}
      style={{
        background: '#F8F6F3',
        transitionDelay: `${delay}ms`,
        border: '1px solid rgba(122,158,126,0.12)',
      }}
    >
      <span
        className="font-serif text-4xl font-light"
        style={{ color: 'rgba(122,158,126,0.4)' }}
      >
        {pillar.number}
      </span>
      <h3
        className="font-serif text-xl font-semibold"
        style={{ color: '#2B2B2B' }}
      >
        {pillar.title}
      </h3>
      <p className="font-light leading-relaxed text-sm" style={{ color: '#5A5A5A', lineHeight: '1.75' }}>
        {pillar.body}
      </p>
    </div>
  );
}
