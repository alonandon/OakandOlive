import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Chiropractor for Athletes',
  description:
    'Sports chiropractic care in Rochester, NY for runners, lifters, bodybuilders, CrossFit athletes, hockey, lacrosse, golf, and more. Injury treatment, shockwave, BFRT, sport-specific exercise programming, and performance nutrition.',
  path: '/athletes',
})

const sports = [
  { name: 'Running', injuries: 'Shin splints, IT band syndrome, runner’s knee, plantar fasciitis, Achilles tendinopathy' },
  { name: 'Bodybuilding', injuries: 'Shoulder impingement, pec and biceps strains, elbow tendinopathy, low back strain' },
  { name: 'Powerlifting & Weightlifting', injuries: 'Low back strain, hip pain, wrist and elbow pain, SI joint dysfunction' },
  { name: 'CrossFit & Functional Fitness', injuries: 'Shoulder pain, rotator cuff tendinopathy, low back strain, knee pain' },
  { name: 'Hockey', injuries: 'Hip flexor and groin strains, low back pain, shoulder injuries, neck strain' },
  { name: 'Lacrosse', injuries: 'Ankle sprains, shoulder pain, hamstring strains, knee pain' },
  { name: 'Soccer', injuries: 'Hamstring and groin strains, ankle sprains, knee pain, Achilles pain' },
  { name: 'Basketball & Volleyball', injuries: 'Ankle sprains, patellar tendinopathy (jumper’s knee), low back pain' },
  { name: 'Baseball & Softball', injuries: 'Throwing shoulder pain, elbow tendinopathy, oblique strains, low back pain' },
  { name: 'Football', injuries: 'Neck strain, shoulder injuries, hamstring strains, low back pain' },
  { name: 'Golf', injuries: 'Low back pain, golfer’s elbow, shoulder pain, hip stiffness' },
  { name: 'Tennis & Pickleball', injuries: 'Tennis elbow, rotator cuff irritation, calf strains, knee pain' },
  { name: 'Cycling', injuries: 'Neck and upper back pain, low back pain, knee pain, IT band irritation' },
  { name: 'Swimming', injuries: 'Swimmer’s shoulder, neck pain, low back pain' },
]

const treatments = [
  {
    name: 'Chiropractic Adjustments',
    href: '/services#cmt',
    body: 'Restore joint motion in the spine, hips, and extremities so you can train through a full, pain-free range.',
  },
  {
    name: 'Shockwave Therapy',
    href: '/services#shockwave',
    body: 'A non-invasive option for stubborn tendon problems like Achilles, patellar, elbow, and plantar fascia pain that haven’t responded to rest.',
  },
  {
    name: 'Blood Flow Restriction Training',
    href: '/services#bfrt',
    body: 'Build and maintain muscle with light loads while an injury heals, so you don’t lose months of progress.',
  },
  {
    name: 'Soft-Tissue Work (IASTM)',
    href: '/services#iastm',
    body: 'Instrument-assisted treatment for tight, overworked muscles and irritated tendons.',
  },
  {
    name: 'Cupping',
    href: '/services#cupping',
    body: 'Decompressive soft-tissue work for recovery and tightness in high-volume training blocks.',
  },
  {
    name: 'Nerve Flossing',
    href: '/services#nerve-flossing',
    body: 'Gentle nerve mobility work for sciatica-type pain, numbness, or tingling down the arm or leg.',
  },
]

const athleteFaqs = [
  {
    question: 'Do I have to stop training while I’m being treated?',
    answer:
      'Usually not. Our goal is to keep you as active as safely possible. We’ll modify the lifts, drills, or mileage that aggravate the injury and keep everything else moving, often using tools like blood flow restriction training to maintain strength.',
  },
  {
    question: 'Do you only work with competitive athletes?',
    answer:
      'No. We see high school and college athletes, competitive lifters and bodybuilders, and plenty of weekend warriors and rec league players. If you train and something is holding you back, we can help.',
  },
  {
    question: 'Will you give me a program to follow outside the office?',
    answer:
      'Yes. Every athlete leaves with individualized exercise programming, built around your sport, your training schedule, and the gym or home equipment you have access to.',
  },
  {
    question: 'Does insurance cover sports injury care?',
    answer: 'In many cases, yes. We are in-network with several major plans and will verify your benefits before your first visit.',
  },
]

export default function AthletesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Athletes', url: `${siteConfig.url}/athletes` },
  ])
  const faqMarkup = faqSchema(athleteFaqs)
  const tel = `tel:${siteConfig.phone.replace(/\D/g, '')}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkup) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-20 relative overflow-hidden" aria-labelledby="athletes-hero-heading">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-700/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-sm text-olive-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-white" aria-current="page">Athletes</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">Sports Chiropractic</span>
          <h1 id="athletes-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            Chiropractic Care for Athletes in Rochester
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed mb-8">
            Whether you&apos;re chasing a PR, stepping on stage, or just trying to finish the season healthy, we treat the injury, keep you training, and build a plan so it doesn&apos;t come back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base">
              Book an Evaluation
            </a>
            <a href={tel} className="btn-secondary px-8 py-4 text-base">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="approach-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Approach</span>
          <h2 id="approach-heading" className="section-heading mt-3 mb-5">Treat It, Train Around It, Bulletproof It</h2>
          <p className="font-sans text-bark-muted leading-relaxed mb-4">
            Rest alone rarely fixes a sports injury. It just delays the next one. At Oak &amp; Olive, care for athletes combines hands-on treatment with the two things that actually change outcomes: smart loading and proper fueling.
          </p>
          <p className="font-sans text-bark-muted leading-relaxed">
            Dr. Eckert holds a Bachelor of Science in Exercise Science, so your plan is built by someone who understands training, not just pain relief.
          </p>
        </div>
      </section>

      {/* Sports & injuries */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-labelledby="sports-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Sports We Treat</span>
            <h2 id="sports-heading" className="section-heading mt-3 mb-4">Common Injuries by Sport</h2>
            <p className="font-sans text-bark-muted max-w-2xl mx-auto leading-relaxed">
              Every sport stresses the body differently. Here are some of the issues we see most often. Don&apos;t see yours? We probably treat it too.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sports.map((sport) => (
              <li key={sport.name} className="bg-white border border-cream-200 rounded-2xl p-6">
                <h3 className="font-serif text-xl text-bark mb-2">{sport.name}</h3>
                <p className="font-sans text-sm text-bark-muted leading-relaxed">{sport.injuries}</p>
              </li>
            ))}
          </ul>
          <p className="font-sans text-sm text-bark-muted text-center mt-8">
            See more on <Link href="/conditions#sports-athletic-injuries" className="text-olive-700 hover:text-olive-900 underline">sports &amp; athletic injuries</Link> and other <Link href="/conditions" className="text-olive-700 hover:text-olive-900 underline">conditions we treat</Link>.
          </p>
        </div>
      </section>

      {/* Bodybuilding */}
      <section className="py-20 lg:py-28 bg-olive-950" aria-labelledby="bodybuilding-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-label text-olive-300">For Lifters &amp; Bodybuilders</span>
          <h2 id="bodybuilding-heading" className="font-serif text-3xl md:text-4xl text-white mt-3 mb-6">
            A Chiropractor Who Lifts
          </h2>
          <div className="font-sans text-olive-100 leading-relaxed space-y-4">
            <p>
              [PLACEHOLDER: Dr. Eckert&apos;s bodybuilding background, such as years training, shows or placings, and what drew him to the sport.]
            </p>
            <p>
              Bodybuilders put their joints through enormous volume, often while dieting hard. That combination is behind a lot of the shoulder, elbow, and low back pain we see in the gym crowd. We get it, because we&apos;ve been there: we&apos;ll treat the problem, adjust your split and exercise selection so you keep growing, and help you dial in nutrition that supports recovery through both bulking and prep.
            </p>
            <p>
              Hurt in prep? <Link href="/blog/blood-flow-restriction-training-rochester-ny" className="text-white underline hover:text-olive-200">Blood flow restriction training</Link> can help you hold onto muscle with light loads while an injury heals.
            </p>
          </div>
        </div>
      </section>

      {/* Exercise + Nutrition */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="programming-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Beyond the Table</span>
            <h2 id="programming-heading" className="section-heading mt-3 mb-4">Programming &amp; Nutrition for Performance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-bark mb-3">Exercise Programming</h3>
              <p className="font-sans text-bark-muted text-sm leading-relaxed mb-4">
                Sport-specific and return-to-play programs, strength and conditioning from beginner through advanced, and mobility work, built for your gym or home setup and updated as you progress.
              </p>
              <Link href="/services#exercise" className="font-sans text-sm font-medium text-olive-700 hover:text-olive-900 transition-colors">
                Learn about exercise programming &rarr;
              </Link>
            </div>
            <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-bark mb-3">Nutrition for a Lifetime</h3>
              <p className="font-sans text-bark-muted text-sm leading-relaxed mb-4">
                Sports and performance nutrition, macronutrient guidance for tissue repair, and practical meal planning that fuels training and recovery without fad diets.
              </p>
              <Link href="/services#nutrition" className="font-sans text-sm font-medium text-olive-700 hover:text-olive-900 transition-colors">
                Learn about nutrition guidance &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-labelledby="athlete-treatments-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">In the Office</span>
            <h2 id="athlete-treatments-heading" className="section-heading mt-3 mb-4">Treatments Athletes Use Most</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <li key={t.name} className="bg-white border border-cream-200 rounded-2xl p-7">
                <h3 className="font-serif text-xl text-bark mb-2">
                  <Link href={t.href} className="hover:text-olive-700 transition-colors">{t.name}</Link>
                </h3>
                <p className="font-sans text-sm text-bark-muted leading-relaxed">{t.body}</p>
              </li>
            ))}
          </ul>
          <p className="font-sans text-sm text-bark-muted text-center mt-8">
            Dealing with a nagging tendon? Read <Link href="/blog/shockwave-therapy-how-it-works-what-to-expect" className="text-olive-700 hover:text-olive-900 underline">how shockwave therapy works</Link> or our guide to <Link href="/blog/cupping-therapy-benefits-myths-rochester-ny" className="text-olive-700 hover:text-olive-900 underline">cupping for recovery</Link>.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="athlete-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="athlete-faq-heading" className="section-heading text-center mb-10">Questions From Athletes</h2>
          <dl className="space-y-6">
            {athleteFaqs.map((faq) => (
              <div key={faq.question} className="bg-cream-50 border border-cream-200 rounded-2xl p-7">
                <dt className="font-serif text-lg text-bark mb-2">{faq.question}</dt>
                <dd className="font-sans text-sm text-bark-muted leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="font-sans text-sm text-bark-muted text-center mt-8">
            See the <Link href="/insurance" className="text-olive-700 hover:text-olive-900 underline">insurance plans we accept</Link> or our <Link href="/faq" className="text-olive-700 hover:text-olive-900 underline">full FAQ</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cream-50" aria-labelledby="athletes-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get Back in the Game</span>
          <h2 id="athletes-cta-heading" className="section-heading mt-3 mb-5">
            Don&apos;t Let an Injury Cost You a Season
          </h2>
          <p className="font-sans text-bark-muted max-w-xl mx-auto leading-relaxed mb-8">
            Book an evaluation and leave with a clear diagnosis, a treatment plan, and a program to keep you training. No referral needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base">
              Schedule an Appointment
            </a>
            <a href={tel} className="btn-secondary px-8 py-4 text-base">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
