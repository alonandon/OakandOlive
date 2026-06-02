import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: `Conditions We Treat | ${siteConfig.name}`,
  description:
    'Oak & Olive Chiropractic treats a wide range of conditions including back pain, neck pain, sciatica, headaches, sports injuries, disc herniation, and more in Rochester, NY.',
  alternates: { canonical: `${siteConfig.url}/conditions` },
}

const conditions = [
  {
    name: 'Lower Back Pain',
    description:
      'One of the most common reasons patients seek chiropractic care. We identify the root cause — whether muscular, disc-related, or structural — and build a plan to get you moving pain-free.',
  },
  {
    name: 'Neck Pain & Stiffness',
    description:
      'Tension, poor posture, and injury can all create neck pain that radiates into the shoulders and arms. Targeted adjustments and soft-tissue work restore mobility and relieve discomfort.',
  },
  {
    name: 'Sciatica & Nerve Pain',
    description:
      'Sciatic pain that shoots down the leg can be debilitating. We address the underlying nerve compression with spinal decompression, adjustments, and nerve mobilization techniques.',
  },
  {
    name: 'Headaches & Migraines',
    description:
      'Many headaches originate from tension in the cervical spine. Chiropractic care can significantly reduce frequency and intensity for both tension headaches and migraines.',
  },
  {
    name: 'Sports & Athletic Injuries',
    description:
      'From weekend warriors to competitive athletes, we help you recover faster and perform better using a combination of manual therapy, rehab exercise, and soft-tissue treatment.',
  },
  {
    name: 'Auto Accident / Whiplash',
    description:
      'Whiplash and other collision-related injuries need prompt, expert care. We document your injuries thoroughly and guide you through a full recovery.',
  },
  {
    name: 'Disc Herniation',
    description:
      'Herniated or bulging discs can compress nerves and cause significant pain. Flexion distraction, spinal decompression, and targeted rehab can provide lasting relief without surgery.',
  },
  {
    name: 'Shoulder Pain',
    description:
      'Rotator cuff issues, impingement, and shoulder stiffness respond well to chiropractic and soft-tissue therapy. We restore full range of motion and reduce inflammation.',
  },
  {
    name: 'Hip & Knee Pain',
    description:
      'Joint dysfunction in the hips and knees often stems from improper mechanics elsewhere in the body. We treat the whole kinetic chain so you can walk, run, and move without pain.',
  },
  {
    name: 'Plantar Fasciitis',
    description:
      'Heel and arch pain from plantar fasciitis can sideline even the most active patients. Shockwave therapy, IASTM, and corrective exercise deliver proven results.',
  },
]

export default function ConditionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-olive-950 pt-32 pb-20 lg:pt-40 lg:pb-28" aria-labelledby="conditions-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block section-label text-olive-300 mb-5">Rochester, NY</span>
          <h1 id="conditions-hero-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Conditions We Treat
          </h1>
          <p className="font-sans text-lg text-cream-200 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re in acute pain or managing a chronic condition, Dr. Alex Eckert provides expert, personalized care to help you get back to the life you love.
          </p>
        </div>
      </section>

      {/* ── Conditions Grid ── */}
      <section className="py-20 lg:py-28 bg-cream-50 leaf-pattern" aria-labelledby="conditions-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="conditions-list-heading" className="sr-only">List of conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((condition) => (
              <div key={condition.name} className="card p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2.5 h-2.5 mt-2 rounded-full bg-olive-500" />
                  <div>
                    <h3 className="font-serif text-xl text-bark mb-2">{condition.name}</h3>
                    <p className="font-sans text-sm text-bark-muted leading-relaxed">{condition.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="conditions-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get Started</span>
          <h2 id="conditions-cta-heading" className="section-heading mt-3 mb-5">
            Don&apos;t See Your Condition?
          </h2>
          <p className="font-sans text-bark-muted max-w-xl mx-auto leading-relaxed mb-8">
            We treat many more musculoskeletal and neuromusculoskeletal conditions. Schedule a consultation and Dr. Eckert will evaluate your case personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://practice.chirotouch.com/portal/OakOliveChiropractic" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base">
              Schedule an Appointment
            </a>
            <Link href="/services" className="btn-secondary px-8 py-4 text-base">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
