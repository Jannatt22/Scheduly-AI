import React from 'react';

const testimonials = [
  {
    quote: "The AI Receptionist has revolutionized our practice. It handles appointment scheduling 24/7, reduces no-shows with automated reminders, and our patients love how easy it is to use. We've seen a 30% increase in booking efficiency.",
    author: "Dr. Emily Chen",
    role: "Dental Clinic Owner"
  },
  {
    quote: "Our customer support has been transformed by the AI Chatbot. It handles over 80% of routine inquiries instantly, provides 24/7 support, and has improved our customer satisfaction scores by 40%. The multilingual support is a game-changer.",
    author: "Mark Thompson",
    role: "E-commerce Director"
  },
  {
    quote: "The AI Lead Generator has completely transformed our sales process. It not only identifies potential leads but qualifies them with incredible accuracy. Our conversion rates have increased by 45%, and the automated nurturing sequences save our team countless hours.",
    author: "Lisa Rodriguez",
    role: "Sales Manager"
  }
];

const TestimonialsSection = () => (
  <section className="py-16 px-8 bg-gray-50 text-center" id="testimonials">
    <h2 className="text-4xl text-text-main mb-4">What Our Clients Say</h2>
    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
      Hear from businesses that have transformed their operations with Effibotic
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div className="flex-grow">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
              "{testimonial.quote}"
            </p>
            <div className="mt-6">
              <h4 className="text-xl text-text-main font-medium">{testimonial.author}</h4>
              <p className="text-gray-600 mt-1">{testimonial.role}</p>
            </div>
          </div>
          <div className="mt-4 text-2xl text-yellow-400 tracking-wider">
            ★★★★★
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection; 