import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const links = {
    useful: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of use', href: '/terms' },
      { label: 'Consent', href: '/consent' },
      { label: 'Get Published', href: '/publish' },
      { label: 'Talent-Management', href: '/talent' },
    ],
    social: [
      { icon: Facebook, href: '#' },
      { icon: Instagram, href: '#' },
      { icon: Youtube, href: '#' },
      { icon: Linkedin, href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/* Latest Magazine */}
        <div>
          <h3 className="text-xl font-bold mb-4">Magazine</h3>
          <div className="relative">
            <div className="bg-red-600 text-white text-xs px-2 py-1 absolute top-0 left-0">EXCLUSIVE</div>
            <img
              src="/model5.jpg"
              alt="January 2025 Magazine"
              className="w-48 h-64 object-cover"
            />
            <p className="mt-2">January 2025 Magazine</p>
          </div>
        </div>

        {/* Latest Blog */}
        <div>
          <h3 className="text-xl font-bold mb-4">Blog</h3>
          <div>
            <img
              src="/model6.jpg"
              alt="Fashion Blog"
              className="w-48 h-64 object-cover"
            />
            <p className="mt-2">Redefine your Wardrobe with Indian Fashion Trends</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2">
            {links.useful.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe & Social */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 flex-grow"
              />
              <button className="bg-red-600 text-white px-4 py-2">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-2">
              I've read and accept the{' '}
              <a href="/privacy" className="text-red-600">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="mt-8">
            <img
              src="/isn.webp"
              alt="ISSN 2690-0246"
              className="w-36"
            />
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-8">
            {links.social.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-red-900 hover:text-gray-300 transition-colors"
                >
                  <Icon size={25} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center text-center">
            <p className="text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} <span className='text-red-700'>WMH INDIA</span> . All rights reserved.
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
    </footer>
  );
};

export default Footer;
