import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

// TypeScript interfaces
interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Navigation Component
const Navigation = () => {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            <img src="/logo_new.png" alt="Scheduly AI" className="logo-image" />
          </a>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#products">Products</a>
          <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer">Book Demo</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#login" className="cta-button">Login</a>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>AI-Powered Scheduling for Modern Teams</h1>
        <p>Streamline your team's scheduling process with our intelligent AI assistant. Save time, reduce conflicts, and boost productivity.</p>
        <div className="hero-buttons">
          <a href="#demo" className="cta-button">Request Demo</a>
          <a href="#learn-more" className="secondary-button">Learn More</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/image-1.png" alt="AI Scheduling Interface" className="feature-image" />
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, icon, features }) => {
  return (
    <div className="product-card">
      <div className="product-header">
        <div className="product-icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <Link to={`/product/${id}`} className="product-cta">
        Learn More
      </Link>
    </div>
  );
};

// Products Section Component
const ProductsSection = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const productCards = productsRef.current?.querySelectorAll('.product-card');
    productCards?.forEach((card) => observer.observe(card));

    return () => {
      productCards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const products = [
    {
      id: "ai-claim-processor",
      title: "AI Claim Processor",
      description: "Automatically extract, validate, and submit insurance claims data with 99.9% accuracy. Reduce processing time by 70% and eliminate manual errors.",
      icon: "📄",
      features: [
        "Automated data extraction",
        "99.9% accuracy rate",
        "70% faster processing",
        "Error elimination"
      ]
    },
    {
      id: "ai-insurance-verifier",
      title: "AI Insurance Verifier",
      description: "Real-time insurance verification with instant coverage confirmation. Reduce verification time from hours to seconds while maintaining accuracy.",
      icon: "📋",
      features: [
        "Real-time verification",
        "Instant coverage confirmation",
        "Seconds-level processing",
        "High accuracy maintenance"
      ]
    },
    {
      id: "ai-scheduler",
      title: "AI Scheduler",
      description: "Intelligent appointment scheduling system that optimizes your calendar, reduces no-shows by 40%, and handles scheduling 24/7.",
      icon: "📅",
      features: [
        "Calendar optimization",
        "40% no-show reduction",
        "24/7 scheduling",
        "Smart time slot allocation"
      ]
    },
    {
      id: "ai-recall-manager",
      title: "AI Recall Manager",
      description: "Automated patient recall system that tracks follow-ups, sends personalized reminders, and ensures timely patient care coordination.",
      icon: "🔔",
      features: [
        "Follow-up tracking",
        "Personalized reminders",
        "Care coordination",
        "Automated scheduling"
      ]
    },
    {
      id: "ai-emergency-handler",
      title: "AI Emergency Handler",
      description: "24/7 emergency call management system that prioritizes urgent cases, provides immediate assistance, and ensures proper emergency response.",
      icon: "🚨",
      features: [
        "24/7 emergency management",
        "Urgent case prioritization",
        "Immediate assistance",
        "Emergency response coordination"
      ]
    },
    {
      id: "ai-virtual-assistant",
      title: "AI Virtual Assistant",
      description: "Comprehensive virtual assistant that handles patient inquiries, appointment confirmations, and general information requests around the clock.",
      icon: "🤖",
      features: [
        "24/7 patient support",
        "Inquiry handling",
        "Appointment management",
        "Information assistance"
      ]
    }
  ];

  return (
    <section id="products" className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid" ref={productsRef}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Save Time",
      description: "Reduce scheduling time by up to 80% with AI-powered automation.",
      icon: "⏰"
    },
    {
      title: "Boost Productivity",
      description: "Eliminate scheduling conflicts and focus on what matters most.",
      icon: "📈"
    },
    {
      title: "Improve Communication",
      description: "Keep everyone in sync with smart notifications and updates.",
      icon: "💬"
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with detailed analytics and reports.",
      icon: "📊"
    }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <h2>Why Choose Scheduly AI?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Scheduly AI has transformed how our team manages meetings. The AI is incredibly intuitive and has saved us countless hours.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      rating: 5
    },
    {
      text: "The automated scheduling features are a game-changer. Our team's productivity has increased significantly since we started using it.",
      author: "Michael Chen",
      role: "Team Lead at InnovateCo",
      rating: 5
    },
    {
      text: "The analytics dashboard provides valuable insights into our meeting patterns. Highly recommended for any growing team.",
      author: "Emily Rodriguez",
      role: "Operations Director at GrowthLabs",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <p className="testimonials-subtitle">Join hundreds of satisfied teams who have transformed their scheduling process</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
              <div className="star-rating">
                {"★".repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company">
          <div className="footer-logo">
            <img src="/logo_new.png" alt="Scheduly AI" className="logo-image" />
          </div>
          <p className="company-description">
            Scheduly AI helps teams streamline their scheduling process with intelligent automation and powerful analytics.
          </p>
          <div className="backed-by-section">
            <img src="/BHiveLogo.png" alt="Backed by" className="backed-by-image" />
            <span className="backed-by-text">Backed by Y Combinator</span>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <div className="contact-group">
              <span className="contact-icon">📧</span>
              <div className="contact-info">
                <a href="mailto:sales@scheduly.ai">sales@scheduly.ai</a>
                <a href="mailto:support@scheduly.ai">support@scheduly.ai</a>
              </div>
            </div>
            <div className="contact-group">
              <span className="contact-icon">📞</span>
              <div className="contact-info">
                <a href="tel:+1-555-0123">+1 (555) 0123</a>
                <a href="tel:+1-555-0124">+1 (555) 0124</a>
              </div>
            </div>
            <div className="contact-group">
              <span className="contact-icon">📍</span>
              <div className="contact-info">
                <address>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    123 AI Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Scheduly AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Product Detail Page Component
const ProductDetail = () => {
  const { productId } = useParams();
  const products = [
    {
      id: "ai-claim-processor",
      title: "AI Claim Processor",
      description: "Automatically extract, validate, and submit insurance claims data with 99.9% accuracy. Reduce processing time by 70% and eliminate manual errors.",
      icon: "📄",
      features: [
        "Automated data extraction",
        "99.9% accuracy rate",
        "70% faster processing",
        "Error elimination"
      ]
    },
    {
      id: "ai-insurance-verifier",
      title: "AI Insurance Verifier",
      description: "Real-time insurance verification with instant coverage confirmation. Reduce verification time from hours to seconds while maintaining accuracy.",
      icon: "📋",
      features: [
        "Real-time verification",
        "Instant coverage confirmation",
        "Seconds-level processing",
        "High accuracy maintenance"
      ]
    },
    {
      id: "ai-scheduler",
      title: "AI Scheduler",
      description: "Intelligent appointment scheduling system that optimizes your calendar, reduces no-shows by 40%, and handles scheduling 24/7.",
      icon: "📅",
      features: [
        "Calendar optimization",
        "40% no-show reduction",
        "24/7 scheduling",
        "Smart time slot allocation"
      ]
    },
    {
      id: "ai-recall-manager",
      title: "AI Recall Manager",
      description: "Automated patient recall system that tracks follow-ups, sends personalized reminders, and ensures timely patient care coordination.",
      icon: "🔔",
      features: [
        "Follow-up tracking",
        "Personalized reminders",
        "Care coordination",
        "Automated scheduling"
      ]
    },
    {
      id: "ai-emergency-handler",
      title: "AI Emergency Handler",
      description: "24/7 emergency call management system that prioritizes urgent cases, provides immediate assistance, and ensures proper emergency response.",
      icon: "🚨",
      features: [
        "24/7 emergency management",
        "Urgent case prioritization",
        "Immediate assistance",
        "Emergency response coordination"
      ]
    },
    {
      id: "ai-virtual-assistant",
      title: "AI Virtual Assistant",
      description: "Comprehensive virtual assistant that handles patient inquiries, appointment confirmations, and general information requests around the clock.",
      icon: "🤖",
      features: [
        "24/7 patient support",
        "Inquiry handling",
        "Appointment management",
        "Information assistance"
      ]
    }
  ];

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="product-detail">
        <h1>Product Not Found</h1>
        <p>The requested product could not be found.</p>
        <Link to="/" className="cta-button">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <div className="product-detail-icon">{product.icon}</div>
        <h1>{product.title}</h1>
      </div>
      <p className="product-detail-description">{product.description}</p>
      <div className="product-detail-features">
        <h2>Key Features</h2>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <Link to="/" className="cta-button">Back to Products</Link>
    </div>
  );
};

// Main App Component
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
