// app/booking/SuraAkhilaBooking.jsx

'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { getClientSingleton } from '@/lib/supabase/client';

const availableServices = [
  'Luxury Facial',
  'Signature Hair Spa',
  'Classic Manicure & Pedicure',
  'Royal Body Massage',
  'Bridal Makeover',
  "Gentlemen's Grooming",
  'Ayurvedic Body Wrap',
  'Keratin Hair Treatment',
  'Luxury Spa Pedicure',
];

function Calendar({ selected, onSelect }) {
  return (
    <input
      type="date"
      value={selected ? format(selected, 'yyyy-MM-dd') : ''}
      onChange={(e) => onSelect(new Date(e.target.value))}
      className="w-full px-4 py-3 rounded-xl border border-pink-400 dark:border-pink-600 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-pink-300 transition duration-200"
    />
  );
}

function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default function SuraAkhilaBooking() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    gmail: '',
    service: '',
    date: null,
  });

  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleDateChange = (date) => {
    setForm((f) => ({ ...f, date }));
    setTouched((t) => ({ ...t, date: true }));
  };

  const isFormValid =
    form.name && form.age && form.phone && form.gmail && form.service && form.date;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (!isFormValid) {
      setErrorMsg('Please fill all fields and select a date.');
      setStatus('error');
      return;
    }

    try {
      const supabase = getClientSingleton();
      const formattedDate =
        form.date instanceof Date
          ? form.date.toISOString().split('T')[0]
          : form.date;

      const { data, error } = await supabase.from('bookings').insert([
        {
          name: form.name,
          age: form.age,
          phone: form.phone,
          gmail: form.gmail,
          service: form.service,
          date: formattedDate,
        },
      ]);

      if (error) {
        setErrorMsg(error.message || 'Error inserting booking');
        setStatus('error');
      } else {
        setStatus('success');
        setForm({
          name: '',
          age: '',
          phone: '',
          gmail: '',
          service: '',
          date: null,
        });
        setTouched({});
      }
    } catch (error) {
      setErrorMsg(error.message || 'Unknown error');
      setStatus('error');
    }
  };

  return (
    <div className="mt-12 p-10 rounded-3xl bg-gradient-to-br from-white via-pink-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 shadow-2xl border border-pink-200 dark:border-pink-800 max-w-3xl mx-auto backdrop-blur-lg" id="section-booking">
      <h4 className="text-3xl font-extrabold mb-8 text-center text-pink-600">Book Your Premium Appointment</h4>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-4 focus:ring-pink-300 bg-white dark:bg-neutral-900 dark:text-white" required />
          <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-4 focus:ring-pink-300 bg-white dark:bg-neutral-900 dark:text-white" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-4 focus:ring-pink-300 bg-white dark:bg-neutral-900 dark:text-white" required />
          <input type="email" name="gmail" placeholder="Gmail" value={form.gmail} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:ring-4 focus:ring-pink-300 bg-white dark:bg-neutral-900 dark:text-white" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">Choose Service</label>
            <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-pink-400 bg-white text-pink-700 font-semibold shadow-inner dark:bg-neutral-800 dark:text-white dark:border-pink-700" required>
              <option value="">Select a service</option>
              {availableServices.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">Choose Date</label>
            <Calendar selected={form.date} onSelect={handleDateChange} />
          </div>
        </div>

        <Button type="submit" className="w-full mt-6" disabled={!isFormValid || status === 'loading'}>
          {status === 'loading' ? 'Booking...' : 'Confirm Booking'}
        </Button>

        {status === 'success' && (
          <div className="text-green-600 text-center font-semibold mt-4"> Appointment booked successfully!</div>
        )}
        {status === 'error' && (
          <div className="text-red-600 text-center font-semibold mt-4">{errorMsg || 'Something went wrong. Please try again.'}</div>
        )}
        {!form.date && touched.date && (
          <div className="text-red-500 text-center mt-2">Please select a date.</div>
        )}
      </form>
    </div>
  );
}
