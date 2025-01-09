import Image from "next/image";
import Link from "next/link";

const MagazineSection = () => {
  const magazines = [
    {
      title: "January 2025 Issue",
      description:
        "Explore the latest trends in fashion, makeup, and beauty with our January 2025 issue.",
      image: "/model3.jpg",
      link: "/magazine/january-2025",
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

        {/* Magazine List */}
        <div className="space-y-12">
          {magazines.map((magazine, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Magazine Image */}
              <div className="relative w-full md:w-1/2 h-80 md:h-96">
                <Image
                  src={magazine.image}
                  alt={magazine.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Magazine Content */}
              <div className="md:w-1/2 p-6 md:pl-12 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">{magazine.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {magazine.description}
                </p>
                <Link href={magazine.link} passHref>
                  <span className="bg-[#EE2229] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b57d6e] cursor-pointer transition">
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
