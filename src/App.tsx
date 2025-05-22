import React from 'react';
import './App.css';

// Components for each product section
const PDFClaimAutomation = () => (
  <section className="product-section">
    <h2>PDF Claim Automation</h2>
    <p>Streamline your dental claims processing with AI-powered automation.</p>
  </section>
);

const VoiceAgentVerification = () => (
  <section className="product-section">
    <h2>Voice Agent Verification</h2>
    <p>Advanced voice recognition technology for secure agent authentication.</p>
  </section>
);

const AIReceptionist = () => (
  <section className="product-section">
    <h2>AI Receptionist</h2>
    <p>24/7 intelligent patient scheduling and inquiry management.</p>
  </section>
);

const AutomatedRecallCalls = () => (
  <section className="product-section">
    <h2>Automated Recall Calls</h2>
    <p>Smart patient follow-up system for improved appointment adherence.</p>
  </section>
);

const Header = () => (
  <header className="app-header">
    <h1>DentalAI Solutions</h1>
    <p>Transforming Dental Practices with Artificial Intelligence</p>
  </header>
);

const ContactSection = () => (
  <section className="contact-section">
    <h2>Get Started</h2>
    <button className="demo-button">Book Demo</button>
    <div className="contact-info">
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
  </section>
);

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <PDFClaimAutomation />
        <VoiceAgentVerification />
        <AIReceptionist />
        <AutomatedRecallCalls />
      </main>
      <ContactSection />
    </div>
  );
}

export default App;
