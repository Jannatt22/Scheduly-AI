import React from 'react';
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
          <a href="#book-demo">Book Demo</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#book-demo" className="cta-button">Get Started</a>
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
  const products = [
    {
      id: "smart-scheduling",
      title: "Smart Scheduling",
      description: "AI-powered scheduling that learns from your team's preferences and patterns. Automatically find the best meeting times for everyone.",
      icon: "📅",
      features: [
        "AI-powered scheduling",
        "Team preference learning",
        "Automatic conflict resolution",
        "Smart time slot suggestions"
      ]
    },
    {
      id: "meeting-analytics",
      title: "Meeting Analytics",
      description: "Gain insights into your team's meeting patterns and optimize productivity with detailed analytics and reports.",
      icon: "📊",
      features: [
        "Meeting duration tracking",
        "Participation analytics",
        "Productivity insights",
        "Custom report generation"
      ]
    },
    {
      id: "calendar-integration",
      title: "Calendar Integration",
      description: "Seamlessly sync with Google Calendar, Outlook, and other popular platforms. Keep all your schedules in one place.",
      icon: "🔄",
      features: [
        "Multi-platform sync",
        "Real-time updates",
        "Cross-platform availability",
        "Automated conflict detection"
      ]
    },
    {
      id: "team-collaboration",
      title: "Team Collaboration",
      description: "Real-time collaboration tools for efficient meeting planning. Share agendas, documents, and feedback instantly.",
      icon: "👥",
      features: [
        "Real-time collaboration",
        "Document sharing",
        "Team feedback system",
        "Meeting templates"
      ]
    },
    {
      id: "automated-reminders",
      title: "Automated Reminders",
      description: "Smart notifications to keep everyone on track and prepared. Never miss an important meeting again.",
      icon: "🔔",
      features: [
        "Smart notifications",
        "Custom reminder settings",
        "Preparation checklists",
        "Follow-up automation"
      ]
    },
    {
      id: "custom-workflows",
      title: "Custom Workflows",
      description: "Create and automate your team's unique scheduling workflows. Tailor the system to your specific needs.",
      icon: "⚙️",
      features: [
        "Workflow automation",
        "Custom scheduling rules",
        "Team-specific settings",
        "Integration customization"
      ]
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
      id: "smart-scheduling",
      title: "Smart Scheduling",
      description: "AI-powered scheduling that learns from your team's preferences and patterns. Automatically find the best meeting times for everyone.",
      icon: "📅",
      features: [
        "AI-powered scheduling",
        "Team preference learning",
        "Automatic conflict resolution",
        "Smart time slot suggestions"
      ]
    },
    {
      id: "meeting-analytics",
      title: "Meeting Analytics",
      description: "Gain insights into your team's meeting patterns and optimize productivity with detailed analytics and reports.",
      icon: "📊",
      features: [
        "Meeting duration tracking",
        "Participation analytics",
        "Productivity insights",
        "Custom report generation"
      ]
    },
    {
      id: "calendar-integration",
      title: "Calendar Integration",
      description: "Seamlessly sync with Google Calendar, Outlook, and other popular platforms. Keep all your schedules in one place.",
      icon: "🔄",
      features: [
        "Multi-platform sync",
        "Real-time updates",
        "Cross-platform availability",
        "Automated conflict detection"
      ]
    },
    {
      id: "team-collaboration",
      title: "Team Collaboration",
      description: "Real-time collaboration tools for efficient meeting planning. Share agendas, documents, and feedback instantly.",
      icon: "👥",
      features: [
        "Real-time collaboration",
        "Document sharing",
        "Team feedback system",
        "Meeting templates"
      ]
    },
    {
      id: "automated-reminders",
      title: "Automated Reminders",
      description: "Smart notifications to keep everyone on track and prepared. Never miss an important meeting again.",
      icon: "🔔",
      features: [
        "Smart notifications",
        "Custom reminder settings",
        "Preparation checklists",
        "Follow-up automation"
      ]
    },
    {
      id: "custom-workflows",
      title: "Custom Workflows",
      description: "Create and automate your team's unique scheduling workflows. Tailor the system to your specific needs.",
      icon: "⚙️",
      features: [
        "Workflow automation",
        "Custom scheduling rules",
        "Team-specific settings",
        "Integration customization"
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
