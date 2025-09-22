import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1d3557] text-gray-200 mt-10">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* About / Logo */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">ShopNest</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Your one-stop shop for all your favorite products. Quality and
              service guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Email: support@shopNest.com
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              Phone: +91 82 997 72056
            </p>
            <div className="flex mt-2 space-x-3">
              <a href="#" className="hover:text-yellow-400">
                Facebook
              </a>
              <a href="#" className="hover:text-yellow-400">
                Twitter
              </a>
              <a href="#" className="hover:text-yellow-400">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6">
          <div className="container mx-auto px-6 py-4 text-center text-gray-500 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} ShopNest. All rights reserved ❤️.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
