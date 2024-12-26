import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-wrap justify-between">
          {/* Website Name and About */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold">Ribbonaut</h3>
            <p>Your destination for unique textile art and crafts.</p>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>Email: support@ribbonaut.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Address: South Banasree, Dhaka 1219</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex flex-col justify-center md:justify-start gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 border-t border-gray-600 pt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Ribbonaut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
