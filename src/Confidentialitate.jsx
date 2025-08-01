import React from 'react';
import { motion } from 'framer-motion';

export default function Confidentialitate() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 text-white"
    >
      <div className="max-w-4xl w-full bg-gray-800/80 rounded-2xl shadow-2xl p-10 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-8 text-center">
          Politica de Confidențialitate
        </h1>

        <div className="space-y-6 text-gray-300 text-justify leading-relaxed">
          <p>
            Această politică descrie modul în care colectăm, utilizăm și
            protejăm informațiile personale ale utilizatorilor, conform
            Regulamentului General privind Protecția Datelor (GDPR).
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            1. Date colectate
          </h2>
          <p>
            Putem colecta următoarele date: nume, adresă de email, număr de
            telefon, adrese IP, și alte date oferite voluntar prin formulare de
            contact sau interacțiuni cu site-ul nostru.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            2. Scopul colectării
          </h2>
          <p>
            Datele sunt colectate pentru a răspunde solicitărilor, a îmbunătăți
            serviciile oferite, a trimite informații relevante și a îndeplini
            obligațiile legale.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            3. Stocarea și protecția datelor
          </h2>
          <p>
            Datele sunt stocate în condiții de securitate și sunt protejate
            împotriva accesului neautorizat. Implementăm măsuri tehnice și
            organizatorice pentru a proteja informațiile personale.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            4. Drepturile utilizatorilor
          </h2>
          <p>
            Aveți dreptul de a solicita accesul la datele personale,
            rectificarea sau ștergerea acestora, restricționarea prelucrării sau
            portabilitatea datelor, precum și de a vă opune prelucrării.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            5. Politica de Cookies
          </h2>
          <p>
            Site-ul nostru poate utiliza cookies pentru a îmbunătăți experiența
            utilizatorului. Pentru mai multe informații, consultați{' '}
            <a href="/Cookies" className="text-pink-400 hover:underline">
              Politica de Cookies
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            6. Modificări ale politicii
          </h2>
          <p>
            Ne rezervăm dreptul de a actualiza această politică. Orice
            modificare va fi publicată pe această pagină. Vă recomandăm să
            verificați periodic.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Contact</h2>
          <p>
            Pentru întrebări legate de Politica de Confidențialitate, ne puteți
            contacta la{' '}
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
