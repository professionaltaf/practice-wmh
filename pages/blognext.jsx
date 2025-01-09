import React from 'react';

const BlogWithSidebar = () => {
  const blogs = [
    {
      category: 'Technology',
      author: 'Alonso D.',
      date: 'Nov 22, 2022',
      title: 'That share universal hierarchy a large variety of sport these.',
      description:
        'In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp...',
      image: '/model1.jpg',
      link: '/blog/universal-hierarchy',
    },
    {
      category: 'Gaming',
      author: 'Alonso D.',
      date: 'Nov 20, 2022',
      title: 'Tips for helping to make on your startup a success.',
      description:
        'Explore effective strategies to ensure your startup succeeds in the competitive world...',
      image: '/model2.jpg',
      link: '/blog/startup-success',
    },
  ];

  const instagramFeeds = [
    '/model1.jpg',
    '/model2.jpg',
    '/model3.jpg',
    '/model4.jpg',
    '/model5.jpg',
    '/model6.jpg',
  ];

  return (
    <div className="bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Section */}
        <div className="lg:col-span-2">
          {blogs.map((blog, index) => (
            <div key={index} className="mb-8">
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                  {blog.category}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-400 mb-2">
                  By <span className="font-medium">{blog.author}</span> |{' '}
                  <span>{blog.date}</span>
                </div>
                <h2 className="text-2xl font-bold hover:text-red-600 transition-colors">
                  <a href={blog.link}>{blog.title}</a>
                </h2>
                <p className="text-gray-300 mt-2">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-red-600 mt-4 inline-block hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            <button className="bg-red-600 text-white w-10 h-10 rounded-full">01</button>
            <button className="bg-gray-600 text-gray-300 w-10 h-10 rounded-full hover:bg-red-600 hover:text-white">
              02
            </button>
            <button className="bg-gray-600 text-gray-300 w-10 h-10 rounded-full hover:bg-red-600 hover:text-white">
              03
            </button>
            <button className="bg-gray-600 text-gray-300 w-10 h-10 rounded-full hover:bg-red-600 hover:text-white">
              ...
            </button>
            <button className="bg-gray-600 text-gray-300 w-10 h-10 rounded-full hover:bg-red-600 hover:text-white">
              06
            </button>
          </div>
        </div>

        {/* Sidebar Section */}
        <div>
          {/* Featured Blog */}
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-4">Featured Blog</h3>
            <div>
              <img
                src={blogs[1].image}
                alt={blogs[1].title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="text-md font-bold mt-4 hover:text-red-600">
                <a href={blogs[1].link}>{blogs[1].title}</a>
              </h4>
            </div>
          </div>

          {/* Instagram Feeds */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Instagram Feeds</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramFeeds.map((img, index) => (
                <a href="#" key={index}>
                  <img
                    src={img}
                    alt={`Instagram ${index}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </a>
              ))}
            </div>
            <button className="bg-red-600 text-white text-sm px-4 py-2 rounded mt-4 w-full">
              Follow Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogWithSidebar;
