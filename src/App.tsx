import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// TypeScript interfaces
interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
}

// Navigation Component
const Navigation = () => {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Scheduly AI" className="logo-image" />
          </a>
        </div>
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#benefits">Benefits</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="cta-button">Get Started</a>
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
        <img src="/hero-image.png" alt="AI Scheduling Interface" className="feature-image" />
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon }) => {
  return (
    <div className="product-card">
      <div className="product-header">
        <div className="product-icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <Link to={`/product/${title.toLowerCase().replace(/\s+/g, '-')}`} className="product-cta">
        Learn More
      </Link>
    </div>
  );
};

// Products Section Component
const ProductsSection = () => {
  const products = [
    {
      title: "Smart Scheduling",
      description: "AI-powered scheduling that learns from your team's preferences and patterns.",
      icon: "📅"
    },
    {
      title: "Meeting Analytics",
      description: "Gain insights into your team's meeting patterns and optimize productivity.",
      icon: "📊"
    },
    {
      title: "Calendar Integration",
      description: "Seamlessly sync with Google Calendar, Outlook, and other popular platforms.",
      icon: "🔄"
    },
    {
      title: "Team Collaboration",
      description: "Real-time collaboration tools for efficient meeting planning.",
      icon: "👥"
    },
    {
      title: "Automated Reminders",
      description: "Smart notifications to keep everyone on track and prepared.",
      icon: "🔔"
    },
    {
      title: "Custom Workflows",
      description: "Create and automate your team's unique scheduling workflows.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="products" className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
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
            <img src="/logo.png" alt="Scheduly AI" className="logo-image" />
          </div>
          <p className="company-description">
            Scheduly AI helps teams streamline their scheduling process with intelligent automation and powerful analytics.
          </p>
          <div className="backed-by-section">
            <img src="/backed-by.png" alt="Backed by" className="backed-by-image" />
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
  return (
    <div className="product-detail">
      <h1>Product Detail Page</h1>
      <p>This is a placeholder for the product detail page.</p>
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
