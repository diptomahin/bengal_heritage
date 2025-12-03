import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

const CategoriesPage = ({ categories }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20 px-4 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-amber-900 animate-fade-in">
          Explore Our Collections
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category, i) => (
            <div
              key={category.id}
              onClick={() => navigate(`/collection/${category.id}`)}
              className="group relative p-8 bg-white rounded-3xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{
                animation: `slideInUp 0.6s ease-out ${i * 0.1}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="relative z-10">
                <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {category.image}
                </div>
                <h3 className="text-3xl font-bold mb-3 text-amber-900 group-hover:text-white transition-colors">
                  {category.name}
                </h3>
                <p className="text-amber-700 group-hover:text-amber-100 transition-colors">
                  {category.description}
                </p>
                <div className="mt-6 text-orange-600 group-hover:text-white font-semibold transition-colors">
                  View Collection →
                </div>
              </div>

              <Sparkles className="absolute top-4 right-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" size={24} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
