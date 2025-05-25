import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const DEFAULT_SERVICES = [
  {
    id: 1,
    title: "Luxury Facial Glow",
    description: "Deep cleansing and hydrating facial to give your skin a radiant glow.",
    price: "₹1500",
    image_url: "https://via.placeholder.com/300x200?text=Facial+Glow",
  },
  {
    id: 2,
    title: "Bridal Hair Styling",
    description: "Elegant and long-lasting bridal hairstyles by our experts.",
    price: "₹2500",
    image_url: "https://via.placeholder.com/300x200?text=Bridal+Hair",
  },
  {
    id: 3,
    title: "Full Body Massage",
    description: "Relax your body and soul with our soothing full-body massage.",
    price: "₹2000",
    image_url: "https://via.placeholder.com/300x200?text=Body+Massage",
  },
  {
    id: 4,
    title: "Men's Hair Spa",
    description: "Revitalize your hair with our nourishing men's hair spa treatment.",
    price: "₹1200",
    image_url: "https://via.placeholder.com/300x200?text=Men+Hair+Spa",
  },
];

const SERVICE_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "facial", label: "Facials" },
  { value: "hair", label: "Hair" },
  { value: "body", label: "Body" },
  { value: "bridal", label: "Bridal" },
  { value: "men", label: "Men" },
];

export default function SuraAkhilaServices({ content, items }) {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("all");

  const allServices = items && items.length ? items : DEFAULT_SERVICES;

  const servicesWithCategory = allServices.map((s) => ({
    ...s,
    category: s.title.toLowerCase().includes("facial")
      ? "facial"
      : s.title.toLowerCase().includes("hair")
      ? "hair"
      : s.title.toLowerCase().includes("body")
      ? "body"
      : s.title.toLowerCase().includes("bridal")
      ? "bridal"
      : s.title.toLowerCase().includes("men")
      ? "men"
      : "other",
  }));

  const filteredServices =
    filter === "all"
      ? servicesWithCategory
      : servicesWithCategory.filter((s) => s.category === filter);

  const visibleServices = showAll ? filteredServices : filteredServices.slice(0, 3);

  const handleBook = (e) => {
    e.preventDefault();
    const bookingSection = document.getElementById("section-booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="section-services"
      className="py-24 px-6 bg-gradient-to-tr from-[#ffd3e0] via-[#fff2dc] to-[#fffaf3]"
      style={{
        fontFamily: "'Poppins', sans-serif",
        letterSpacing: "0.02em",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-gradient-pink drop-shadow-lg">
          {content?.title || "Our Premium Services"}
        </h2>
        <p className="text-xl text-center text-pink-900 mb-16 max-w-4xl mx-auto font-medium tracking-wide">
          {content?.subtitle || "Indulge in our exclusive signature treatments designed just for you."}
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {SERVICE_CATEGORIES.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "default" : "outline"}
              className={`rounded-full px-8 py-3 font-semibold tracking-wide border-pink-500 transition-all duration-300 shadow-md ${
                filter === cat.value
                  ? "bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 text-white shadow-xl"
                  : "bg-white text-pink-600 dark:bg-neutral-900 hover:bg-pink-600 hover:text-white"
              }`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {visibleServices.map((service, idx) => (
            <div key={service.id || idx} className="premium-card p-8 flex flex-col items-center text-center">
              {service.image_url && (
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="h-48 w-full mb-6 object-cover rounded-2xl border-4 border-pink-200"
                />
              )}
              <h3 className="text-2xl font-extrabold mb-4 text-pink-700 drop-shadow-md tracking-wide">
                {service.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-400 mb-6 font-medium px-4 leading-relaxed max-w-[280px]">
                {service.description}
              </p>
              <p className="mb-6 font-semibold text-2xl text-pink-700 dark:text-pink-400 tracking-wide">
                {service.price}
              </p>
              <Button
                className="rounded-full px-12 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-110 hover:brightness-125 transition-transform duration-300"
                onClick={handleBook}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredServices.length > 3 && (
          <div className="flex justify-center mt-20">
            <Button
              variant="outline"
              className="px-12 py-4 rounded-full border-pink-600 text-pink-700 font-semibold shadow-lg hover:bg-pink-700 hover:text-white transition-all duration-300"
              onClick={() => setShowAll(true)}
            >
              Show More Services
            </Button>
          </div>
        )}
      </div>

      {/* Premium Styles */}
      <style jsx>{`
        .text-gradient-pink {
          background: linear-gradient(90deg, #f43f5e, #facc15, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .premium-card {
          background: linear-gradient(145deg, #fffaf5, #ffeef5);
          border-radius: 2rem;
          border: 1px solid rgba(244, 63, 94, 0.1);
          transition: all 0.4s ease;
        }

        .premium-card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow:
            0 25px 40px rgba(244, 63, 94, 0.2),
            0 10px 20px rgba(250, 204, 21, 0.15),
            0 4px 10px rgba(236, 72, 153, 0.2);
        }
      `}</style>
    </section>
  );
}
