"use client";
import React from "react";

export default function MySalonAbout({ content }) {
  return (
    <section
      id="section-about"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fff1f5 0%, #ffe7f0 40%, #ffdce6 80%)",
      }}
    >
      {/* Decorative SVG Pattern Overlay */}
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        viewBox="0 0 800 800"
      >
        <defs>
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="20"
              cy="20"
              r="6"
              stroke="#ffc4d6"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="800" height="800" fill="url(#pattern-circles)" />
      </svg>

      {/* Glow behind content */}
      <div className="absolute inset-0 -z-10 rounded-3xl filter blur-2xl opacity-15 bg-pink-200" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20 relative z-10">
        {content.image_url && (
          <div className="w-full md:w-1/2 rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <img
              src={content.image_url}
              alt="About our salon"
              className="w-full h-full object-cover rounded-3xl"
              loading="lazy"
              draggable={false}
            />
          </div>
        )}

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-pink-900 drop-shadow-md">
            {content.title || "Our Story"}
          </h2>

          <h3 className="text-3xl font-semibold mb-6 text-pink-700 uppercase tracking-widest drop-shadow-sm">
            {content.subtitle || "Vision & Values"}
          </h3>

          <p className="text-lg leading-relaxed text-pink-800 mb-12 max-w-xl mx-auto md:mx-0 tracking-wide font-serif">
            {content.description ||
              "At My Salon, we believe beauty is an experience. Our journey began with a passion for elegance and a commitment to excellence. We blend artistry, innovation, and care to create a sanctuary for self-renewal."}
          </p>

          <button
            className="inline-block bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-bold rounded-full px-10 py-4 shadow-md transition-transform duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-40"
            aria-label="Learn more about us"
            onClick={() => {
              const el = document.getElementById("section-services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover Services
          </button>
        </div>
      </div>
    </section>
  );
}
