import Link from "next/link";
import Image from "next/image";

const ads = [
  {
    title: "Create Your Profile",
    description: "Join Publistr today and showcase your talent to the world.",
    image: "/ads/profile.jpg",
    link: "https://www.publistr.com/create-profile",
    buttonText: "Create Profile",
  },
  {
    title: "Submit to Magazines",
    description: "Get featured in top publications by submitting your work.",
    image: "/ads/magazine.jpg",
    link: "https://www.publistr.com/submit-magazine",
    buttonText: "Submit Now",
  },
  {
    title: "Join Competitions",
    description: "Participate in exciting competitions and let the world vote for you.",
    image: "/ads/competition.jpg",
    link: "https://www.publistr.com/competitions",
    buttonText: "Enter Competition",
  },
];

const PublistrAds = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Opportunities with Publistr</h2>
          <p className="text-lg text-gray-400 mt-4">
            Elevate your career by creating profiles, submitting work, and joining exciting competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ads.map((ad, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative w-full h-64">
                <Image
                  src={ad.image}
                  alt={ad.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4">{ad.title}</h3>
                <p className="text-gray-300 mb-6">{ad.description}</p>
                <Link href={ad.link} passHref>
                  <span className="bg-[#EE2229] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f43f5e] cursor-pointer transition-all duration-300">
                    {ad.buttonText}
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

export default PublistrAds;
