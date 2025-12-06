import React from "react";
import { Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter */}
        <div className="bg-linear-to-r from-amber-700 to-orange-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10 text-left w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-2">
              Join the Heritage Journey
            </h3>
            <p className="text-orange-100">
              Get updates on new collections and artisan stories.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-1/2 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-orange-200 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button className="p-4 bg-white text-orange-700 rounded-full hover:bg-orange-100 transition-colors">
              <Mail size={24} />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-stone-800 pb-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Collections</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-amber-500 cursor-pointer transition">
                Nakshi Kantha
              </li>
              <li className="hover:text-amber-500 cursor-pointer transition">
                Terracotta
              </li>
              <li className="hover:text-amber-500 cursor-pointer transition">
                Jute Crafts
              </li>
              <li className="hover:text-amber-500 cursor-pointer transition">
                Bamboo
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-amber-500 cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-amber-500 cursor-pointer transition">
                Artisans
              </li>
              <li className="hover:text-amber-500 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-white font-bold text-2xl mb-6">
              বাংলার ঐতিহ্য
            </h4>
            <p className="mb-6 max-w-sm text-sm">
              Bringing the soul of Bangladesh to your doorstep. Authentic,
              ethical, and timeless.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all cursor-pointer">
                <Twitter size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 text-center text-xs text-stone-500">
          © 2024 Heritage of Bengal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
