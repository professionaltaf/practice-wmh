
import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      category: 'Technology',
      author: 'Alonso D.',
      date: 'Nov 22, 2022',
      title: 'The multiverse is a hypothetical group of the multiple universes.',
      description:
        'In partnership with Sydney startup Trace, Envato is delivering on its sustainability promise as a B-Corp...',
      image: '/model1.jpg',
      link: '/blog/multiverse',
    },
    // Additional blog objects can be added here
  ];

  const trendingCategories = [
    { name: 'Fashion', count: 12, image: '/model4.jpg' },
    { name: 'Lifestyle', count: 8, image: '/model2.jpg' },
    { name: 'New style', count: 13, image: 'model5.jpg' },
    { name: 'Style', count: 9, image: '/model3.jpg' },
    { name: 'Trending', count: 15, image: '/model6.jpg' },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
      {/* Blog Section */}
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
              <div className="text-sm text-gray-500 mb-2">
                By <span className="font-medium">{blog.author}</span> |{' '}
                <span>{blog.date}</span>
              </div>
              <h2 className="text-2xl font-bold hover:text-red-600 transition-colors">
                <a href={blog.link}>{blog.title}</a>
              </h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <a
                href={blog.link}
                className="text-red-600 mt-4 inline-block hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <div>
        {/* Author Info */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="text-center">
            <img
              src="/model2.jpg"
              alt="Author"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">Rosalina D.</h3>
            <p className="text-red-500 text-sm">Content Writer</p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-black hover:text-red-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Trending Categories</h3>
          <ul className="space-y-4">
            {trendingCategories.map((category, index) => (
              <li key={index} className="flex items-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-10 h-10 rounded-full object-cover mr-4"
                />
                <div className="flex-grow">
                  <h4 className="font-medium">{category.name}</h4>
                </div>
                <span className="text-red-600 font-bold">{category.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
