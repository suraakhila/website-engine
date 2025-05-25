import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

export default function SuraAkhilaHome({ content, theme }) {
  const handleBookNow = (e) => {
    e.preventDefault();
    const bookingSection = document.getElementById('section-booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="section-hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 animate-slide-up backdrop-blur-md border border-white/20 shadow-[0_10px_60px_rgba(255,255,255,0.1)]"
      style={{
        backgroundImage: `url(${content.background_url})`,
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/70" />

      {/* Content container directly inside blurred section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto p-10 rounded-3xl">
        <div className="flex justify-center mb-4 text-yellow-400 animate-pulse">
          <Sparkles className="w-10 h-10" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500">
          {content.title || 'Experience True Luxury Beauty'}
        </h1>

        <p className="text-2xl md:text-3xl mb-10 text-white/90">
          {content.subtitle || 'Where elegance meets expertise. Discover the art of self-care.'}
        </p>

        <Button
          size="lg"
          className="rounded-full px-10 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          onClick={handleBookNow}
        >
          <Star className="mr-2 w-5 h-5" />
          {content.cta_text || 'Book Now'}
        </Button>
      </div>
    </section>
  );
}
