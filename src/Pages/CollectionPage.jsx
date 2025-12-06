import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react"; // Make sure to import icon

const CollectionPage = ({ categories }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const selectedCategory = categories.find((cat) => cat.id === categoryId);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!selectedCategory) {
    return <div className="p-10 text-center">Category not found</div>;
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20 px-4 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-amber-900">
            {selectedCategory.name}
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            {selectedCategory.description}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory.items.map((item, i) => (
            <div
              key={item.id}
              onClick={() => navigate(`/details/${categoryId}/${item.id}`)}
              className="group bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                animation: `fadeInScale 0.5s ease-out ${i * 0.1}s both`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-amber-900 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-stone-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                  <span className="text-2xl font-bold text-orange-600">
                    {item.price}
                  </span>
                  <span className="text-sm font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full group-hover:bg-orange-600 group-hover:text-white transition-all">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-amber-200 text-amber-900 rounded-full hover:bg-amber-50 transition-colors shadow-sm"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
