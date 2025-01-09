import Image from "next/image";
import Link from "next/link";

const RecentSection = () => {
  const recentPosts = [
    {
      title: "Top Makeup Trends for 2025",
      description:
        "Discover the hottest makeup trends that will dominate the beauty industry in 2025.",
      image: "/model10.jpg", // Replace with actual image path
      link: "/blog/top-makeup-trends-2025",
    },
    {
      title: "Exclusive Interview with Jane Doe",
      description:
        "Jane Doe shares her journey and the secrets behind her successful modeling career.",
      image: "/model3.jpg",
      link: "/interviews/jane-doe-exclusive",
    },
    {
      title: "How to Master Bridal Makeup in 2024",
      description:
        "Learn expert tips and techniques to perfect bridal makeup looks for clients in 2024.",
      image: "/model6.jpg",
      link: "/blog/bridal-makeup-guide",
    },
    {
      title: "Interview: Mark Smith's Rise in Fashion",
      description:
        "Mark Smith opens up about his journey from local model to international fashion icon.",
      image: "/model7.jpg",
      link: "/interviews/mark-smith-journey",
    },
    {
        title: "Top Makeup Trends for 2025",
        description:
          "Discover the hottest makeup trends that will dominate the beauty industry in 2025.",
        image: "/model2.jpg", // Replace with actual image path
        link: "/blog/top-makeup-trends-2025",
      },
      {
        title: "Exclusive Interview with Jane Doe",
        description:
          "Jane Doe shares her journey and the secrets behind her successful modeling career.",
        image: "/model1.jpg",
        link: "/interviews/jane-doe-exclusive",
      },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-lg text-[#EE2229] uppercase tracking-widest">
            Recent Highlights
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Recent Blogs & Interviews
          </h2>
        </div>

        {/* Recent Posts Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* Post Image with Hover Overlay */}
              <div className="relative w-full h-80">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>

              {/* Post Details */}
              <div className="absolute bottom-0 left-0 p-6 text-left z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{post.description}</p>
                <Link href={post.link} passHref>
                  <span className="inline-block bg-[#EE2229] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#b57d6e] transition">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentSection;
