"use client";

import { useState } from "react";
import Image from "next/image";

const sliderImages = [
  "/assets/images/slider-1.png",
  "/assets/images/slider-2.png",
  "/assets/images/slider-3.png",
  "/assets/images/slider-4.png",
  "/assets/images/slider-5.png",
  "/assets/images/slider-6.png",
  "/assets/images/slider-7.png",
];

const testimonials = [
  {
    name: "Erekosima Perebuowei",
    avatar: "/assets/images/Avatar/32.png",
    content:
      "Investing with Rex'o's Properties, has been an absolute pleasure. Their professionalism, attention to detail, and commitment to delivering exceptional results set them apart in the real estate development industry.",
  },
  {
    name: "Chukwuemeka Obi",
    avatar: "/assets/images/Avatar/32-1.png",
    content:
      "Rex'o's Properties made finding our dream home in Lekki effortless. From the first consultation to handing over the keys, every step was smooth, transparent, and professional. I couldn't be more satisfied.",
  },
  {
    name: "Amara Nwachukwu",
    avatar: "/assets/images/Avatar/32-2.png",
    content:
      "The team at Rex'o's truly understands luxury living. The quality of their construction and the attention to finishing details is unmatched. Our family feels safe, comfortable, and proud to call this home.",
  },
  {
    name: "Tunde Fashola",
    avatar: "/assets/images/Avatar/32-3.png",
    content:
      "As a property investor, I've worked with many developers across Lagos. Rex'o's Properties stands out for their integrity, timely delivery, and the exceptional value they offer. A partner you can trust.",
  },
  {
    name: "Ngozi Adeyemi",
    avatar: "/assets/images/Avatar/32-4.png",
    content:
      "I purchased a unit at their Oral Estate development and it exceeded every expectation. The location is prime, the design is stunning, and the community they've built is exactly what Lagos needed.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const active = testimonials[current];

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-[40px] font-bold text-navy mb-10 leading-tight">
          What Our Client Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl shadow-lg">
          {/* Left: Auto-cycling slider images */}
          <div className="relative h-80 lg:h-auto min-h-96 overflow-hidden">
            {sliderImages.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Property ${i + 1}`}
                fill
                className={`object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

          {/* Right: White panel */}
          <div className="bg-white flex flex-col justify-center px-8 lg:px-12 py-12 border border-gray-100">
            {/* Quote icon */}
            <svg
              className="w-10 h-10 mb-6 text-navy/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
            </svg>

            {/* Testimonial text */}
            <p className="text-gray-dark text-base lg:text-lg leading-relaxed mb-8 transition-all duration-300">
              {active.content}
            </p>

            {/* Author + Nav */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="w-11 h-11 rounded-full overflow-hidden relative shrink-0 ring-2 ring-navy/20">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-navy font-semibold text-sm flex-1">
                {active.name}
              </span>

              {/* Prev */}
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-navy/30 flex items-center justify-center text-navy hover:bg-navy/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-navy-dark transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-navy" : "w-1.5 bg-navy/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
