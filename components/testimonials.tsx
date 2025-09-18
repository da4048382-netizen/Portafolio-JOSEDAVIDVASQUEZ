"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { dataTestimonials } from "@/data";

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="w-full py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Testimonios</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {dataTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-300">{testimonial.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

