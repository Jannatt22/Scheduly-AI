import React, { useEffect, useRef } from 'react';
import ProductCard from '../ui/ProductCard';

const products = [
  {
    title: "AI Claim Processor",
    description: "Automatically extract, validate, and submit insurance claims data with 99.9% accuracy. Reduce processing time by 70% and eliminate manual errors.",
    icon: "📄",
    id: "ai-claim-processor"
  },
  {
    title: "AI Insurance Verifier",
    description: "Real-time insurance verification with instant coverage confirmation. Reduce verification time from hours to seconds while maintaining accuracy.",
    icon: "📋",
    id: "ai-insurance-verifier"
  },
  {
    title: "AI Scheduler",
    description: "Intelligent appointment scheduling system that optimizes your calendar, reduces no-shows by 40%, and handles scheduling 24/7.",
    icon: "📅",
    id: "ai-scheduler"
  },
  {
    title: "AI Recall Manager",
    description: "Automated patient recall system that tracks follow-ups, sends personalized reminders, and ensures timely patient care coordination.",
    icon: "🔔",
    id: "ai-recall-manager"
  },
  {
    title: "AI Emergency Handler",
    description: "24/7 emergency call management system that prioritizes urgent cases, provides immediate assistance, and ensures proper emergency response.",
    icon: "🚨",
    id: "ai-emergency-handler"
  },
  {
    title: "AI Virtual Assistant",
    description: "Comprehensive virtual assistant that handles patient inquiries, appointment confirmations, and general information requests around the clock.",
    icon: "🤖",
    id: "ai-virtual-assistant"
  }
];

const ProductsSection = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = productsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="py-24 px-16 bg-white" id="products">
      <h2 className="text-4xl text-center mb-12 text-text-main">Our AI-Powered Clinical Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" ref={productsRef}>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            {...product}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection; 