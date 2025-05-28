import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getClientSingleton } from '@/lib/supabase/client';

const QUICK_LINKS = [
  { label: 'FAQs', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'WhatsApp', href: 'https://wa.me/12345678901' },
  { label: 'Facebook', href: 'https://facebook.com/' },
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
];

export default function MySalonFooter({ content }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const supabase = getClientSingleton();
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);
      if (error) {
        setErrorMsg(error.message || 'Error inserting subscription');
        setStatus('error');
      } else {
        setStatus('success');
        setEmail('');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Unknown error');
      setStatus('error');
    }
  };

  return (
    <footer className="w-full bg-white/95 dark:bg-neutral-900/95 rounded-t-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.08)] px-6 md:px-12 py-12 border-t border-pink-100 dark:border-neutral-800 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Quick Links */}
        <div className="flex-1 min-w-[250px]">
          <h5 className="font-extrabold text-pink-600 text-lg mb-4 tracking-wide">QUICK LINKS</h5>
          <ul className="grid grid-cols-2 gap-3">
            {QUICK_LINKS.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-200 font-medium hover:underline px-3 py-1 inline-block rounded-lg bg-pink-50 dark:bg-neutral-800 hover:bg-pink-100 dark:hover:bg-pink-900 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[250px] px-3 py-2">
          <h5 className="font-extrabold text-pink-600 text-lg mb-4 tracking-wide">CONTACT</h5>
          <p className="text-neutral-700 dark:text-neutral-200 mb-3">
            Tel: <span className="font-semibold">{content?.phone || '+15408917222'}</span>
          </p>
          <p className="text-neutral-700 dark:text-neutral-200 mb-3">
            Email: <span className="font-semibold">{content?.email || 'mysalon@gmail.com'}</span>
          </p>
          <p className="text-neutral-700 dark:text-neutral-200 mb-0">
            Address: <span className="font-semibold">{content?.address || 'Fredericksburg, VA'}</span>
          </p>
        </div>

        {/* Opening Hours */}
        <div className="flex-1 min-w-[250px]">
          <h5 className="font-extrabold text-pink-600 text-lg mb-4 tracking-wide">OPENING HOURS</h5>
          <ul className="text-neutral-700 dark:text-neutral-200 space-y-2">
            {[
              { day: 'Mon', time: '10:00am - 7:00pm' },
              { day: 'Tue', time: '10:00am - 7:00pm' },
              { day: 'Wed', time: '10:00am - 7:00pm' },
              { day: 'Thu', time: '10:00am - 7:00pm' },
              { day: 'Fri', time: '10:00am - 7:00pm' },
              { day: 'Sat', time: '10:00am - 7:00pm' },
              { day: 'Sun', time: 'Closed' },
            ].map(({ day, time }) => (
              <li
                key={day}
                className="flex items-center px-3 py-2 rounded-md hover:bg-pink-50 dark:hover:bg-pink-900 transition cursor-default"
              >
                <span className="font-semibold w-16">{day}:</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex-1 min-w-[250px]">
          <h5 className="font-extrabold text-pink-600 text-lg mb-4 tracking-wide">STAY UPDATED</h5>
          <form onSubmit={handleSubscribe} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here*"
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <Button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg px-6 py-3 shadow-md w-full sm:w-auto"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          {status === 'success' && (
            <p className="text-green-600 mt-3 font-medium">Subscribed!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-3 font-medium">
              {errorMsg || 'Subscription failed. Try again.'}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
