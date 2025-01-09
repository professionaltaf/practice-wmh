import Image from "next/image";
import Link from "next/link";

const TrendingSection = () => {
  const trendingPosts = [
    {
      title: "Top 10 Beauty Trends 2025",
      description:
        "Explore the beauty trends shaping 2025.",
      image: "/model1.jpg",
      link: "/blog/top-beauty-trends-2025",
    },
    {
      title: "Model of the Year Interview",
      description:
        "Inside look at this year's top model.",
      image: "/model2.jpg",
      link: "/interviews/model-of-the-year",
    },
    {
      title: "Mastering Glam Makeup",
      description:
        "Learn pro glam makeup techniques.",
      image: "/model3.jpg",
      link: "/blog/glam-makeup-guide",
    },
    {
      title: "Fashion Week Highlights",
      description:
        "The must-see moments from fashion week.",
      image: "/model4.jpg",
      link: "/blog/fashion-week-highlights",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-16 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-md text-[#EE2229] uppercase tracking-widest font-bold">
            Trending Now
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Popular Blogs & Interviews
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#2d3748] rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <div className="relative w-full h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-5">{post.description}</p>
                <Link href={post.link} passHref>
                  <span className="bg-[#EE2229] text-white px-6 py-2 rounded-full font-medium hover:bg-[#f43f5e] transition-all duration-300">
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

export default TrendingSection;
