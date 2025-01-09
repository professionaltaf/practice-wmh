import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black ">
      <div className="relative w-full max-w-5xl p-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-0 mx-auto mt-20">
        {/* Left Side Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="relative group border border-transparent hover:border-red-500 rounded-lg transition-all duration-300">
            <Image
              src="/model1.jpg" // Replace with your image path
              alt="Fashion Image 1"
              layout="responsive"
              width={400}
              height={600} // Increased height
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
              <p className="text-sm text-gray-800 text-center">Image 1 Description</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group border border-transparent hover:border-red-500 rounded-lg transition-all duration-300">
            <Image
              src="/model2.jpg" // Replace with your image path
              alt="Fashion Image 2"
              layout="responsive"
              width={400}
              height={600} // Increased height
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
              <p className="text-sm text-gray-800 text-center">Image 2 Description</p>
            </div>
          </div>
        </div>

        {/* Center WMH India and Subscribe Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            <span className="text-rose-500 font-bold">WMH</span> INDIA <br />
            <span className="font-light text-lg">
              Sports | Events | Talents | Management
            </span>
          </h1>

          {/* Subscription Form */}
          <div className="bg-black bg-opacity-90 p-6 rounded-lg shadow-lg">
            <form className="space-y-2 flex flex-col items-center">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-64 p-2 text-sm rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
                  required
                />
              </div>

              {/* Subscribe Button */}
              <div>
                <button
                  type="submit"
                  className="w-64 py-2 text-sm rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-center justify-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="h-3 w-3 text-red-600 border-gray-600 focus:ring-red-500"
                  required
                />
                <label htmlFor="privacy-policy" className="text-gray-200 text-xs">
                  I’ve read and accept the{" "}
                  <a href="#" className="text-red-500 underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Image 3 */}
          <div className="relative group border border-transparent hover:border-red-500 rounded-lg transition-all duration-300">
            <Image
              src="/model2.jpg" // Replace with your image path
              alt="Fashion Image 3"
              layout="responsive"
              width={400}
              height={600} // Increased height
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
              <p className="text-sm text-gray-800 text-center">Image 3 Description</p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group border border-transparent hover:border-red-500 rounded-lg transition-all duration-300">
            <Image
              src="/model1.jpg" // Replace with your image path
              alt="Fashion Image 4"
              layout="responsive"
              width={400}
              height={600} // Increased height
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
              <p className="text-sm text-gray-800 text-center">Image 4 Description</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Box */}
      <div className="bg-gray-800 text-white py-6 w-full text-center">
        <h3 className="text-lg font-bold">Advertise With Us</h3>
        <p className="text-sm text-gray-400">Promote your brand with WMH India. Reach a global audience today!</p>
        <button className="mt-4 px-6 py-2 bg-red-600 rounded-md text-white hover:bg-red-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
