import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'What happens in the free initial chat?',
    a: "The 15-minute chat is a relaxed, no-pressure conversation. You can tell me a little about what's brought you to therapy, ask any questions you have, and we'll both get a sense of whether working together feels right. There's no obligation to proceed.",
  },
  {
    q: 'Is everything I say kept confidential?',
    a: "Yes. Everything shared in our sessions remains strictly confidential. The only exceptions are if I have serious concerns about your safety or the safety of others — and I would always discuss this with you first wherever possible. I'm registered with the ICO (ZA501800) and hold professional indemnity insurance.",
  },
  {
    q: 'How long do sessions last, and how often will we meet?',
    a: "Sessions are typically 50 minutes long. Most clients begin with weekly sessions, which allows us to build momentum and a consistent working relationship. As things progress, we can review the frequency together.",
  },
  {
    q: 'Do you offer online sessions?',
    a: "Yes — sessions are available both in-person at my practice in Weybridge, Surrey and online via a secure video platform. Many clients find online therapy just as effective as in-person, and it offers greater flexibility.",
  },
  {
    q: 'What is EMDR and is it right for me?',
    a: "EMDR (Eye Movement Desensitisation and Reprocessing) is a well-researched, evidence-based therapy primarily used for trauma and PTSD, but also effective for anxiety and other difficulties. It uses bilateral stimulation to help process distressing memories. We would discuss whether it's appropriate for your situation before beginning.",
  },
  {
    q: 'How many sessions will I need?',
    a: "This varies considerably from person to person and depends on what you're bringing to therapy. Some clients benefit from a focused short-term approach of 6–12 sessions; others prefer longer-term work. We'll review progress together regularly and you're always in control.",
  },
  {
    q: 'What is the difference between counselling and psychotherapy?',
    a: "Counselling typically focuses on specific, present-day concerns and is often shorter-term. Psychotherapy tends to explore deeper patterns, past experiences, and the way we relate to ourselves and others. In practice, I draw on both — the distinction matters less than finding the approach that's right for you.",
  },
];

export default function FAQ() {
  const { ref, visible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding" style={{ background: '#F8F6F3' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Left sticky heading */}
          <div
            ref={ref}
            className={`scroll-reveal ${visible ? 'visible' : ''} md:col-span-2 md:sticky md:top-28`}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: '#7A9E7E' }}
            >
              FAQ
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-5"
              style={{ color: '#2B2B2B', lineHeight: '1.2' }}
            >
              Common questions answered
            </h2>
            <p className="font-light leading-relaxed" style={{ color: '#5A5A5A', lineHeight: '1.8' }}>
              It's completely normal to have questions about therapy before you begin.
              Here are some of the most common ones I hear.
            </p>
            <div className="mt-8">
              <p className="text-sm font-light mb-4" style={{ color: '#5A5A5A' }}>
                Have a question not listed here?
              </p>
              <a href="#booking" className="btn-outline text-sm py-3 px-5">
                Ask Me Directly
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="md:col-span-3 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: isOpen ? 'white' : '#F0EDE8',
        border: isOpen ? '1px solid rgba(122,158,126,0.25)' : '1px solid transparent',
        boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span
          className="font-medium text-base"
          style={{ color: '#2B2B2B', lineHeight: '1.5' }}
        >
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            background: isOpen ? '#7A9E7E' : 'rgba(122,158,126,0.15)',
          }}
        >
          {isOpen ? (
            <Minus size={13} style={{ color: 'white' }} />
          ) : (
            <Plus size={13} style={{ color: '#7A9E7E' }} />
          )}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <p
          className="px-6 pb-6 font-light text-sm leading-relaxed"
          style={{ color: '#5A5A5A', lineHeight: '1.8' }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}
