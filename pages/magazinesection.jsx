import Image from "next/image";
import Link from "next/link";

const MagazineSection = () => {
  const magazines = [
    {
      title: "January 2025 Issue",
      description:
        "Explore the latest trends in fashion, makeup, and beauty with our January 2025 issue.",
      image: "/model9.jpg", // Replace with actual image path
      link: "/magazine/january-2025", // Buy/Read more link
    },
    {
      title: "December 2024 Issue",
      description:
        "The December edition brings you holiday glam, beauty tips, and exclusive interviews.",
      image: "/model10.jpg",
      link: "/magazine/december-2024",
    },
    {
      title: "November 2024 Issue",
      description:
        "Get inspired by our fall fashion and discover what's trending this season.",
      image: "/model11.jpg",
      link: "/magazine/november-2024",
    },
    {
      title: "October 2024 Issue",
      description:
        "Dive into the world of fashion and beauty with our special October edition.",
      image: "/model12.jpg",
      link: "/magazine/october-2024",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-lg text-[#EE2229] uppercase tracking-widest">
            Latest Editions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Magazine Section</h2>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {magazines.map((magazine, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              {/* Magazine Cover Image */}
              <div className="relative w-full h-80">
                <Image
                  src={magazine.image}
                  alt={magazine.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Magazine Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{magazine.title}</h3>
                <p className="text-gray-400 text-sm mb-6">
                  {magazine.description}
                </p>

                {/* Buy/Preview Link */}
                <Link href={magazine.link} passHref>
                  <span className="bg-[#EE2229] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#b57d6e] cursor-pointer transition">
                    View Issue
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

export default MagazineSection;
