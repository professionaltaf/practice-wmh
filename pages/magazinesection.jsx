import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link"; // Import Link for navigation

const MagazineSection = () => {
  const magazines = [
    {
      title: "The multiverse is a hypothetical group of multiple universes.",
      category: "Magazine",
      date: "Nov 21, 2022",
      author: "Alonso D.",
      image: "/model5.jpg",
      link: "/magazine/multiverse", // Add unique link for each magazine
    },
    {
      title: "That share an universal hierarchy a large camp or burger.",
      category: "Magazine",
      date: "Nov 21, 2022",
      author: "Alonso D.",
      image: "/model2.jpg",
      link: "/magazine/hierarchy",
    },
    {
      title: "That share an universal hierarchy a large camp or burger.",
      category: "Magazine",
      date: "Nov 21, 2022",
      author: "Alonso D.",
      image: "/model3.jpg",
      link: "/magazine/camp-burger",
    },
    {
      title: "Breaking barriers with new runway modeling standards.",
      category: "Magazine",
      date: "Oct 15, 2022",
      author: "Sophia J.",
      image: "/model4.jpg",
      link: "/magazine/runway",
    },
  ];

  return (
    <div className="bg-black text-white py-12 container mx-auto">
      <div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Box (Main Content) */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold mb-6">Magazine</h2>
          <p className="text-gray-300 mb-8">
            Among the essential components of the fashion world, magazines are
            one of the vital categories. Likewise, the magazine of World Model
            Hunt India adds spice to your meal. It plays a significant part in
            connecting your fashion perception with the fashion community. If
            you've got to examine the fashion magazine of World Model Hunt
            India, subscribe today and stimulate your fashion sense.
          </p>

          {/* Featured Magazine */}
          <Link href={magazines[0].link} className="relative bg-gray-800 rounded-lg overflow-hidden block">
            <img
              src={magazines[0].image}
              alt={magazines[0].title}
              className="w-full h-1/2 object-cover"
            />
            <div className="absolute top-2 left-2 bg-[#EE2229] text-white text-xs px-2 py-1 rounded">
              {magazines[0].category.toUpperCase()}
            </div>
            <div className="absolute bottom-0 bg-black bg-opacity-75 p-4 w-full">
              <p className="text-xs text-gray-400">
                BY {magazines[0].author.toUpperCase()} • {magazines[0].date}
              </p>
              <h3 className="text-lg font-bold">{magazines[0].title}</h3>
            </div>
          </Link>
        </div>

        {/* Right Box (Additional Magazines + More Button) */}
        <div>
          <h3 className="text-lg font-bold mb-4">Other Magazines</h3>
          <div className="grid grid-cols-1 gap-4">
            {magazines.slice(1, 4).map((magazine, index) => (
              <Link
                href={magazine.link}
                key={index}
                className="relative bg-gray-800 rounded-lg overflow-hidden block"
              >
                <img
                  src={magazine.image}
                  alt={magazine.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-[#EE2229] text-white text-xs px-2 py-1 rounded">
                  {magazine.category.toUpperCase()}
                </div>
              </Link>
            ))}
          </div>

          {/* More Magazines Button */}
          <div className="mt-6 text-center">
            <Link
              href="/magazines"
              className="inline-block bg-[#EE2229] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-white-700 transition"
            >
              More Magazines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineSection;
