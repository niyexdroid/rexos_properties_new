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
];

export default function BlogPreview() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title with top border */}
        <div className="border-t-2 border-navy pt-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">
            Update News & Blogs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              {/* Image */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-3">
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
              <h3 className="text-base font-bold text-navy leading-snug">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
