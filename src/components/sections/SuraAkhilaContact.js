"use client"
import React, { useState } from 'react';
import { getClientSingleton } from '@/lib/supabase/client';
import { Button } from "@/components/ui/button";

export default function SuraAkhilaContact({ content }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg("");
    try {
      const supabase = getClientSingleton();
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{ ...form }]);
      if (error) {
        setErrorMsg(error.message || 'Error inserting contact');
        setStatus('error');
      } else {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setErrorMsg(error.message || 'Unknown error');
      setStatus('error');
    }
  };

  return (
    <section
      className="py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-yellow-50 via-pink-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
      id="section-contact"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form & Info */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg border border-pink-200 dark:border-pink-900 transition-shadow hover:shadow-pink-400/50 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-neutral-900 dark:text-white tracking-tight leading-snug">
              {content.title || 'Contact Us'}
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              {content.subtitle || 'We would love to hear from you. Please fill out the form below and we will get back to you shortly.'}
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-600 transition shadow-sm text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-600 transition shadow-sm text-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-600 transition shadow-sm resize-none text-sm"
            />
            <Button
              type="submit"
              className="w-full py-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-white font-extrabold shadow-md hover:scale-105 transform transition-transform duration-300 text-sm"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            {status === 'success' && <p className="text-green-600 mt-2 font-semibold text-center text-sm">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 mt-2 font-semibold text-center text-sm">{errorMsg || 'Something went wrong. Please try again.'}</p>}
          </form>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-pink-300 dark:border-pink-900 transition-transform hover:scale-105 transform duration-300 min-h-[18rem] w-full">
          <iframe
            title="Salon Location"
            src={content.map_url || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sLuxury%20Salon!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau'}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
