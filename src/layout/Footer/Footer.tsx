import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-main text-gray-500 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="font-serif text-lg">Netflix</span>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end">
          <span className="mx-4 hover:text-white font-serif">Home</span>
          <span className="mx-4 hover:text-white font-serif">Terms of Use</span>
          <span className="mx-4 hover:text-white font-serif">Privacy Policy</span>
          <span className="mx-4 hover:text-white font-serif">Contact Us</span>
        </nav>
        <div className="flex items-center mt-4 md:mt-0">
          <span className="text-sm mr-2 font-serif">Follow Us:</span>
          <span className="text-white hover:text-gray-300 mr-2">
            <i className="fab fa-facebook-square"></i>
          </span>
          <span className="text-white hover:text-gray-300 mr-2">
            <i className="fab fa-twitter-square"></i>
          </span>
          <span className="text-white hover:text-gray-300">
            <i className="fab fa-instagram-square"></i>
          </span>
        </div>
      </div>
    </footer>
  );
};
