import React from "react";

const MagazineSection = () => {
  const magazines = [
    {
      title: "January 2025 Magazine",
      issue: "Issue 49",
      date: "7 January 2025",
      coverImage: "/model5.jpg",
      exclusive: true,
      description: "Redefine your wardrobe with Indian fashion trends.",
    },
    {
      title: "December 2024 Magazine",
      issue: "Issue 48",
      date: "10 December 2024",
      coverImage: "/model2.jpg",
      exclusive: true,
      description: "The evolution of fashion week and runway modeling over Khadi.",
    },
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {magazines.map((magazine, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={magazine.coverImage}
                    alt={magazine.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  {magazine.exclusive && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      EXCLUSIVE
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold mt-4">{magazine.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{magazine.issue}</p>
                <p className="text-sm text-gray-400">{magazine.date}</p>
                <p className="text-gray-300 mt-2">{magazine.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Search Box */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg"
              />
              <button className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 rounded-lg">
                🔍
              </button>
            </div>
          </div>

          {/* Social Share */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">Share</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Recent Magazines */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Recent Magazines</h3>
            {magazines.map((magazine, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start">
                  <img
                    src={magazine.coverImage}
                    alt={magazine.title}
                    className="w-16 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h4 className="text-sm font-bold">{magazine.title}</h4>
                    <p className="text-xs text-gray-400">{magazine.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineSection;
