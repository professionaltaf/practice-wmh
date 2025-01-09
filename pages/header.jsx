import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/wmh-logo.webp" // Replace with your logo path
            alt="WMH Logo"
            className="h-8 w-40"
          />
          {/* <span className="text-lg font-bold">WORLD MODEL HUNT</span> */}
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/">HOME</Link>
          <Link href="/blogs">BLOGS</Link>
          <Link href="/magazine">MAGAZINE</Link>
          <Link href="/interviews">INTERVIEWS</Link>
          <Link href="/features">FEATURES</Link>
        </nav>

        {/* Get a Quote Button */}
        <div className="hidden md:block">
          <Link
            href="/quote"
            className="bg-[#EE2229] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#b57d6e] transition"
          >
            Mode
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black text-white">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
                BLOGS
              </Link>
            </li>
            <li>
              <Link href="/magazine" onClick={() => setIsMobileMenuOpen(false)}>
                MAGAZINES
              </Link>
            </li>
            <li>
              <Link
                href="/interviews"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                INTERVIEWS
              </Link>
            </li>
            <li>
              <Link href="/features" onClick={() => setIsMobileMenuOpen(false)}>
                FEATURES
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className="bg-[#EE2229] text-black px-4 py-2 rounded-full font-semibold hover:bg-[#b57d6e] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GET A QUOTE
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
