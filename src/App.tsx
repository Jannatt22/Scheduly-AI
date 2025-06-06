import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductDetail from './pages/products/ProductDetail';

const Navigation = () => (
  <nav className="nav-header">
    <div className="nav-container">
      <div className="logo">
        <Link to="/">
          <img src="/logo_new.png" alt="Scheduly AI" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <a href="/#home">Home</a>
        <a href="/#products">Products</a>
        <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer">Book a Demo</a>
        <a href="/#contact">Contact</a>
      </div>
      <a href="/login" className="cta-button">Login</a>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="hero-section" id="home">
    <div className="hero-content">
      <h1>Streamline claims, calls, and follow-ups with AI built for clinical practices</h1>
      <p>Automate patient communication, insurance claims, and administrative follow-ups to save time, reduce errors, and improve your team's efficiency.
        Empower your staff to focus on patient care while AI handles the repetitive tasks.</p>
      <div className="hero-buttons">
        <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="cta-button">Book a Demo</a>
        <a href="#products" className="secondary-button">Learn More</a>
      </div>
    </div>
    <div className="hero-image">
      <img src="/image-1.jpg" alt="AI Clinical Solutions" className="feature-image" />
    </div>
  </section>
);

const ProductCard = ({ title, description, icon, id }: { title: string; description: string; icon: string; id: string }) => (
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
    <section className="products-section" id="products">
      <h2>Our AI-Powered Clinical Solutions</h2>
      <div className="products-grid" ref={productsRef}>
        <ProductCard
          title="AI Claim Processor"
          description="Automatically extract, validate, and submit insurance claims data with 99.9% accuracy. Reduce processing time by 70% and eliminate manual errors."
          icon="📄"
          id="ai-claim-processor"
        />
        <ProductCard
          title="AI Insurance Verifier"
          description="Real-time insurance verification with instant coverage confirmation. Reduce verification time from hours to seconds while maintaining accuracy."
          icon="📋"
          id="ai-insurance-verifier"
        />
        <ProductCard
          title="AI Scheduler"
          description="Intelligent appointment scheduling system that optimizes your calendar, reduces no-shows by 40%, and handles scheduling 24/7."
          icon="📅"
          id="ai-scheduler"
        />
        <ProductCard
          title="AI Recall Manager"
          description="Automated patient recall system that tracks follow-ups, sends personalized reminders, and ensures timely patient care coordination."
          icon="🔔"
          id="ai-recall-manager"
        />
        <ProductCard
          title="AI Emergency Handler"
          description="24/7 emergency call management system that prioritizes urgent cases, provides immediate assistance, and ensures proper emergency response."
          icon="🚨"
          id="ai-emergency-handler"
        />
        <ProductCard
          title="AI Virtual Assistant"
          description="Comprehensive virtual assistant that handles patient inquiries, appointment confirmations, and general information requests around the clock."
          icon="��"
          id="ai-virtual-assistant"
        />
      </div>
    </section>
  );
};

const BenefitsSection = () => (
  <section className="benefits-section" id="benefits">
    <h2>Transform Your Practice</h2>
    <div className="benefits-grid">
      <div className="benefit-card">
        <span className="benefit-icon">⚡</span>
        <h3>Save Time</h3>
        <p>Reduce administrative work by up to 70% with our AI automation tools</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-icon">💰</span>
        <h3>Reduce Costs</h3>
        <p>Cut operational expenses while improving efficiency and accuracy</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-icon">🎯</span>
        <h3>Improve Accuracy</h3>
        <p>Minimize human errors in claims processing and verifications</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-icon">😊</span>
        <h3>Enhance Patient Experience</h3>
        <p>Provide faster, more reliable service to your patients</p>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="testimonials-section" id="testimonials">
    <h2>What Our Clients Say</h2>
    <p className="testimonials-subtitle">Hear from businesses that have transformed their operations with Effibotic</p>
    <div className="testimonials-grid">
      <div className="testimonial-card">
        <div className="testimonial-content">
          <p className="testimonial-text">"The AI Receptionist has revolutionized our practice. It handles appointment scheduling 24/7, reduces no-shows with automated reminders, and our patients love how easy it is to use. We've seen a 30% increase in booking efficiency."</p>
          <div className="testimonial-author">
            <h4>Dr. Emily Chen</h4>
            <p>Dental Clinic Owner</p>
          </div>
        </div>
        <div className="star-rating">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-content">
          <p className="testimonial-text">"Our customer support has been transformed by the AI Chatbot. It handles over 80% of routine inquiries instantly, provides 24/7 support, and has improved our customer satisfaction scores by 40%. The multilingual support is a game-changer."</p>
          <div className="testimonial-author">
            <h4>Mark Thompson</h4>
            <p>E-commerce Director</p>
          </div>
        </div>
        <div className="star-rating">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-content">
          <p className="testimonial-text">"The AI Lead Generator has completely transformed our sales process. It not only identifies potential leads but qualifies them with incredible accuracy. Our conversion rates have increased by 45%, and the automated nurturing sequences save our team countless hours."</p>
          <div className="testimonial-author">
            <h4>Lisa Rodriguez</h4>
            <p>Sales Manager</p>
          </div>
        </div>
        <div className="star-rating">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="footer-content">
      <div className="footer-company">
        <div className="footer-logo">
          <img src="/logo_new.png" alt="Scheduly AI" className="logo-image" />
        </div>
        <p className="company-description">
          Transforming clinical practices with cutting-edge AI solutions for automation, 
          efficiency, and enhanced patient care.
        </p>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <div className="contact-details">
          <div className="contact-group">
            <span className="contact-icon">✉️</span>
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
              <a 
                href="https://www.google.com/maps/search/?api=1&query=8+Nelson+St+W+Brampton+ON+L6X+1B7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                8 Nelson St W,<br />
                Brampton, ON L6X 1B7
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="copyright">© {new Date().getFullYear()} Scheduly AI. All rights reserved.</p>
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
