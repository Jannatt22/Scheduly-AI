import React, { useEffect, useRef } from 'react';
import './App.css';

const Navigation = () => (
  <nav className="nav-header">
    <div className="nav-container">
      <div className="logo">
        <img src="/logo_new.png" alt="Scheduly AI" className="logo-image" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#demo">Book a Demo</a>
        <a href="#contact">Contact</a>
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

const ProductCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="product-card">
    <div className="product-header">
      <div className="product-icon">{icon}</div>
      <h3>{title}</h3>
    </div>
    <p>{description}</p>
    <button className="product-cta">Learn More</button>
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
          title="Automated Claim Data Processing"
          description="Automatically extract and submit data from clinical insurance PDFs. Reduce manual errors and speed up reimbursement workflows."
          icon="📄"
        />
        <ProductCard
          title="Insurance Verification"
          description="Streamline insurance verification with AI-powered voice agents that confirm patient coverage details quickly, accurately, and within seconds."
          icon="📋"
        />
        <ProductCard
          title="AI Receptionist"
          description="Handle incoming calls, FAQs, and scheduling 24/7 with our intelligent virtual front desk."
          icon="🤖"
        />
        <ProductCard
          title="Automated Appointment Reminders"
          description="Boost patient retention with proactive, intelligent follow-up calls and appointment reminders."
          icon="🔁"
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

const DemoSection = () => (
  <section className="demo-section" id="demo">
    <h2>See It In Action</h2>
    <p>Schedule a live walkthrough with our AI specialists.</p>
    <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="cta-button">Book a Demo</a>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-company">
        <div className="footer-logo">
          <img src="/logo_new.png" alt="Scheduly AI" className="logo-image" />
        </div>
        <p className="company-description">
          Transforming dental practices with cutting-edge AI solutions for automation, 
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
    <div className="app">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
