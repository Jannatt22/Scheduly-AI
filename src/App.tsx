import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/products/ProductDetail';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import ProductsSection from './components/sections/ProductsSection';
import BenefitsSection from './components/sections/BenefitsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import Footer from './components/layout/Footer';

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
