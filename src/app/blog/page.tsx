import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Behind the Scenes: A Day at Rex'o's Properties",
    slug: "behind-the-scenes",
    date: "18/02/2026",
    image: "/assets/images/blog-1.png",
  },
  {
    id: 2,
    title: "Understanding Property Titles in Nigeria: C of O vs. Deed of Assignment",
    slug: "property-titles-nigeria",
    date: "12/04/2026",
    image: "/assets/images/blog-2.png",
  },
  {
    id: 3,
    title: "Why Lekki Phase 1 Remains Lagos' Most Desirable Address",
    slug: "lekki-phase-1-desirable",
    date: "09/02/2026",
    image: "/assets/images/blog-3.png",
  },
  {
    id: 4,
    title: "How to Choose the Right Property for Long Term Value",
    slug: "right-property-long-term-value",
    date: "10/04/2026",
    image: "/assets/images/blog-4.png",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-dark mb-4">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy font-medium">Blog & News</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-navy mb-3">
            Insights & Perspectives on Property
          </h1>
          <p className="text-gray-dark text-sm max-w-lg mx-auto leading-relaxed">
            Expert insights, market trends, and practical guidance to help you make smarter property decisions.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                {/* Image */}
                <div className="relative h-52 rounded-xl overflow-hidden mb-3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Date */}
                <p className="text-xs text-gray-dark mb-2">{post.date}</p>

                {/* Title */}
                <h3 className="text-base font-bold text-navy leading-snug group-hover:text-navy-light transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                type="button"
                className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                  page === 1
                    ? "bg-navy text-white"
                    : "border border-gray-200 text-gray-dark hover:border-navy hover:text-navy"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
