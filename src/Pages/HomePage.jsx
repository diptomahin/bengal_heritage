/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Flower2,
  Star,
  Heart,
  Circle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";
import working from "../assets/aa.webp";

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const collections = [
    {
      title: "Nakshi Kantha",
      desc: "Traditional embroidered quilts with intricate patterns",
      path: "/collection/nakshi-kantha",
      icon: "🧵",
      color: "bg-red-50 hover:bg-red-100",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9PvmRcXxc9UyfOX455YpRgm8JO69gOkgkw&s",
    },
    {
      title: "Terracotta Pottery",
      desc: "Handcrafted clay pottery with ancient designs",
      path: "/collection/pottery",
      icon: "🏺",
      color: "bg-orange-50 hover:bg-orange-100",
      img: "https://media.istockphoto.com/id/2150687979/photo/different-pottery-products-in-a-traditional-fair-in-chittagong-bangladesh-called-jobbarer.jpg?s=612x612&w=0&k=20&c=3U1Uh25EphrwMrbl1NwffuFHjsIWHqIpu6poBNausIc=",
    },
    {
      title: "Jute Crafts",
      desc: "Eco-friendly products from golden fiber",
      path: "/collection/jute",
      icon: "🧺",
      color: "bg-amber-50 hover:bg-amber-100",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XDnFplwG7_dnm0etGJ2jeG3kuTNqVgStbw&s",
    },
    {
      title: "Bamboo Crafts",
      desc: "Sustainable bamboo art and utilities",
      path: "/collection/bamboo",
      icon: "🎋",
      color: "bg-emerald-50 hover:bg-emerald-100",
      img: "https://www.shutterstock.com/image-photo/traditional-market-vietnam-goods-made-600nw-2539097741.jpg",
    },
  ];

  return (
    <div
      className={`transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
              style={{
                background: `radial-gradient(circle, ${
                  ["#f59e0b", "#ef4444", "#ec4899", "#8b5cf6"][i % 4]
                } 0%, transparent 70%)`,
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-8 animate-bounce">
            <Sparkles className="inline-block text-amber-600" size={48} />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold py-6 bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent animate-pulse">
            বাংলার ঐতিহ্য
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-orange-900">
            Heritage of Bengal
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 mb-12 max-w-2xl mx-auto">
            Discover the timeless beauty of rural Bangladeshi arts and crafts
          </p>
          <button
            onClick={() =>
              document
                .getElementById("collections")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Collections <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>

        {/* Decorative Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Flower2
            className="absolute text-pink-400 opacity-30 animate-spin-slow"
            style={{ top: "15%", left: "10%" }}
            size={40}
          />
          <Star
            className="absolute text-yellow-400 opacity-30 animate-pulse"
            style={{ top: "25%", right: "15%" }}
            size={35}
          />
          <Heart
            className="absolute text-red-400 opacity-30 animate-bounce"
            style={{ bottom: "20%", left: "15%" }}
            size={30}
          />
          <Circle
            className="absolute text-blue-400 opacity-30 animate-ping"
            style={{ bottom: "15%", right: "20%" }}
            size={25}
          />
        </div>
      </div>

      {/* --- SECTION 1: UPDATED COLLECTIONS GRID --- */}
      <div id="collections" className="py-24 px-4 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-amber-900">
            Curated Collections
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.path)}
                className={`group cursor-pointer rounded-2xl p-6 ${item.color} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-black/5`}
              >
                <div className="h-48 overflow-hidden rounded-xl mb-6 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <span className="inline-flex items-center text-amber-700 font-semibold text-sm group-hover:gap-2 transition-all">
                  View Collection <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NEW SECTION 2: THE JOURNEY (PROCESS) --- */}
      <div className="py-24 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
              How it's Made
            </span>
            <h3 className="text-4xl font-bold text-stone-800 mt-2">
              From Village to You
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-stone-300 z-0"></div>

            {[
              {
                step: "01",
                title: "Sourcing",
                text: "Harvesting natural materials like Jute and Clay directly from the source.",
              },
              {
                step: "02",
                title: "Crafting",
                text: "Artisans spend days manually weaving, molding, and stitching every detail.",
              },
              {
                step: "03",
                title: "Delivering",
                text: "Quality checked and packaged with care, sent from Bengal to your doorstep.",
              },
            ].map((phase, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white border-4 border-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-amber-600 shadow-lg">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-3">
                  {phase.title}
                </h4>
                <p className="text-stone-600 px-4">{phase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NEW SECTION 3: MASTERPIECE OF THE MONTH --- */}
      <div className="py-24 px-4 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl transform rotate-3 opacity-50 group-hover:rotate-6 transition-transform"></div>
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop"
              alt="Golden Harvest Vase"
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              LIMITED EDITION
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-amber-50">
              Golden Harvest Vase
            </h3>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              This month's featured masterpiece is a hand-painted terracotta
              vase adorned with liquid gold leaf accents. Created by the master
              potter Rahim Uddin from Bogra.
            </p>
            <div className="flex items-center gap-6">
              <button className="px-8 py-4 bg-white text-stone-900 font-bold rounded-full hover:bg-amber-50 transition-colors">
                View Details
              </button>
              <span className="text-2xl text-amber-500 font-serif italic">
                Only 5 left
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- ARTISAN SPOTLIGHT --- */}
      <div className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-left">
            <h3 className="text-amber-600 font-bold tracking-widest uppercase mb-2">
              The Story
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              Meet the Hands
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Behind every intricate stitch of Nakshi Kantha and every curve of
              our Terracotta lies the story of a rural artisan. We work directly
              with over 500 families in rural Bangladesh, ensuring fair wages
              and preserving heritage that is fading away.
            </p>
            <button className="px-8 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-300">
              Read Our Mission
            </button>
          </div>
          <div className="w-full md:w-1/2 relative order-1 md:order-2">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full z-0 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-100 rounded-full z-0" />
            <img
              src={working}
              alt="Artisan working"
              className="relative z-10 rounded-2xl shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
