import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  id: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, id, index }) => (
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

export default ProductCard; 