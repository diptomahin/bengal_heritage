import React, { useState, useEffect } from 'react';
import { Sparkles, Flower2, Star, Heart, Circle } from 'lucide-react';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
              style={{
                background: `radial-gradient(circle, ${['#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'][i % 4]} 0%, transparent 70%)`,
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-8 animate-bounce">
            <Sparkles className="inline-block text-amber-600" size={48} />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent animate-pulse">
            বাংলার ঐতিহ্য
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-orange-900">
            Heritage of Bengal
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 mb-12 max-w-2xl mx-auto">
            Discover the timeless beauty of rural Bangladeshi arts and crafts
          </p>
          <button
            onClick={() => navigate('/categories')}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <span className="relative z-10">Explore Collections</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Flower2 className="absolute text-pink-400 opacity-30 animate-spin-slow" style={{ top: '10%', left: '10%' }} size={40} />
          <Star className="absolute text-yellow-400 opacity-30 animate-pulse" style={{ top: '20%', right: '15%' }} size={35} />
          <Heart className="absolute text-red-400 opacity-30 animate-bounce" style={{ bottom: '20%', left: '15%' }} size={30} />
          <Circle className="absolute text-blue-400 opacity-30 animate-ping" style={{ bottom: '15%', right: '20%' }} size={25} />
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Heritage</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🧵', title: 'Handcrafted', desc: 'Every piece is lovingly made by skilled artisans' },
              { icon: '🌾', title: 'Traditional', desc: 'Preserving centuries-old techniques and patterns' },
              { icon: '🤝', title: 'Fair Trade', desc: 'Supporting rural communities directly' }
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="text-6xl mb-4 animate-bounce">{item.icon}</div>
                <h4 className="text-2xl font-semibold mb-3 text-orange-900">{item.title}</h4>
                <p className="text-amber-800">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;