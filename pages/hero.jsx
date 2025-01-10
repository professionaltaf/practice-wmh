import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-between pt-20">
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center  mx-auto">
        {/* Left Side Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="relative group border border-transparent hover:border-[#EE2229] rounded-lg transition-all duration-300 h-[600px] flex object-contain"> {/* Increased height */}
            <Image
              src="/interview image1.webp"
              alt="Fashion Image 1"
              layout="responsive"
              width={400}
              height={700} // Increased height
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
            <Link href="/exclusive" legacyBehavior>
              <a className="hover:text-[#EE2229] transition-colors duration-300 block ">
              <span className="text-white bg-gray-500 hover:bg-[#EE2229] rounded-sm p-1">Interview</span>
                
              <p className="text-lg text-black text-center"><span className=" text-sm">Exclusive</span> Gargi Duggal’s Journey from Gujarat to Global Success</p>
              </a>
            </Link>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group border border-transparent hover:border-[#EE2229] rounded-lg transition-all duration-300 h-[600px] flex object-contain"> {/* Increased height */}
            <Image
              src="/interview image2.webp"
              alt="Fashion Image 2"
              layout="responsive"
              width={800}
              height={1000} // Increased height
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
            <Link href="/exclusive" legacyBehavior>
              <a className="hover:text-[#EE2229] transition-colors duration-300 block ">
              <span className="text-white bg-gray-500 hover:bg-[#EE2229] rounded-sm p-1">Interview</span>
                
              <p className="text-lg text-black text-center"><span className=" text-sm">Exclusive</span> Revolutionizing the Runway: A Candid Conversation with Fashion Maverick Anjali Phougat</p>
              </a>
            </Link>
            </div>
          </div>
        </div>

        {/* Center WMH India and Subscribe Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            <span className="text-[#EE2229] font-bold">WMH</span> INDIA <br />
            <span className="font-light text-lg">
              Sports | Events | Talents | Management
            </span>
          </h1>

          {/* Subscription Form */}
          <div className="bg-black bg-opacity-90 p-6 rounded-lg shadow-lg">
            <form className="space-y-4 flex flex-col items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-64 p-2 text-sm rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-64 py-2 text-sm rounded-md bg-[#EE2229] text-white font-medium hover:bg-[#EE2229] transition duration-300"
              >
                Subscribe
              </button>
              <div className="flex items-center justify-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="h-3 w-3 text-[#EE2229] border-gray-600 focus:ring-[#EE2229]"
                  required
                />
                <label
                  htmlFor="privacy-policy"
                  className="text-gray-200 text-xs"
                >
                  I’ve read and accept the{" "}
                  <a href="#" className="text-[#EE2229] underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="grid grid-cols-2 gap-4 ">
          {/* Image 3 */}
          <div className="relative group border border-transparent hover:border-[#EE2229]rounded-lg transition-all duration-300 h-[600px] flex object-contain "> {/* Increased height */}
            <Image
              src="/interview image3.webp"
              alt="Fashion Image 3"
              layout="responsive"
              width={800}
              height={1000} // Increased height
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
            <Link href="/exclusive" legacyBehavior>
              <a className="hover:text-[#EE2229] transition-colors duration-300 block ">
              <span className="text-white bg-gray-500 hover:bg-[#EE2229] rounded-sm p-1">Interview</span>
                
              <p className="text-lg text-black text-center"><span className=" text-sm">Exclusive</span> “Fashion for me is keeping up with the change”, Nikita Singh Tomar, Fashion Model</p>
              </a>
            </Link>
              
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group border border-transparent hover:border-[#EE2229] rounded-lg transition-all duration-300 h-[600px] flex object-contain"> {/* Increased height */}
            <Image
              src="/interview image4.webp"
              alt="Fashion Image 4"
              layout="responsive"
              width={400}
              height={700} // Increased height
              className="rounded-lg object-cover shadow-md group-hover:scale-105 transform transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 p-2 rounded-lg">
            <Link href="/exclusive" legacyBehavior>
              <a className="hover:text-red-500 transition-colors duration-300 block ">
                <span className="text-white bg-gray-500 hover:bg-red-700 rounded-sm p-1">Interview</span>
                
              <p className="text-lg text-black text-center "><span className=" text-sm">Exclusive</span> Interview with Mannat Kaur: A Rising Star in the Delhi Makeup Industry</p>
              </a>
            </Link>
             
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Box */}
      {/* <div className="bg-gray-800 text-white py-6 w-full text-center mt-4"> 
        <h3 className="text-lg font-bold">Advertise With Us</h3>
        <p className="text-sm text-gray-400">
          Promote your brand with WMH India. Reach a global audience today!
        </p>
        <button className="mt-4 px-6 py-2 bg-red-600 rounded-md text-white hover:bg-red-700 transition duration-300">
          Learn More
        </button>
      </div> */}
    </div>
  );
}
