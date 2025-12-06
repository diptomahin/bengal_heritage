import React, { useState, useEffect } from "react";
import { Sparkles, Flower2, Heart, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";

const DetailsPage = ({ categories }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();
  const { categoryId, itemId } = useParams();

  const selectedCategory = categories.find((cat) => cat.id === categoryId);
  const selectedItem = selectedCategory?.items.find(
    (item) => item.id === parseInt(itemId)
  );

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!selectedCategory || !selectedItem) {
    return <div className="p-10 text-center">Item not found</div>;
  }

  return (
    <div
      className={`min-h-screen bg-stone-50 py-20 px-4 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <button
          onClick={() => navigate(`/collection/${categoryId}`)}
          className="mb-8 inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft size={20} /> Back to {selectedCategory.name}
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 md:h-[600px] overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-amber-800 shadow-sm">
                {selectedCategory.name}
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">
                  {selectedItem.name}
                </h2>
                <div className="text-3xl font-bold text-orange-600">
                  {selectedItem.price}
                </div>
              </div>

              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                {selectedItem.description}
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Sparkles className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-amber-800">
                      Artisan
                    </span>
                    <span className="text-lg font-semibold text-stone-800">
                      {selectedItem.artisan}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Flower2 className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-orange-800">
                      Origin
                    </span>
                    <span className="text-lg font-semibold text-stone-800">
                      {selectedItem.village}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-rose-50 rounded-xl border border-rose-100">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Heart className="text-rose-600" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-rose-800">
                      Specifications
                    </span>
                    <span className="text-sm font-semibold text-stone-800">
                      {selectedItem.details}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-stone-900 text-white font-bold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg">
                  Add to Cart
                </button>
                <button className="px-6 py-4 border-2 border-stone-200 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-colors">
                  <Heart size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
