const Footer = () => {
    return (
      <footer className="bg-[#101010] text-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3">
                <img
                  src="/wmh-logo.webp" // Replace with your logo path
                  alt="Logo"
                  className="h-10 w-40"
                />
                {/* <span className="text-2xl font-bold">GMAKEUP.</span> */}
              </div>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Elevate your brand's reach and impact with our "Advertise with Us" opportunity. Promote your products and services to our diverse, engaged audience, spanning across industries and demographics. Our platform offers targeted advertising that ensures your message resonates.
              </p>
            </div>
  
            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">OUR LINKS</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="/" className="hover:text-white">Home</a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white">Blogs</a>
                </li>
                <li>
                  <a href="/magazine" className="hover:text-white">Magazine</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">Interviews</a>
                </li>
              </ul>
            </div>
  
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">FAQ</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Support</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Privacy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Terms & Conditions</a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
              <ul className="text-gray-400 space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="bg-[#EE2229] p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h11M9 21V3m9 11h-4m0 0V5a2 2 0 112 2v6z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p>1800-121-3637</p>
                    <p>+91-7052-101-786</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="bg-[#EE2229] p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12h4m0 0V6m0 6l-6-6M4 12l6 6"
                      />
                    </svg>
                  </span>
                  <div>
                    <p>info@example.com</p>
                    <p>help@example.com</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="bg-[#EE2229] p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12h4M4 12h8m8 0l-6 6M4 12l6-6"
                      />
                    </svg>
                  </span>
                  <p>1247/Plot No. 39, LHB Colony, Kanpur</p>
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
              <div>
                <iframe
                  src="https://maps.google.com/maps?q=plexus%20worldwide&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} Zcubedesign. All rights reserved.
            </p>
            <div className="text-sm text-gray-400 space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  