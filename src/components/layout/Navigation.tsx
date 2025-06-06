import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="sticky top-0 bg-white h-20 shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
      <div className="h-[60px] flex items-center">
        <Link to="/" className="h-full flex items-center">
          <img src="/logo_new.png" alt="Scheduly AI" className="h-full w-auto object-contain" />
        </Link>
      </div>
      <div className="flex gap-10">
        <a href="/#home" className="text-text-main font-medium text-xl hover:text-primary transition-colors">Home</a>
        <a href="/#products" className="text-text-main font-medium text-xl hover:text-primary transition-colors">Products</a>
        <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium text-xl hover:text-primary transition-colors">Book a Demo</a>
        <a href="/#contact" className="text-text-main font-medium text-xl hover:text-primary transition-colors">Contact</a>
      </div>
      <a href="/login" className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">Login</a>
    </div>
  </nav>
);

export default Navigation; 