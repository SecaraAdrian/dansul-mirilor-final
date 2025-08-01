import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 text-white"
    >
      <div className="max-w-3xl w-full bg-gray-800/80 rounded-2xl shadow-2xl p-10 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-400 text-center mb-8">
          Ia legătura cu noi
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Pentru întrebări, colaborări sau alte informații, ne puteți contacta
          prin:
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-400 text-2xl" />
            <span className="text-lg break-all">contact@exemplu.ro</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-pink-400 text-2xl" />
            <span className="text-lg">+40 123 456 789</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-pink-400 text-2xl" />
            <span className="text-lg">Strada Exemplu, Oradea, România</span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/?text=Buna%20ziua!%20Am%20o%20întrebare!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition"
          >
            Scrie-ne pe WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  );
}
