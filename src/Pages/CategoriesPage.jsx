import React, { useState, useEffect } from "react";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const collections = [
  {
    id: "nakshi-kantha",
    name: "Nakshi Kantha",
    description: "Traditional embroidered quilts with intricate patterns",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9PvmRcXxc9UyfOX455YpRgm8JO69gOkgkw&s",
    color: "from-rose-500 to-red-600",
  },
  {
    id: "pottery",
    name: "Terracotta Pottery",
    description: "Handcrafted clay pottery with ancient designs",
    image:
      "https://media.istockphoto.com/id/2150687979/photo/different-pottery-products-in-a-traditional-fair-in-chittagong-bangladesh-called-jobbarer.jpg?s=612x612&w=0&k=20&c=3U1Uh25EphrwMrbl1NwffuFHjsIWHqIpu6poBNausIc=",
    color: "from-orange-500 to-amber-700",
  },
  {
    id: "jute",
    name: "Jute Crafts",
    description: "Eco-friendly products from golden fiber",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XDnFplwG7_dnm0etGJ2jeG3kuTNqVgStbw&s",
    color: "from-yellow-600 to-amber-600",
  },
  {
    id: "bamboo",
    name: "Bamboo Crafts",
    description: "Sustainable bamboo art and utilities",
    image:
      "https://www.shutterstock.com/image-photo/traditional-market-vietnam-goods-made-600nw-2539097741.jpg",
    color: "from-emerald-500 to-green-700",
  },
];

const CategoriesPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-stone-50 py-20 px-4 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
          Explore Collections
        </h2>
        <p className="text-center text-amber-700 mb-16 max-w-2xl mx-auto">
          Handpicked heritage crafts designed for the modern home.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((category, i) => (
            <div
              key={category.id}
              onClick={() => navigate(`/collection/${category.id}`)}
              className="group relative h-80 rounded-3xl shadow-lg cursor-pointer overflow-hidden"
              style={{
                animation: `slideInUp 0.6s ease-out ${i * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {category.description}
                  </p>

                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 group-hover:bg-white group-hover:text-amber-900 transition-all duration-300`}
                  >
                    <span className="font-semibold">View Products</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              <Sparkles
                className="absolute top-6 right-6 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"
                size={24}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 text-amber-900 hover:text-orange-600 font-semibold transition-colors"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
