import React from 'react';

const DEFAULT_REVIEWS = [
  { id: "review-4", title: "Elena M.", subtitle: "Artist", description: "A truly pampering experience. The staff made me feel special from start to finish!", image_url: "/reviews/elena.jpg", rating: 5 },
  { id: "review-5", title: "Ravi K.", subtitle: "Engineer", description: "Impeccable service and a beautiful ambiance. Highly recommended!", image_url: "/reviews/ravi.jpg", rating: 5 },
  { id: "review-6", title: "Lina P.", subtitle: "Blogger", description: "The best salon in town for luxury treatments. I keep coming back!", image_url: "/reviews/lina.jpg", rating: 5 },
];

export default function SuraAkhilaReviews({ content, items }) {
  const [showAll, setShowAll] = React.useState(false);
  const allReviews = items && items.length ? items : DEFAULT_REVIEWS;
  const visibleReviews = showAll ? allReviews : allReviews.slice(0, 3);
  return (
    <section id="section-reviews" className="reviews-section py-20 bg-gradient-to-br from-pink-50 via-yellow-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="reviews-title text-4xl md:text-5xl font-bold mb-4 text-center text-neutral-900 dark:text-white">
          {content?.title || 'Client Testimonials'}
        </h2>
        <p className="reviews-subtitle text-xl text-neutral-600 dark:text-neutral-300 mb-10 text-center">
          {content?.subtitle || 'What our clients say about us.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {visibleReviews.map((review, idx) => (
            <div key={review.id || idx} className="review-card bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border border-pink-200 dark:border-pink-800 hover:shadow-pink-400/40 hover:scale-[1.03] transition-transform duration-300">
              <h3 className="review-title text-lg font-semibold mb-1 text-pink-600">{review.title}</h3>
              <p className="review-description text-neutral-700 dark:text-neutral-200 mb-4 italic">"{review.description}"</p>
              {review.rating && (
                <div className="review-rating flex items-center justify-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl drop-shadow-md">★</span>
                  ))}
                </div>
              )}
              <span className="review-subtitle text-neutral-500 text-sm tracking-wide">{review.subtitle}</span>
            </div>
          ))}
        </div>
        {!showAll && allReviews.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              className="show-more-btn px-10 py-3 rounded-full border-pink-500 text-pink-700 font-semibold border bg-white dark:bg-neutral-900 hover:bg-pink-100 dark:hover:bg-pink-900 transition shadow-lg hover:shadow-pink-400/50"
              onClick={() => setShowAll(true)}
            >
              Show More Reviews
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .reviews-section {
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.02em;
        }
        .reviews-title {
          background: linear-gradient(90deg, #ec4899, #f43f5e, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 3px rgba(244, 63, 94, 0.5));
        }
        .reviews-subtitle {
          font-weight: 500;
          max-width: 36rem;
          margin-left: auto;
          margin-right: auto;
          letter-spacing: 0.03em;
        }
        .review-card {
          box-shadow: 0 8px 16px rgba(244, 63, 94, 0.15), 0 4px 8px rgba(251, 191, 36, 0.12);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .review-card:hover {
          box-shadow: 0 12px 24px rgba(244, 63, 94, 0.3), 0 8px 16px rgba(251, 191, 36, 0.2);
          transform: translateY(-6px) scale(1.03);
          border-color: #f43f5e;
          background: linear-gradient(145deg, #fff0f5, #ffe0eb);
        }
        .review-title {
          letter-spacing: 0.03em;
          filter: drop-shadow(0 1px 2px rgba(236, 72, 153, 0.5));
        }
        .review-description {
          max-width: 20rem;
        }
        .review-rating span {
          text-shadow: 0 1px 2px rgba(250, 204, 21, 0.8);
        }
        .review-subtitle {
          letter-spacing: 0.04em;
          font-style: normal;
          opacity: 0.8;
        }
        .show-more-btn {
          box-shadow: 0 4px 12px rgba(244, 63, 94, 0.3);
          letter-spacing: 0.04em;
        }
        .show-more-btn:hover {
          box-shadow: 0 6px 16px rgba(244, 63, 94, 0.5);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
