import React from 'react';

const benefits = [
  {
    icon: "⚡",
    title: "Save Time",
    description: "Reduce administrative work by up to 70% with our AI automation tools"
  },
  {
    icon: "💰",
    title: "Reduce Costs",
    description: "Cut operational expenses while improving efficiency and accuracy"
  },
  {
    icon: "🎯",
    title: "Improve Accuracy",
    description: "Minimize human errors in claims processing and verifications"
  },
  {
    icon: "😊",
    title: "Enhance Patient Experience",
    description: "Provide faster, more reliable service to your patients"
  }
];

const BenefitsSection = () => (
  <section className="py-32 px-8 bg-gradient-to-br from-slate-50 to-slate-100" id="benefits">
    <h2 className="text-4xl text-center mb-16 text-text-main">Transform Your Practice</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-4">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-10 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
          <span className="text-4xl mb-4 inline-block">{benefit.icon}</span>
          <h3 className="text-xl text-text-main mb-4">{benefit.title}</h3>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection; 