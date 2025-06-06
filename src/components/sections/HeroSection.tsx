import React from 'react';

const HeroSection = () => (
  <section className="bg-blue-50 py-32 flex items-start justify-between w-full gap-20" id="home">
    <div className="flex-1 max-w-[600px] px-16">
      <h1 className="text-5xl leading-tight mb-7 text-text-main">
        Streamline claims, calls, and follow-ups with AI built for clinical practices
      </h1>
      <p className="text-xl text-gray-600 mb-10">
        Automate patient communication, insurance claims, and administrative follow-ups to save time, reduce errors, and improve your team's efficiency.
        Empower your staff to focus on patient care while AI handles the repetitive tasks.
      </p>
      <div className="flex gap-4">
        <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">Book a Demo</a>
        <a href="#products" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all">Learn More</a>
      </div>
    </div>
    <div className="flex-1 max-w-[500px] max-h-[500px] flex items-center justify-center pt-12 pr-8">
      <img src="/image-1.jpg" alt="AI Clinical Solutions" className="w-full h-auto object-contain rounded-2xl shadow-lg" />
    </div>
  </section>
);

export default HeroSection; 