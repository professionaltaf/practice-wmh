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
  ];

  return (
    <section className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-lg text-[#EE2229] uppercase tracking-widest">
            Recent Highlights
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Recent Blogs & Interviews</h2>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              {/* Post Image */}
              <div className="relative w-full h-80">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Post Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{post.description}</p>

                {/* Read More Link */}
                <Link href={post.link} passHref>
                  <span className="bg-[#EE2229] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#b57d6e] cursor-pointer transition">
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
