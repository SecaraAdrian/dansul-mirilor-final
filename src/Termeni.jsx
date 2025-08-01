import React from 'react';
import { motion } from 'framer-motion';

export default function Termeni() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 text-white"
    >
      <div className="max-w-4xl w-full bg-gray-800/80 rounded-2xl shadow-2xl p-10 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-8 text-center">
          Termeni și Condiții
        </h1>

        <div className="space-y-6 text-gray-300 text-justify leading-relaxed">
          <p>
            Prin accesarea și utilizarea acestui site, sunteți de acord cu
            termenii și condițiile prezentate mai jos. Vă rugăm să le citiți cu
            atenție.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            1. Utilizarea site-ului
          </h2>
          <p>
            Acest site este destinat informării utilizatorilor despre serviciile
            noastre. Este interzisă utilizarea conținutului în scopuri
            comerciale fără acordul nostru expres.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            2. Drepturi de proprietate intelectuală
          </h2>
          <p>
            Toate materialele (texte, imagini, video) sunt protejate de drepturi
            de autor și nu pot fi copiate, reproduse sau distribuite fără
            permisiune.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            3. Limitarea răspunderii
          </h2>
          <p>
            Ne străduim să oferim informații actualizate, însă nu garantăm că
            acestea sunt întotdeauna complete sau fără erori. Utilizarea
            informațiilor se face pe propria răspundere.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            4. Modificarea Termenilor
          </h2>
          <p>
            Ne rezervăm dreptul de a modifica acești termeni fără notificare
            prealabilă. Vă recomandăm să consultați periodic această pagină
            pentru actualizări.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Contact</h2>
          <p>
            Pentru întrebări legate de Termeni și Condiții, ne puteți contacta
            la{' '}
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
