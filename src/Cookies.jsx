import React from 'react';
import { motion } from 'framer-motion';

export default function Cookies() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 text-white"
    >
      <div className="max-w-4xl w-full bg-gray-800/80 rounded-2xl shadow-2xl p-10 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-8 text-center">
          Politica de Cookie-uri
        </h1>

        <div className="space-y-6 text-gray-300 text-justify leading-relaxed">
          <p>
            Această politică explică ce sunt cookie-urile și cum le utilizăm
            pentru a îmbunătăți experiența utilizatorilor pe site-ul nostru.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            1. Ce sunt cookie-urile?
          </h2>
          <p>
            Cookie-urile sunt fișiere text mici stocate pe dispozitivul
            dumneavoastră atunci când vizitați un site. Acestea ajută la
            recunoașterea dispozitivului și îmbunătățesc funcționalitatea și
            personalizarea experienței.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            2. Tipuri de cookie-uri utilizate
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Cookie-uri esențiale:</strong> Necesare pentru
              funcționarea corectă a site-ului.
            </li>
            <li>
              <strong>Cookie-uri de performanță:</strong> Ne ajută să analizăm
              traficul și să îmbunătățim serviciile.
            </li>
            <li>
              <strong>Cookie-uri de funcționalitate:</strong> Permite salvarea
              preferințelor utilizatorilor.
            </li>
            <li>
              <strong>Cookie-uri de marketing:</strong> Utilizate pentru a livra
              reclame relevante utilizatorilor.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">
            3. Cum puteți controla cookie-urile
          </h2>
          <p>
            Puteți seta browserul dumneavoastră să accepte sau să refuze
            cookie-urile. Totodată, puteți șterge cookie-urile deja salvate.
            Refuzul utilizării cookie-urilor poate afecta funcționalitatea
            anumitor secțiuni ale site-ului.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            4. Actualizări ale politicii de cookie-uri
          </h2>
          <p>
            Putem actualiza această politică periodic. Orice modificare va fi
            publicată pe această pagină.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Contact</h2>
          <p>
            Pentru mai multe informații despre cookie-uri și modul de
            administrare, ne puteți contacta la{' '}
            <a
              href="mailto:contact@exemplu.ro"
              className="text-pink-400 hover:underline"
            >
              contact@exemplu.ro
            </a>
            .
          </p>
        </div>
      </div>
    </motion.section>
  );
}
