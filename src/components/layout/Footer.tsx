import React from 'react';

const Footer = () => (
  <footer className="bg-bg-dark text-white py-24 px-8" id="contact">
    <div className="max-w-7xl mx-auto flex justify-between gap-20 mb-16">
      <div className="flex-1 max-w-[400px]">
        <div className="h-[60px] w-auto mb-6">
          <img src="/logo_new.png" alt="Scheduly AI" className="h-full w-auto object-contain" />
        </div>
        <p className="text-gray-400 leading-relaxed mb-8">
          Transforming clinical practices with cutting-edge AI solutions for automation, 
          efficiency, and enhanced patient care.
        </p>
        <div className="flex items-center gap-4 bg-white p-2 rounded-lg w-fit mb-8">
          <img src="/BHivelogo.png" alt="BHIVE" className="h-[25px] w-auto object-contain" />
          <span className="text-bg-dark font-medium">Backed by BHIVE</span>
        </div>
      </div>
      <div className="flex-1 max-w-[400px]">
        <h3 className="text-xl mb-6">Contact Us</h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <span className="text-xl leading-6 min-w-6">✉️</span>
            <div className="flex flex-col gap-2">
              <a href="mailto:siva@effibotic.com" className="text-gray-400 hover:text-white transition-colors">siva@effibotic.com</a>
              <a href="mailto:rupendra@effibotic.com" className="text-gray-400 hover:text-white transition-colors">rupendra@effibotic.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl leading-6 min-w-6">📞</span>
            <div className="flex flex-col gap-2">
              <a href="tel:+16477242624" className="text-gray-400 hover:text-white transition-colors">+1 (647) 724-2624</a>
              <a href="tel:+12899860990" className="text-gray-400 hover:text-white transition-colors">+1 (289) 986-0990</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xl leading-6 min-w-6">📍</span>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=8+Nelson+St+W+Brampton+ON+L6X+1B7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                8 Nelson St W,<br />
                Brampton, ON L6X 1B7
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-gray-700 text-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Scheduly AI. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer; 