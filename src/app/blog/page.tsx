import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, siteConfig } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import { blogPosts, formatDate } from '@/lib/blog'

export const metadata: Metadata = buildMetadata({
  title: 'Wellness Blog — Health Tips & Insights',
  description: 'Wellness insights, nutrition tips, and health advice from the Oak & Olive team in Rochester, NY. Evidence-based content to help you live your healthiest life.',
  path: '/blog',
})

const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

export default function BlogPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
  ])

  const featured = blogPosts[blogPosts.length - 1]
  const rest = blogPosts.slice(0, blogPosts.length - 1)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-olive-950 pt-32 pb-20 relative overflow-hidden" aria-labelledby="blog-hero-heading">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-olive-700/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
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
              <li className="text-white" aria-current="page">Blog</li>
            </ol>
          </nav>
          <span className="section-label text-olive-300">Wellness Insights</span>
          <h1 id="blog-hero-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-3 mb-6 max-w-3xl leading-tight">
            The Oak &amp; Olive Wellness Blog
          </h1>
          <p className="font-sans text-olive-100 text-lg max-w-2xl leading-relaxed">
            Evidence-based wellness insights, nutrition tips, and health guidance from our Rochester, NY team — written to help you build a healthier, more balanced life.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-cream-100 border-b border-cream-200 py-4 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
            <span className="font-sans text-xs font-semibold text-bark-muted uppercase tracking-wide whitespace-nowrap">Filter:</span>
            <Link
              href="/blog"
              className="font-sans text-sm bg-olive-600 text-white px-4 py-1.5 rounded-full whitespace-nowrap"
            >
              All Posts
            </Link>
            {categories.map((cat) => (
              <span
                key={cat}
                className="font-sans text-sm bg-white border border-cream-300 text-bark-muted px-4 py-1.5 rounded-full whitespace-nowrap cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Blog content */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="blog-posts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-posts-heading" className="sr-only">Blog Posts</h2>

          {/* Featured post */}
          <div className="mb-14">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-olive-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-60 lg:h-auto bg-gradient-to-br from-olive-700 to-olive-950 relative">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <span className="inline-block bg-olive-500/60 text-white font-sans text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        Featured Post
                      </span>
                      <p className="font-serif text-2xl text-white leading-snug max-w-xs">
                        {featured.title}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-cream-200 text-bark font-sans text-xs font-medium px-3 py-1 rounded-full">
                      {featured.category}
                    </span>
                    <span className="font-sans text-xs text-cream-300">
                      {formatDate(featured.date)} · {featured.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white leading-snug mb-4 group-hover:text-olive-200 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="font-sans text-olive-100 text-sm leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-olive-600 rounded-full flex items-center justify-center font-serif text-white text-sm font-bold">
                      {featured.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-sans text-sm text-cream-200">{featured.author}</span>
                    <span className="ml-auto inline-flex items-center gap-1 font-sans text-sm font-medium text-olive-300 group-hover:gap-2 transition-all">
                      Read article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Post grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-olive-800 to-olive-950 flex items-end p-5">
                    <span className="inline-block bg-olive-500/80 text-white font-sans text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="font-sans text-xs text-bark-muted mb-2">
                      {formatDate(post.date)} · {post.readTime}
                    </p>
                    <h3 className="font-serif text-xl text-bark leading-snug mb-3 group-hover:text-olive-700 transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="font-sans text-sm text-bark-muted leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-bark-muted">{post.author}</span>
                      <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-olive-600 group-hover:gap-2 transition-all">
                        Read
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Blog CTA */}
          <div className="mt-16 bg-cream-100 border border-cream-200 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-bark mb-3">
              Want Monthly Wellness Insights?
            </h2>
            <p className="font-sans text-bark-muted leading-relaxed max-w-lg mx-auto mb-6">
              Our blog is updated monthly with SEO-driven, Rochester-focused wellness content. Sign up to receive new posts directly in your inbox — plus our free wellness guide.
            </p>
            <Link href="/#lead-capture" className="btn-primary px-8 py-3.5">
              Get Wellness Tips by Email
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
