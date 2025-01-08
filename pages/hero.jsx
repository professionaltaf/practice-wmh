import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const featuredContent = [
  {
    title: "Top 10 Beauty Trends for 2025",
    description: "Discover the latest beauty trends that will define the upcoming year.",
    image: "/model10.jpg",
    link: "/blog/top-beauty-trends-2025",
  },
  {
    title: "Exclusive Interview: Model of the Year",
    description: "Dive into the journey and success of the leading model this year.",
    image: "/model11.jpg",
    link: "/interviews/model-of-the-year",
  },
  {
    title: "Fashion Week Highlights",
    description: "Catch the most stunning moments from this season’s fashion week.",
    image: "/model12.jpg",
    link: "/blog/fashion-week-highlights",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = featuredContent[currentIndex];

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={currentContent.image}
          alt={currentContent.title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            {currentContent.title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8">
            {currentContent.description}
          </p>
          <Link href={currentContent.link} passHref>
            <span className="bg-[#EE2229] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#f43f5e] transition-all duration-300 cursor-pointer">
              Read More
            </span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {featuredContent.map((_, index) => (
          <span
            key={index}
            className={`block w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
