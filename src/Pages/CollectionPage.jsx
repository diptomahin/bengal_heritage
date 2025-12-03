import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';


const CollectionPage = ({ categories }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();
  const { categoryId } = useParams();
  
  const selectedCategory = categories.find(cat => cat.id === categoryId);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-20 px-4 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-amber-900">{selectedCategory.name}</h2>
          <p className="text-xl text-amber-700">{selectedCategory.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory.items.map((item, i) => (
            <div
              key={item.id}
              onClick={() => navigate(`/details/${categoryId}/${item.id}`)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                animation: `fadeInScale 0.5s ease-out ${i * 0.1}s both`
              }}
            >
              <div className="relative h-64 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center overflow-hidden">
                <div className="text-8xl transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                  {selectedCategory.image}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-amber-900 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-amber-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                  <span className="text-amber-700 group-hover:text-orange-600 font-semibold">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-x-4">
          <button
            onClick={() => navigate('/categories')}
            className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
          >
            ← Back to Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;