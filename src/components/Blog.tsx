import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    date: 'Jun 19, 2025',
    readTime: '4 min read',
    category: 'OCD & Anxiety',
    title: 'Feeling Heard: Songs That Speak to OCD or Covert/Pure O',
    excerpt:
      'Exploring how music and poetry have been used to communicate the experience of obsessions and compulsions — and why they might help you feel less alone.',
    image:
      'https://static.wixstatic.com/media/2077ea_1d50c43348df437f94c620e34f078b81~mv2.jpg/v1/fill/w_568,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2077ea_1d50c43348df437f94c620e34f078b81~mv2.jpg',
  },
  {
    date: 'Mar 6, 2025',
    readTime: '4 min read',
    category: 'OCD',
    title: 'What Is Covert or Pure OCD?',
    excerpt:
      "When obsessions are invisible — no visible rituals, no hand-washing, just relentless internal noise. Understanding 'Pure O' and why it's so often missed.",
    image:
      'https://ocdmantra.com/wp-content/uploads/2022/12/Pure-OCD-Cure-Different-Methods-For-Pure-OCD-Cure.png',
  },
  {
    date: 'Feb 25, 2025',
    readTime: '5 min read',
    category: 'Relationships',
    title: 'ROCD: How to Support a Loved One with Relationship OCD',
    excerpt:
      'Relationship OCD can be exhausting for everyone involved. A compassionate guide for partners and family members trying to understand and help.',
    image:
      'https://adaa.org/sites/default/files/2023-01/iStock-1329759049%20purchased%20small%20relationship%20OCD.jpg',
  },
  {
    date: 'Jun 10, 2024',
    readTime: '2 min read',
    category: 'OCD',
    title: 'Understanding Obsessive Compulsive Disorder',
    excerpt:
      "OCD affects 1 in 40 people — yet it remains widely misunderstood. Here's what the research tells us, and what it really feels like to live with OCD.",
    image:
      'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Blog() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="blog" className="section-padding" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`scroll-reveal ${visible ? 'visible' : ''} flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14`}
        >
          <div>
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: '#7A9E7E' }}
            >
              Insights & Resources
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold mt-3"
              style={{ color: '#2B2B2B', lineHeight: '1.2' }}
            >
              From the blog
            </h2>
          </div>
          <a
            href="https://www.tracyfostertherapy.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: '#7A9E7E' }}
          >
            View all articles
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Desktop: horizontal scroll, Mobile: stacked */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  post,
  delay,
}: {
  post: (typeof posts)[0];
  delay: number;
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`scroll-reveal ${visible ? 'visible' : ''} group flex flex-col rounded-2xl overflow-hidden card-hover`}
      style={{
        transitionDelay: `${delay}ms`,
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: 'white', color: '#7A9E7E' }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1" style={{ background: '#F8F6F3' }}>
        <div className="flex items-center gap-3 text-xs" style={{ color: '#9CA3AF' }}>
          <span>{post.date}</span>
          <span style={{ color: 'rgba(156,163,175,0.4)' }}>•</span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readTime}
          </span>
        </div>

        <h3
          className="font-serif text-lg font-semibold leading-snug flex-1"
          style={{ color: '#2B2B2B', lineHeight: '1.4' }}
        >
          {post.title}
        </h3>

        <p
          className="text-sm font-light leading-relaxed"
          style={{ color: '#5A5A5A', lineHeight: '1.7' }}
        >
          {post.excerpt}
        </p>

        <a
          href="https://www.tracyfostertherapy.com/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium mt-auto transition-all duration-200 group-hover:gap-2.5"
          style={{ color: '#7A9E7E' }}
        >
          Read more
          <ArrowRight size={13} />
        </a>
      </div>
    </article>
  );
}
