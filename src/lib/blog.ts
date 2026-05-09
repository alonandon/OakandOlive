export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  dateModified: string
  author: string
  category: string
  readTime: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'winter-wellness-tips-rochester-ny',
    title: '5 Ways to Prioritize Your Wellness This Winter in Rochester, NY',
    excerpt:
      'Rochester winters are no joke — but that doesn\'t mean your health has to take a back seat. Discover five practical strategies to stay energized, nourished, and grounded through the colder months.',
    date: '2026-01-15',
    dateModified: '2026-01-15',
    author: 'Dr. Claire Ashford',
    category: 'Wellness Tips',
    readTime: '6 min read',
    tags: ['wellness', 'winter health', 'Rochester NY', 'nutrition', 'self-care'],
    content: `
<p>If you've lived in Rochester long enough, you know that our winters — from the lake-effect snow to the grey skies that seem to linger for weeks — can take a real toll on your physical and mental wellbeing. At Oak & Olive Health & Wellness, we've worked with hundreds of Rochester residents who struggle to maintain their health routines once November hits.</p>

<p>The good news? With the right strategies, winter can actually be a powerful time to reset, rebuild, and invest in your long-term health. Here are five evidence-backed ways to stay well through a Rochester winter.</p>

<h2>1. Prioritize Vitamin D — It's More Critical Here Than You Think</h2>
<p>Rochester, NY receives significantly less sunlight than the national average, especially between November and March. This makes Vitamin D deficiency far more common in our community than in other parts of the country. Low Vitamin D has been linked to fatigue, mood changes, weakened immunity, and even weight gain.</p>
<p>We recommend getting your Vitamin D levels tested through your primary care provider, and supplementing strategically under the guidance of a registered dietitian. Our nutrition counseling team at Oak & Olive can help you identify the right dosage and food sources to support healthy levels all winter long.</p>

<h2>2. Nourish Your Body With Seasonal, Anti-Inflammatory Foods</h2>
<p>Winter is actually a beautiful season for hearty, nutrient-dense eating. Rochester has access to wonderful local farms and markets even in the colder months. Root vegetables like sweet potatoes, beets, and carrots; warming spices like turmeric and ginger; and omega-3-rich foods like salmon and walnuts all support immune function and help combat winter inflammation.</p>
<p>Our nutrition counselors work with clients throughout Greater Rochester — from Pittsford to Webster to the City — to build personalized meal plans that make healthy eating feel doable, not like a chore.</p>

<h2>3. Move Your Body — Even When It's Cold Outside</h2>
<p>It's tempting to hibernate when temperatures dip into the teens, but consistent movement is one of the most powerful tools you have for winter wellness. Whether it's indoor yoga, a strength training routine, or bundling up for a walk through Highland Park, staying active supports your mood, energy, circulation, and immunity.</p>
<p>Our yoga and movement classes at Oak & Olive are a favorite for Rochester residents looking for a warm, welcoming space to stay active all winter. We offer classes for all levels — from complete beginners to advanced practitioners.</p>

<h2>4. Protect Your Mental Health Proactively</h2>
<p>Seasonal Affective Disorder (SAD) affects a significant portion of Rochester's population. Light therapy, structured routines, social connection, and mindfulness practices can all make a meaningful difference. Our wellness coaches specialize in stress management and can work with you to build a winter routine that supports your mental health as much as your physical health.</p>

<h2>5. Make Sleep a Non-Negotiable</h2>
<p>The longer nights of winter are actually an invitation to improve your sleep hygiene. Quality sleep is foundational to everything — your weight, your immunity, your mood, your energy. If you're struggling with sleep, our wellness team can help you identify the root causes and create sustainable changes that support better rest year-round.</p>

<p>Ready to make this your healthiest winter yet? <a href="/contact">Schedule a free 20-minute consultation</a> with our team at Oak & Olive Health & Wellness. We proudly serve Rochester, Pittsford, Brighton, Webster, Irondequoit, and surrounding communities.</p>
    `.trim(),
  },
  {
    slug: 'benefits-nutrition-counseling-rochester-families',
    title: 'The Benefits of Nutrition Counseling for Rochester Families',
    excerpt:
      'Good nutrition is the foundation of a healthy family. Learn how personalized nutrition counseling can help Rochester families build lifelong healthy habits — and why a one-size-fits-all approach rarely works.',
    date: '2026-02-08',
    dateModified: '2026-02-08',
    author: 'Sarah Mendez, RDN',
    category: 'Nutrition',
    readTime: '5 min read',
    tags: ['nutrition', 'family wellness', 'Rochester NY', 'dietitian', 'healthy eating'],
    content: `
<p>At Oak & Olive Health & Wellness in Rochester, NY, one of the most common things we hear from new clients is: "I know what I <em>should</em> be eating — I just can't seem to make it stick." Sound familiar? You're not alone, and it's not a willpower problem.</p>

<p>The truth is, sustainable healthy eating isn't about following a rigid diet — it's about understanding your unique body, lifestyle, and relationship with food. That's exactly what personalized nutrition counseling offers.</p>

<h2>What Is Nutrition Counseling?</h2>
<p>Nutrition counseling goes well beyond handing you a meal plan. A registered dietitian-nutritionist (RDN) takes a comprehensive look at your health history, current eating patterns, lifestyle factors, and goals — then works with you collaboratively to develop a realistic, enjoyable approach to eating that actually fits your life.</p>
<p>For families in Rochester, this might mean figuring out how to feed picky eaters, managing a household member's chronic condition like diabetes or high blood pressure, supporting an athlete's performance nutrition, or simply trying to stop relying on takeout every weeknight.</p>

<h2>Why Families in Rochester Specifically Benefit</h2>
<p>Rochester is a vibrant, diverse community with unique food culture, seasonal eating patterns shaped by our climate, and the everyday realities of busy family schedules. Our dietitians understand these local dynamics — from navigating the Rochester Public Market for fresh seasonal produce to helping families on various budgets find nutritious options at local grocery stores like Wegmans and Tops.</p>

<h2>Common Issues Our Nutrition Clients Bring to Us</h2>
<ul>
<li>Weight management and metabolic health</li>
<li>Managing Type 2 diabetes, pre-diabetes, or insulin resistance</li>
<li>High cholesterol or cardiovascular risk reduction</li>
<li>Digestive issues, IBS, or food sensitivities</li>
<li>Supporting children's growth and development</li>
<li>Sports nutrition for youth and adult athletes</li>
<li>Eating disorder recovery support</li>
<li>Pregnancy and postpartum nutrition</li>
</ul>

<h2>What to Expect From Your First Session</h2>
<p>Your first nutrition counseling session at Oak & Olive is a conversation, not a lecture. We'll get to know you — your goals, your challenges, your food history, and your lifestyle. From there, we'll build a roadmap together. Most clients find that even small, strategic changes make a significant difference within the first few weeks.</p>

<p>We offer both in-person sessions at our Rochester location and virtual appointments for clients throughout the Greater Rochester area. Many insurance plans cover nutrition counseling, and our team can help you verify your benefits.</p>

<p><a href="/contact">Book your first consultation today</a> and take the first step toward a healthier, more nourished life for your family.</p>
    `.trim(),
  },
  {
    slug: 'stress-management-guide-rochester',
    title: 'Finding Balance: A Practical Guide to Stress Management in Rochester',
    excerpt:
      'Chronic stress is one of the biggest threats to long-term health — but it doesn\'t have to be your norm. Explore evidence-based stress management strategies that real Rochester residents are using to reclaim their calm.',
    date: '2026-03-12',
    dateModified: '2026-03-12',
    author: 'Marcus Thompson, MS',
    category: 'Stress & Mental Wellness',
    readTime: '7 min read',
    tags: ['stress management', 'mental wellness', 'mindfulness', 'Rochester NY', 'work-life balance'],
    content: `
<p>Rochester is a city that moves. Between demanding careers, family responsibilities, long commutes, and the unique seasonal pressures of living in Western New York, it's no surprise that many of our clients come to Oak & Olive Health & Wellness feeling chronically stressed and burnt out.</p>

<p>Stress, when chronic and unmanaged, is not just uncomfortable — it's a genuine health crisis. It contributes to weight gain, poor sleep, weakened immunity, cardiovascular disease, hormonal imbalance, and accelerated aging. The good news is that stress management is a learnable skill, and the right support makes all the difference.</p>

<h2>Understanding Your Stress Response</h2>
<p>Before you can manage stress effectively, it helps to understand what's actually happening in your body. When you perceive a threat — whether it's a work deadline, a difficult conversation, or financial pressure — your nervous system activates the "fight or flight" response, flooding your body with cortisol and adrenaline. In short bursts, this is useful. But when it's constantly activated, these same hormones become destructive.</p>
<p>The antidote is learning to activate the parasympathetic nervous system — your body's "rest and digest" mode. And there are concrete, evidence-based ways to do that.</p>

<h2>Evidence-Based Strategies That Work</h2>

<h3>Diaphragmatic Breathing</h3>
<p>Slow, deep belly breathing is one of the fastest ways to downregulate your nervous system. Even five minutes of intentional breathing can measurably lower cortisol levels. We teach specific breathwork techniques in our stress management sessions at Oak & Olive.</p>

<h3>Mindfulness-Based Stress Reduction (MBSR)</h3>
<p>MBSR is one of the most well-researched approaches to chronic stress. It combines mindfulness meditation, body awareness, and yoga to help you develop a different relationship with stress. Many Rochester professionals and parents have found this approach genuinely life-changing.</p>

<h3>Movement as Medicine</h3>
<p>Exercise is one of nature's most powerful stress relievers, releasing endorphins and helping to metabolize excess cortisol. You don't need to run marathons — even a 20-minute walk through Genesee Valley Park or a yoga class can have meaningful effects on your stress levels.</p>

<h3>Sleep Optimization</h3>
<p>Stress and poor sleep create a vicious cycle. Improving sleep hygiene — consistent bedtimes, limiting screens, optimizing your sleep environment — can dramatically reduce baseline stress levels.</p>

<h3>Social Connection</h3>
<p>Rochester has a strong sense of community, and leaning into that connection is genuinely therapeutic. Isolation amplifies stress; meaningful relationships buffer it.</p>

<h2>When to Seek Professional Support</h2>
<p>If stress is significantly impacting your relationships, work performance, physical health, or quality of life, it may be time to work with a wellness professional. At Oak & Olive, our wellness coaches are trained to help you identify the root sources of your stress and build a sustainable, personalized management plan.</p>

<p>We work with individuals, couples, and corporate teams throughout the Rochester, NY area. <a href="/contact">Reach out today</a> to schedule your free consultation and take the first step toward a calmer, more balanced life.</p>
    `.trim(),
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRecentPosts(count = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
