import React, { useState, useEffect } from "react";
import {
  Scissors,
  Palette,
  Flower2,
  Star,
  Heart,
  Sparkles,
  Circle,
} from "lucide-react";
import FloatingIcon from "../Components/FloatingIcon";
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
    return <div>Item not found</div>;
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-20 px-4 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      } relative overflow-hidden`}
    >
      {/* Floating Icons Background */}
      <FloatingIcon Icon={Scissors} delay={0} duration={4} x={10} y={15} />
      <FloatingIcon Icon={Palette} delay={0.5} duration={5} x={85} y={20} />
      <FloatingIcon Icon={Flower2} delay={1} duration={6} x={15} y={70} />
      <FloatingIcon Icon={Star} delay={1.5} duration={4.5} x={80} y={75} />
      <FloatingIcon Icon={Heart} delay={2} duration={5.5} x={50} y={10} />
      <FloatingIcon Icon={Sparkles} delay={2.5} duration={6} x={90} y={50} />
      <FloatingIcon Icon={Circle} delay={3} duration={5} x={20} y={40} />
      <FloatingIcon Icon={Scissors} delay={0.3} duration={5.5} x={70} y={45} />
      <FloatingIcon Icon={Flower2} delay={1.8} duration={4.8} x={40} y={80} />
      <FloatingIcon Icon={Star} delay={2.2} duration={5.2} x={60} y={25} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 md:h-auto bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center">
              <div className="text-9xl animate-pulse">
                {selectedCategory.image}
              </div>

              {/* Animated corners */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-white opacity-50 animate-pulse" />
              <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-white opacity-50 animate-pulse" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-white opacity-50 animate-pulse" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-white opacity-50 animate-pulse" />
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
                  {selectedCategory.name}
                </span>
                <h2 className="text-4xl font-bold mb-4 text-amber-900 animate-fade-in">
                  {selectedItem.name}
                </h2>
                <div className="text-3xl font-bold text-orange-600 mb-6">
                  {selectedItem.price}
                </div>
              </div>

              <p className="text-amber-800 mb-6 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                  <Sparkles className="text-amber-600" size={20} />
                  <div>
                    <span className="font-semibold text-amber-900">
                      Artisan:
                    </span>
                    <span className="ml-2 text-amber-700">
                      {selectedItem.artisan}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Flower2 className="text-orange-600" size={20} />
                  <div>
                    <span className="font-semibold text-amber-900">
                      Village:
                    </span>
                    <span className="ml-2 text-amber-700">
                      {selectedItem.village}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <Heart className="text-red-600" size={20} />
                  <div>
                    <span className="font-semibold text-amber-900">
                      Details:
                    </span>
                    <span className="ml-2 text-amber-700 text-sm">
                      {selectedItem.details}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 space-x-4">
          <button
            onClick={() => navigate(`/collection/${categoryId}`)}
            className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors shadow-lg"
          >
            ← Back to Collection
          </button>
          <button
            onClick={() => navigate("/categories")}
            className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors shadow-lg"
          >
            All Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
