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
    title: "How to Choose the Right Property for Long Term Value",
    slug: "right-property-long-term-value",
    date: "10/04/2026",
    image: "/assets/images/blog-4.png",
  },
  {
    title: "Understanding Property Titles in Nigeria: C of O vs. Deed of Assignment",
    slug: "property-titles-nigeria",
    date: "12/04/2026",
    image: "/assets/images/blog-2.png",
  },
];

export default function BlogPostLekki() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-dark">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-navy transition-colors">Blog & News</Link>
          <span>/</span>
          <span className="text-navy font-medium">Lekki Phase 1</span>
        </div>
      </div>

      {/* Post Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Main Article */}
          <div className="lg:col-span-3">
            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
              Why Lekki Phase 1 Remains Lagos&apos; Most Desirable Address
            </h1>

            {/* Hero Image */}
            <div className="relative h-64 lg:h-100 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/assets/images/blog-3.png"
                alt="Lekki Phase 1 Lagos"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro */}
            <p className="text-gray-dark leading-relaxed mb-8">
              Decades after its development, Lekki Phase 1 continues to hold its position as Lagos&apos; most sought-after residential and commercial address. Despite the rapid expansion of newer estates along the Lekki-Epe corridor, Lekki Phase 1 remains the benchmark by which every other Lagos neighbourhood is measured. Here is why it continues to attract homeowners, investors, and businesses alike.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy mb-4">1. Prime Location & Accessibility</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Lekki Phase 1 sits at the heart of Lagos Island&apos;s most dynamic corridor — with seamless access to Victoria Island, Ikoyi, and the wider Lekki-Epe Expressway. Its central position makes it ideal for professionals, families, and businesses.
              </p>
              <ul className="space-y-2">
                {[
                  "Minutes from Victoria Island and Ikoyi business districts",
                  "Direct access to the Lekki-Epe Expressway",
                  "Close proximity to major commercial hubs and markets",
                  "Well-maintained internal road network",
                  "Easy access to the Third Mainland Bridge and Lagos Island",
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
              <h2 className="text-xl font-bold text-navy mb-4">2. Established Infrastructure & Amenities</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Unlike emerging neighbourhoods that are still developing, Lekki Phase 1 boasts decades of established infrastructure — from reliable utilities to world-class recreational and commercial facilities.
              </p>
              <ul className="space-y-2">
                {[
                  "Top-rated international and private schools",
                  "World-class hospitals and medical facilities",
                  "High-end shopping malls, restaurants, and entertainment",
                  "Reputable banks and financial institutions",
                  "Fitness centres, hotels, and recreational parks",
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
              <h2 className="text-xl font-bold text-navy mb-4">3. Strong & Consistent Property Appreciation</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Property values in Lekki Phase 1 have demonstrated consistent appreciation over the years, making it one of Nigeria&apos;s most reliable real estate investment zones. Land and property prices here rarely decline.
              </p>
              <ul className="space-y-2">
                {[
                  "Consistent year-on-year property value growth",
                  "High demand from both local and diaspora buyers",
                  "Strong rental income potential across all property types",
                  "Low vacancy rates across residential and commercial units",
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
              <h2 className="text-xl font-bold text-navy mb-4">4. Prestige & Social Status</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                A Lekki Phase 1 address carries significant social and professional weight in Lagos. It signals success, stability, and belonging to a community of Lagos&apos; most influential residents.
              </p>
              <ul className="space-y-2">
                {[
                  "Home to executives, entrepreneurs, and diplomats",
                  "Prestigious address recognised across Nigeria and internationally",
                  "High-profile neighbours and a well-organised community",
                  "Gated estates and secured compounds across the area",
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
              <h2 className="text-xl font-bold text-navy mb-4">5. Thriving Commercial Activity</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Lekki Phase 1 is not just residential — it is a thriving commercial zone. From corporate offices to retail outlets, the area supports a vibrant mixed-use economy that drives continuous demand for both residential and commercial spaces.
              </p>
              <ul className="space-y-2">
                {[
                  "Dense concentration of corporate offices and co-working spaces",
                  "High foot traffic supporting retail and hospitality businesses",
                  "Growing tech and creative industry presence",
                  "Strong short-let and serviced apartment market",
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
              <h2 className="text-xl font-bold text-navy mb-4">6. Why Investors Continue to Choose Lekki Phase 1</h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Seasoned real estate investors understand that Lekki Phase 1 is not just a place to own property — it is a strategic asset. The combination of location, demand, and prestige makes it one of the safest and most rewarding investment destinations in Nigeria.
              </p>
              <ul className="space-y-2">
                {[
                  "Proven long-term capital appreciation track record",
                  "High rental yields relative to purchase price",
                  "Ease of resale due to strong buyer demand",
                  "Suitable for owner-occupiers and investors alike",
                  "Backed by strong infrastructure and government investment",
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
