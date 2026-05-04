import Image from "next/image";
import Link from "next/link";

const otherBlogs = [
  {
    title: "Behind the Scenes: A Day at Rex'o's Properties",
    slug: "behind-the-scenes",
    date: "18/02/2026",
    image: "/assets/images/blog-1.png",
  },
  {
    title: "Why Lekki Phase 1 Remains Lagos' Most Desirable Address",
    slug: "lekki-phase-1-desirable",
    date: "09/02/2026",
    image: "/assets/images/blog-3.png",
  },
  {
    title: "Understanding Property Titles in Nigeria: C of O vs. Deed of Assignment",
    slug: "property-titles-nigeria",
    date: "12/04/2026",
    image: "/assets/images/blog-2.png",
  },
];

export default function BlogPostRightProperty() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-dark">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-navy transition-colors">Blog & News</Link>
          <span>/</span>
          <span className="text-navy font-medium">Right Property for Long Term Value</span>
        </div>
      </div>

      {/* Post Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Main Article */}
          <div className="lg:col-span-3">
            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
              How to Choose the Right Property for Long Term Value
            </h1>

            {/* Hero Image */}
            <div className="relative h-64 lg:h-100 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/assets/images/blog-4.png"
                alt="How to Choose the Right Property for Long Term Value"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro */}
            <p className="text-gray-dark leading-relaxed mb-8">
              Buying property for long-term value requires more than just finding a place that looks good today. It demands strategic thinking, market awareness, and careful evaluation of factors that will determine how well your investment performs over time. Here are six key things to consider before making your decision.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy mb-4">1. Location Still Matters Most</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                The age-old rule still holds true — location is the single most important factor in property value. A property in the right location will always appreciate, regardless of market fluctuations.
              </p>
              <ul className="space-y-2">
                {[
                  "Proximity to business districts and commercial hubs",
                  "Access to quality schools, hospitals, and amenities",
                  "Road network and ease of commute",
                  "Security and neighbourhood reputation",
                  "Future development plans for the area",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy mb-4">2. Check Future Development Potential</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Buying in an area that is set for growth can multiply your returns significantly. Look beyond what the area looks like today and focus on what it is becoming.
              </p>
              <ul className="space-y-2">
                {[
                  "Government infrastructure projects in the pipeline",
                  "New road constructions and bridges planned nearby",
                  "Commercial developments entering the area",
                  "Population growth trends in the neighbourhood",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy mb-4">3. Verify Property Documentation</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                No matter how attractive a property looks, its long-term value is only as strong as its legal foundation. Always verify all documentation before committing.
              </p>
              <ul className="space-y-2">
                {[
                  "Confirm a valid Certificate of Occupancy (C of O)",
                  "Conduct a search at the Land Registry",
                  "Ensure there are no encumbrances or disputes",
                  "Work with a qualified property lawyer",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy mb-4">4. Consider Rental & Resale Value</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                A good long-term property investment should generate income while you hold it and appreciate when you decide to sell. Evaluate both rental yield and resale potential before buying.
              </p>
              <ul className="space-y-2">
                {[
                  "Research current rental rates in the area",
                  "Compare similar property resale prices",
                  "Assess tenant demand in the neighbourhood",
                  "Factor in maintenance costs against rental income",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy mb-4">5. Evaluate Infrastructure & Amenities</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Properties with strong surrounding infrastructure consistently outperform those in poorly serviced areas. Good amenities attract quality tenants and buyers.
              </p>
              <ul className="space-y-2">
                {[
                  "Reliable power supply and water availability",
                  "Good road access and drainage systems",
                  "Proximity to shopping centres and recreation",
                  "Quality of estate management and security",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-navy mb-4">6. Work With The Right Real Estate Experts</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Having the right team in your corner makes all the difference. A reputable real estate company brings market knowledge, verified listings, and professional guidance that protects your investment.
              </p>
              <ul className="space-y-2">
                {[
                  "Partner with developers with a proven track record",
                  "Get independent legal and financial advice",
                  "Work with agents who have deep local market knowledge",
                  "Ensure full transparency on pricing and documentation",
                  "Choose companies like Rex'o's Properties with verified listings",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Social Share */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <p className="text-sm font-semibold text-navy mb-4">Share</p>
              <div className="flex flex-col gap-3">
                <a href="#" aria-label="Share on Facebook" className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center hover:bg-navy hover:text-white text-navy transition-colors">
                  <Image src="/assets/images/Icon/Social Media Icon.svg" alt="Facebook" width={18} height={18} />
                </a>
                <a href="#" aria-label="Share on Instagram" className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center hover:bg-navy hover:text-white text-navy transition-colors">
                  <Image src="/assets/images/Icon/Social Media Icon-1.svg" alt="Instagram" width={18} height={18} />
                </a>
                <a href="#" aria-label="Share on TikTok" className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Other Blogs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy">Other Blogs</h2>
            <Link href="/blog" className="border-2 border-navy text-navy px-6 py-2 rounded-full text-sm font-semibold hover:bg-navy hover:text-white transition-colors">
              View More
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherBlogs.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs text-gray-dark mb-2">{post.date}</p>
                <h3 className="text-base font-bold text-navy leading-snug group-hover:text-navy-light transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
