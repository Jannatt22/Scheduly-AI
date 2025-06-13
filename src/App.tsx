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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

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
        {/* Show login button and hamburger in a flex row on mobile */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="#login"
            className={`cta-button${isMobile ? ' mobile' : ''}`}
            style={isMobile ? { marginRight: '1rem' } : {}}
          >
            Login
          </a>
          {/* Hamburger Menu */}
          <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav-links">
            <a href="/" onClick={toggleMenu}>Home</a>
            <a href="#products" onClick={toggleMenu}>Products</a>
            <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Book Demo</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
            <a href="#login" onClick={toggleMenu}>Login</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Transforming Clinical Practice with AI</h1>
        <p>Transforming clinical practices with cutting-edge AI solutions for automation, efficiency, and enhanced patient care.</p>
        <div className="hero-buttons">
          <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="cta-button">Book Demo</a>
          <a href="#learn-more" className="secondary-button">Learn More</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/image-1.jpg" alt="AI Scheduling Interface" className="feature-image" />
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
        "Automated follow-up tracking",
        "Personalized patient reminders",
        "Care coordination",
        "EHR Integration"
      ]
    },
    {
      id: "ai-emergency-handler",
      title: "AI Emergency Handler",
      description: "Real-time emergency call management system that prioritizes urgent cases, provides immediate assistance, and ensures proper emergency response.",
      icon: "🚨",
      features: [
        "Real-time emergency management",
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
      text: '"The AI Receptionist has revolutionized our practice. It handles appointment scheduling 24/7, reduces no-shows with automated reminders, and our patients love how easy it is to use. We\'ve seen a 30% increase in booking efficiency."',
      author: "Dr. Emily Chen",
      role: "Dental Clinic Owner",
      rating: 5
    },
    {
      text: '"Our customer support has been transformed by the AI Chatbot. It handles over 80% of routine inquiries instantly, provides 24/7 support, and has improved our customer satisfaction scores by 40%. The multilingual support is a game-changer."',
      author: "Mark Thompson",
      role: "E-commerce Director",
      rating: 5
    },
    {
      text: '"The AI Lead Generator has completely transformed our sales process. It not only identifies potential leads but qualifies them with incredible accuracy. Our conversion rates have increased by 45%, and the automated nurturing sequences save our team countless hours."',
      author: "Lisa Rodriguez",
      role: "Sales Manager",
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
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
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
            <span className="backed-by-text">Backed by BHIVE</span>
          </div>
        </div>
        <div id="contact" className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <div className="contact-group">
              <span className="contact-icon">📧</span>
              <div className="contact-info">
                <a href="mailto:siva@effibotic.com">siva@effibotic.com</a>
                <a href="mailto:rupendra@effibotic.com">rupendra@effibotic.com</a>
              </div>
            </div>
            <div className="contact-group">
              <span className="contact-icon">📞</span>
              <div className="contact-info">
                <a href="tel:+16477242624">+1 (647) 724-2624</a>
                <a href="tel:+12899860990">+1 (289) 986-0990</a>
              </div>
            </div>
            <div className="contact-group">
              <span className="contact-icon">📍</span>
              <div className="contact-info">
                <address>
                  8 Nelson St W,<br />
                  Brampton, ON L6X 1B7
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
        "Automated follow-up tracking",
        "Personalized patient reminders",
        "Care coordination",
        "EHR Integration"
      ]
    },
    {
      id: "ai-emergency-handler",
      title: "AI Emergency Handler",
      description: "24/7 emergency call management system that prioritizes urgent cases, provides immediate assistance, and ensures proper emergency response.",
      icon: "🚨",
      features: [
        "Real-time emergency management",
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
        "Automated patient support",
        "Smart inquiry handling",
        "Appointment management",
        "Instant information assistance"
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

// Thank You Page Component
const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
        <h1>Thank You for Booking!</h1>
        <p>We're excited to show you how Scheduly AI can transform your practice.</p>
        <p>You'll receive a confirmation email shortly with the meeting details.</p>
        <Link to="/" className="cta-button">Return to Home</Link>
      </div>
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
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
