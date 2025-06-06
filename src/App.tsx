import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './pages/products/ProductDetail';

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

const ProductCard = ({ title, description, icon, id, index }: { title: string; description: string; icon: string; id: string; index: number }) => (
  <div 
    className="bg-bg-light p-6 rounded-2xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex items-center gap-4 mb-5">
      <div className="text-3xl min-w-8 flex items-center justify-center">{icon}</div>
      <h3 className="text-xl text-text-main leading-relaxed flex-1">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
    <Link to={`/product/${id}`} className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
      Learn More
    </Link>
  </div>
);

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

const BenefitsSection = () => (
  <section className="py-32 px-8 bg-gradient-to-br from-slate-50 to-slate-100" id="benefits">
    <h2 className="text-4xl text-center mb-16 text-text-main">Transform Your Practice</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-4">
      <div className="bg-white p-10 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
        <span className="text-4xl mb-4 inline-block">⚡</span>
        <h3 className="text-xl text-text-main mb-4">Save Time</h3>
        <p className="text-gray-600 leading-relaxed">Reduce administrative work by up to 70% with our AI automation tools</p>
      </div>
      <div className="bg-white p-10 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
        <span className="text-4xl mb-4 inline-block">💰</span>
        <h3 className="text-xl text-text-main mb-4">Reduce Costs</h3>
        <p className="text-gray-600 leading-relaxed">Cut operational expenses while improving efficiency and accuracy</p>
      </div>
      <div className="bg-white p-10 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
        <span className="text-4xl mb-4 inline-block">🎯</span>
        <h3 className="text-xl text-text-main mb-4">Improve Accuracy</h3>
        <p className="text-gray-600 leading-relaxed">Minimize human errors in claims processing and verifications</p>
      </div>
      <div className="bg-white p-10 rounded-2xl text-center shadow-sm hover:-translate-y-1 transition-transform">
        <span className="text-4xl mb-4 inline-block">😊</span>
        <h3 className="text-xl text-text-main mb-4">Enhance Patient Experience</h3>
        <p className="text-gray-600 leading-relaxed">Provide faster, more reliable service to your patients</p>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-16 px-8 bg-gray-50 text-center" id="testimonials">
    <h2 className="text-4xl text-text-main mb-4">What Our Clients Say</h2>
    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
      Hear from businesses that have transformed their operations with Effibotic
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
        <div className="flex-grow">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
            "The AI Receptionist has revolutionized our practice. It handles appointment scheduling 24/7, reduces no-shows with automated reminders, and our patients love how easy it is to use. We've seen a 30% increase in booking efficiency."
          </p>
          <div className="mt-6">
            <h4 className="text-xl text-text-main font-medium">Dr. Emily Chen</h4>
            <p className="text-gray-600 mt-1">Dental Clinic Owner</p>
          </div>
        </div>
        <div className="mt-4 text-2xl text-yellow-400 tracking-wider">
          ★★★★★
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
        <div className="flex-grow">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
            "Our customer support has been transformed by the AI Chatbot. It handles over 80% of routine inquiries instantly, provides 24/7 support, and has improved our customer satisfaction scores by 40%. The multilingual support is a game-changer."
          </p>
          <div className="mt-6">
            <h4 className="text-xl text-text-main font-medium">Mark Thompson</h4>
            <p className="text-gray-600 mt-1">E-commerce Director</p>
          </div>
        </div>
        <div className="mt-4 text-2xl text-yellow-400 tracking-wider">
          ★★★★★
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
        <div className="flex-grow">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
            "The AI Lead Generator has completely transformed our sales process. It not only identifies potential leads but qualifies them with incredible accuracy. Our conversion rates have increased by 45%, and the automated nurturing sequences save our team countless hours."
          </p>
          <div className="mt-6">
            <h4 className="text-xl text-text-main font-medium">Lisa Rodriguez</h4>
            <p className="text-gray-600 mt-1">Sales Manager</p>
          </div>
        </div>
        <div className="mt-4 text-2xl text-yellow-400 tracking-wider">
          ★★★★★
        </div>
      </div>
    </div>
  </section>
);

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

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProductsSection />
                <BenefitsSection />
                <TestimonialsSection />
                <Footer />
              </>
            } />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
