import React from 'react';
import './App.css';

const Navigation = () => (
  <nav className="nav-header">
    <div className="nav-container">
      <div className="logo">
        <img src="/logo-1.png" alt="Scheduly AI" className="logo-image" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#demo">Book a Demo</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="cta-button">Book a Demo</button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="hero-section" id="home">
    <div className="hero-content">
      <h1>Streamline claims, calls, and follow-ups with AI built for dental practices</h1>
      <p>Automate patient calls, claims, and streamline your dental practice operations.</p>
      <div className="hero-buttons">
        <button className="cta-button">Book a Demo</button>
        <a href="#products" className="secondary-button">Learn More</a>
      </div>
    </div>
    <div className="hero-image">
      <img src="/image-1.jpg" alt="AI Dental Solutions" className="feature-image" />
    </div>
  </section>
);

const ProductCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="product-card">
    <div className="product-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="product-cta">Learn More</button>
  </div>
);

const ProductsSection = () => (
  <section className="products-section" id="products">
    <h2>Our AI-Powered Dental Solutions</h2>
    <div className="products-grid">
      <ProductCard
        title="PDF Claim Automation"
        description="Automatically extract and submit data from dental insurance PDFs. Reduce manual errors and speed up reimbursement workflows."
        icon="📄"
      />
      <ProductCard
        title="Voice Agent Verification"
        description="Automate verification calls with AI voice agents that confirm patient insurance details with accuracy and empathy."
        icon="📞"
      />
      <ProductCard
        title="AI Receptionist"
        description="Handle incoming calls, FAQs, and scheduling 24/7 with our intelligent virtual front desk."
        icon="🤖"
      />
      <ProductCard
        title="Automated Recall Calls"
        description="Boost patient retention with proactive, intelligent follow-up calls and appointment reminders."
        icon="🔁"
      />
    </div>
  </section>
);

const DemoSection = () => (
  <section className="demo-section" id="demo">
    <h2>See It In Action</h2>
    <p>Schedule a live walkthrough with our AI specialists.</p>
    <button className="cta-button">Book a Demo</button>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-company">
        <div className="footer-logo">
          <img src="/logo-1.png" alt="Scheduly AI" className="logo-image" />
        </div>
        <p className="company-description">
          Transforming dental practices with cutting-edge AI solutions for automation, 
          efficiency, and enhanced patient care.
        </p>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <div className="contact-details">
          <div className="contact-emails">
            <a href="mailto:siva@effibotic.com">siva@effibotic.com</a>
            <a href="mailto:rupendra@effibotic.com">rupendra@effibotic.com</a>
          </div>
          <div className="contact-phones">
            <a href="tel:+16477242624">+1 (647) 724-2624</a>
            <a href="tel:+12899860990">+1 (289) 986-0990</a>
          </div>
          <address className="contact-address">
            8 Nelson St W,<br />
            Brampton, ON L6X 1B7
          </address>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="copyright">© 2024 Scheduly AI. All rights reserved.</p>
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
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
