import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema, articleSchema } from '@/lib/schema'
import { blogPosts, getBlogPost, getRecentPosts, formatDate } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const relatedPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2)

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ])

  const article = articleSchema({
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.dateModified,
    slug: post.slug,
    authorName: post.author,
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-16 relative overflow-hidden" aria-labelledby="post-heading">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-olive-700/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-olive-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-white" aria-current="page">{post.category}</li>
            </ol>
          </nav>

          <span className="inline-block bg-olive-500/80 text-white font-sans text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1
            id="post-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6"
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-olive-600 rounded-full flex items-center justify-center font-serif text-white text-sm font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-sans text-sm text-olive-100">{post.author}</span>
            </div>
            <span className="text-olive-400 hidden sm:block">·</span>
            <span className="font-sans text-sm text-olive-200">{formatDate(post.date)}</span>
            <span className="text-olive-400 hidden sm:block">·</span>
            <span className="font-sans text-sm text-olive-200">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
            {/* Main content */}
            <div>
              <p className="font-sans text-lg text-bark-muted leading-relaxed border-l-4 border-olive-400 pl-5 mb-8 italic">
                {post.excerpt}
              </p>
              <div
                className="prose-wellness"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-cream-200">
                <p className="font-sans text-xs font-semibold text-bark-muted uppercase tracking-wide mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream-100 border border-cream-200 text-bark-muted font-sans text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author bio */}
              <div className="mt-10 bg-cream-50 border border-cream-200 rounded-2xl p-6 flex gap-5">
                <div className="w-14 h-14 bg-olive-100 rounded-2xl flex items-center justify-center flex-shrink-0 font-serif text-olive-700 font-bold text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold text-bark-muted uppercase tracking-wide mb-1">Written by</p>
                  <p className="font-serif text-lg text-bark">{post.author}</p>
                  <p className="font-sans text-sm text-bark-muted mt-1">
                    A member of the Oak &amp; Olive Health &amp; Wellness team, serving Rochester, NY and surrounding communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28" aria-label="Sidebar">
              {/* CTA */}
              <div className="bg-olive-700 rounded-2xl p-6 text-center">
                <p className="font-serif text-lg text-white mb-2">Ready to Begin?</p>
                <p className="font-sans text-sm text-olive-100 mb-5 leading-relaxed">
                  Book a free consultation with our Rochester wellness team.
                </p>
                <Link href="/contact" className="btn-white w-full justify-center text-sm px-4 py-3">
                  Book a Free Consultation
                </Link>
                <p className="font-sans text-xs text-olive-200 mt-3">{siteConfig.phone}</p>
              </div>

              {/* Recent posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
                  <h2 className="font-serif text-lg text-bark mb-4">More from the Blog</h2>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <p className="font-sans text-xs text-bark-muted mb-1">{related.category}</p>
                        <p className="font-serif text-sm text-bark leading-snug group-hover:text-olive-700 transition-colors">
                          {related.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <Link href="/blog" className="btn-secondary w-full justify-center text-sm px-4 py-2.5 mt-4">
                    View All Posts
                  </Link>
                </div>
              )}

              {/* Service area */}
              <div className="bg-cream-50 border border-cream-200 rounded-2xl p-6">
                <h2 className="font-serif text-base text-bark mb-3">Serving Rochester, NY</h2>
                <p className="font-sans text-xs text-bark-muted leading-relaxed">
                  Oak &amp; Olive Health &amp; Wellness serves clients throughout Greater Rochester including Pittsford, Brighton, Webster, Irondequoit, and beyond. Virtual appointments available across NY State.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
