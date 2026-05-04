"use client";

import { useState } from "react";

/**
 * Newsletter Section
 *
 * Email subscription form. "use client" needed for form state.
 * In a later phase, we'll connect this to an API route
 * that stores the email or sends it to a mailing service.
 */

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to API route for newsletter subscription
    alert(`Thanks for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-blue-steel py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-sans">
          Join the Rex&apos;o&apos;s Property Community
        </h2>
        <p className="text-white/80 text-sm leading-relaxed mb-8">
          Subscribe for exclusive property listings, market insights from
          leading real estate developers in Lagos, and expert guidance on
          property investment in Nigeria. Join 5,000+ subscribers getting first
          access to luxury homes in Lekki, off-plan opportunities, and real
          estate trends.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="flex max-w-lg mx-auto">
          <div className="flex-1 flex items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 pl-4 pr-1 py-1">
            <svg
              className="w-5 h-5 text-white/50 shrink-0 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-transparent text-white text-sm placeholder:text-white/50 focus:outline-none py-2"
            />
            <button
              type="submit"
              className="bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
