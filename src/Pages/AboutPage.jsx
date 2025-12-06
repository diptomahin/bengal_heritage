import React, { useState, useEffect } from "react";
import { Heart, Users, Globe, Award, ArrowRight, Quote } from "lucide-react";
import { useNavigate } from "react-router";

const AboutPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-stone-50 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950">
        {/* Abstract Background Pattern (Optional - adds texture without an image) */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-10">
          <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Established 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Weaving the Soul <br /> of{" "}
            <span className="text-amber-500">Bengal</span>
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            More than a marketplace. We are a movement to preserve the fading
            arts of rural Bangladesh and empower the hands that create them.
          </p>
        </div>
      </div>

      {/* --- THE MISSION --- */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full z-0" />
            <img
              src="https://dialogue.earth/content/uploads/2022/11/20220730_Bangladesh-modern-nakshi-kantha-mimics-old-art_NazmunNaherShishir_TheThirdPole.jpg"
              alt="Artisan Hands"
              className="relative z-10 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block border border-stone-100">
              <p className="text-stone-600 italic font-serif">
                "Every stitch tells a story of our ancestors."
              </p>
              <p className="text-orange-600 font-bold mt-2 text-sm">
                - Rahima, Artisan
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Bridging the Gap Between <br />{" "}
              <span className="text-orange-600">Heritage</span> and{" "}
              <span className="text-amber-600">Home</span>
            </h2>
            <p className="text-stone-600 mb-6 text-lg leading-relaxed">
              It started with a trip to a small village in Jessore. We saw
              distinct, breathtaking art—Nakshi Kantha quilts—being stitched by
              women in their courtyards. Yet, these masterpieces were
              disappearing because the artisans couldn't find a market.
            </p>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed">
              **Heritage of Bengal** was born to change that. We curate
              authentic, handcrafted goods directly from rural artisans,
              ensuring they receive fair wages while you receive a piece of
              history.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Users className="text-amber-700" size={20} />
                </div>
                <span className="font-semibold text-stone-800">
                  500+ Artisans
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Globe className="text-orange-700" size={20} />
                </div>
                <span className="font-semibold text-stone-800">
                  12 Villages
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- OUR VALUES --- */}
      <div className="py-24 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why We Exist</h2>
            <p className="text-stone-400">
              Our core pillars that guide every decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={40} />,
                title: "Ethical & Fair",
                desc: "We cut out the middlemen. 100% of the profits go directly to the artisan communities, helping them build better lives.",
              },
              {
                icon: <Award size={40} />,
                title: "Authentic Quality",
                desc: "No mass production. Every item is handmade using techniques passed down for generations. Imperfectly perfect.",
              },
              {
                icon: <Globe size={40} />,
                title: "Sustainable Earth",
                desc: "We prioritize natural materials like Jute, Clay, and Cotton. Our packaging is plastic-free and biodegradable.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-stone-800 p-8 rounded-2xl hover:bg-stone-700 transition-colors border border-stone-700"
              >
                <div className="text-amber-500 mb-6">{val.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{val.title}</h3>
                <p className="text-stone-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FOUNDER'S NOTE / QUOTE --- */}
      <div className="py-24 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <Quote
            className="text-amber-300 mx-auto mb-6 transform rotate-180"
            size={60}
          />
          <h3 className="text-3xl md:text-5xl font-serif text-amber-900 leading-snug mb-8">
            "In a world of fast fashion and machines, we are choosing to slow
            down. To honor the hands that create, and the earth that provides."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
              alt="Founder"
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="text-left">
              <div className="font-bold text-stone-900">John Doe</div>
              <div className="text-sm text-amber-700">
                Founder, Heritage of Bengal
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CALL TO ACTION --- */}
      <div className="py-24 px-4 bg-white text-center">
        <h2 className="text-4xl font-bold text-stone-900 mb-6">
          Be Part of the Story
        </h2>
        <p className="text-stone-600 mb-8 max-w-xl mx-auto">
          Every purchase you make helps sustain a family in rural Bangladesh.
          Explore our collection and bring home a piece of history.
        </p>
        <button
          onClick={() => navigate("/categories")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg"
        >
          Browse Collections <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
