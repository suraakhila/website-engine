// Import all section components
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import About1 from './About1';
import Services1 from './Services1';
import Testimonial1 from './Testimonial1';
import FAQ1 from './FAQ1';
import Contact1 from './Contact1';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';
import Features1 from './Features1';
import Features2 from './Features2';
import Pricing1 from './Pricing1';
import Pricing2 from './Pricing2';
import CTA1 from './CTA1';
import CTA2 from './CTA2';
import Team1 from './Team1';
import Team2 from './Team2';
import MySalonHome from './SuraAkhilaHome';
import MySalonAbout from './SuraAkhilaAbout';
import MySalonServices from './SuraAkhilaServices';
import MySalonPricing from './SuraAkhilaPricing';
import MySalonReviews from './SuraAkhilaReviews';
import MySalonContact from './SuraAkhilaContact';
import MySalonFooter from './SuraAkhilaFooter';
import MySalonNavbar from './SuraAkhilaNavbar';
import MySalonBooking from './SuraAkhilaBooking';

// Map component keys to their respective React components
export const componentMap = {
  // Headers
  header_1: Header1,
  header_2: Header2,
  header_3: Header3,
  // Heroes
  hero_1: Hero1,
  hero_2: Hero2,
  // About
  about_1: About1,
  // Services
  services_1: Services1,
  // Testimonials
  testimonial_1: Testimonial1,
  // FAQ
  faq_1: FAQ1,
  // Contact
  contact_1: Contact1,
  // Footers
  footer_1: Footer1,
  footer_2: Footer2,
  // Gallery
  gallery_1: Gallery1,
  gallery_2: Gallery2,
  // Features
  features_1: Features1, 
  features_2: Features2,
  // Pricing
  pricing_1: Pricing1,
  pricing_2: Pricing2,
  // CTA
  cta_1: CTA1,
  cta_2: CTA2,
  // Team
  team_1: Team1,
  team_2: Team2,
  suraakhila_home_1: MySalonHome,
  suraakhila_about_1: MySalonAbout,
  suraakhila_services_1: MySalonServices,
  suraakhila_pricing_1: MySalonPricing,
  suraakhila_reviews_1: MySalonReviews,
  suraakhila_contact_1: MySalonContact,
  suraakhila_footer_1: MySalonFooter,
  suraakhila_navbar_1: MySalonNavbar,
  suraakhila_booking_1: MySalonBooking
};

// Helper function to get component by type and variant
export const getComponent = (type, variant) => {
  const key = `${type}_${variant}`;
  return componentMap[key] || null;
};

export {
  MySalonHome,
  MySalonAbout,
  MySalonServices,
  MySalonPricing,
  MySalonReviews,
  MySalonContact,
  MySalonFooter,
  MySalonNavbar,
  MySalonBooking
}; 