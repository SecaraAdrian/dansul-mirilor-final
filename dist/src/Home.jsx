import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { IconMaleDancer, IconFemaleDancer } from './components/Icons';

import { FaBars, FaTimes, FaArrowUp, FaWhatsapp, FaPlay } from 'react-icons/fa';

import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay]);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll în sus"
        className="fixed bottom-6 right-6 p-3 rounded-full bg-pinkAccent hover:bg-roseGold dark:bg-gold dark:hover:bg-softPink text-white shadow-lg transition-colors duration-300 z-50"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-ivory dark:bg-charcoal text-deepGray dark:text-lightGray shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={
              dark
                ? '/src/assets/imagini/logo-white.png'
                : '/src/assets/imagini/logo-black.png'
            }
            alt="Dansul Mirilor Logo"
            className="h-10 md:h-12 object-contain transition-all duration-300"
          />
        </a>

        {/* Nav + Theme Toggle */}
        <div className="flex-1 flex justify-end items-center">
          <nav className="hidden md:flex space-x-8 text-base font-medium">
            {['Intro', 'Despre', 'Galerie', 'Întrebări', 'Programare'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gold dark:hover:text-softPink transition"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center space-x-4 ml-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              title="Comută Dansator/Dansatoare"
              aria-label="Comută tema"
              className="transition hover:scale-110"
            >
              {dark ? <IconMaleDancer /> : <IconFemaleDancer />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
              aria-label="Deschide meniul"
            >
              {menuOpen ? (
                <FaTimes className="text-2xl text-roseGold dark:text-softPink" />
              ) : (
                <FaBars className="text-2xl text-gold dark:text-lightGray" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <motion.nav
        initial={false}
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
          closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
        }}
        className="md:hidden overflow-hidden bg-ivory dark:bg-charcoal text-deepGray dark:text-lightGray px-6 text-base space-y-4 py-4 border-t border-lightGray dark:border-deepGray"
      >
        {['Intro', 'Despre', 'Galerie', 'Întrebări', 'Programare'].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="block hover:text-gold dark:hover:text-softPink transition"
            >
              {item}
            </a>
          )
        )}
      </motion.nav>
    </header>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden bg-ivory dark:bg-charcoal text-deepGray dark:text-lightGray transition-colors duration-300"
    >
      {/* Fundal animat */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          src="/Dansator-dextop.png"
          alt="Dansator principal"
          className="hidden md:block w-full h-full object-cover object-top"
          // style={{ scale, y }}
        />
        <motion.img
          src="/Dansator-mobile.png"
          alt="Dansator mobil"
          className="md:hidden w-full h-full object-cover object-top"
          // style={{ scale, y }}
        />
      </div>

      {/* Overlay pentru contrast text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent dark:from-black/60 dark:via-black/40 z-10 transition-all duration-500" />

      {/* Conținut text */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-heading font-bold text-gold dark:text-softPink drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Primii pași într-o poveste de neuitat
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl max-w-2xl text-softPink dark:text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Dansul mirilor transformat într-un moment magic.
        </motion.p>

        <motion.a
          href="#programare"
          className="mt-8 inline-block bg-softPink hover:bg-gold text-white hover:text-deepGray dark:bg-gold dark:hover:bg-softPink dark:text-charcoal dark:hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Programează o întâlnire
        </motion.a>
      </div>
    </section>
  );
};

const VideoIntroSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current.play();
  };

  return (
    <section
      id="intro"
      className="pt-24 bg-ivory dark:bg-charcoal text-deepGray dark:text-lightGray px-4 text-center transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gold dark:text-softPink">
        Povestea dansului meu
      </h2>

      <div className="max-w-4xl mx-auto relative aspect-video rounded-xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls={playing}
          poster="/src/assets/imagini/cover-video.png"
        >
          <source
            src="/src/assets/video/WhatsApp Video 2025-04-17 at 19.15.09.mp4"
            type="video/mp4"
          />
          Browserul tău nu suportă tagul video.
        </video>

        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10"
          >
            <FaPlay className="text-white text-5xl opacity-80" />
          </button>
        )}
      </div>
    </section>
  );
};

const AboutSection = () => (
  <motion.section
    id="despre"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.2 }}
    className="scroll-mt-24 bg-ivory dark:bg-charcoal text-deepGray dark:text-lightGray  px-6 text-center transition-colors duration-300"
  >
    <h3 className="text-3xl font-bold text-gold dark:text-softPink mb-6">
      Despre noi
    </h3>
    <div className="max-w-3xl mx-auto">
      <p className="text-lg font-semibold leading-relaxed  text-softPink dark:text-gold bg-white/80 dark:bg-transparent backdrop-blur-md px-6 py-4 rounded-2xl shadow-md dark:shadow-none transition-all duration-300">
        Practic dansul de peste 20 de ani și am avut onoarea să ghidez sute de
        cupluri de miri în pașii lor spre un moment unic. Cred în eleganță,
        emoție și în bucuria de a transforma fiecare dans într-o poveste
        memorabilă. Cu răbdare, pasiune și profesionalism, vă voi învăța să vă
        bucurați de fiecare clipă pe ringul de dans.
      </p>
    </div>
  </motion.section>
);

const GallerySection = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  const title = isDark
    ? 'Fragmente vizuale din magia dansului'
    : 'Fragmente vizuale din magia dansului';

  return (
    <motion.section
      id="galerie"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative bg-ivory dark:bg-charcoal text-deepGray dark:text-lightGray py-20 px-6 text-center overflow-hidden transition-colors duration-300"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-gold dark:text-softPink mb-12 transition duration-500 hover:underline hover:underline-offset-8">
        {title}
      </h3>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
      >
        {[
          '/src/assets/imagini/img1.png',
          '/src/assets/imagini/img2.png',
          '/src/assets/imagini/img3.png',
        ].map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              loading="lazy"
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105 hover:brightness-110"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

const faqs = [
  {
    question: 'Când ar trebui să începem lecțiile pentru dansul mirilor?',
    answer:
      'Ideal ar fi să începeți lecțiile cu aproximativ 2-3 luni înainte de nuntă, pentru a avea timp suficient de repetiții fără stres.',
  },
  {
    question: 'Nu avem deloc experiență în dans. Este o problemă?',
    answer:
      'Deloc! Majoritatea cuplurilor care vin la noi sunt începători. Coregrafiile sunt personalizate în funcție de nivelul vostru.',
  },
  {
    question: 'Cât durează, în general, pregătirea unui dans al mirilor?',
    answer:
      'Între 6 și 15 ședințe sunt de obicei suficiente pentru un dans memorabil.',
  },
  {
    question: 'Putem alege orice melodie pentru dansul nostru?',
    answer:
      'Da! Ne adaptăm pe orice gen muzical — clasic, romantic, latino sau chiar remixuri moderne.',
  },
  {
    question: 'Cât durează o ședință de dans?',
    answer: 'O ședință durează aproximativ 60 de minute.',
  },
  {
    question:
      'Putem include și părinții sau cavalerii de onoare într-un dans special?',
    answer:
      'Sigur! Organizăm și coregrafii speciale pentru momente în familie sau surprize cu prietenii.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDark(document.documentElement.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const title = isDark
    ? 'Întrebări frecvente despre primul dans'
    : 'Întrebări frecvente despre primul dans';

  return (
    <motion.section
      id="întrebări"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
      className="bg-ivory dark:bg-charcoal text-deepGray dark:text-lightGray py-20 px-6 text-center transition-colors duration-300"
    >
      <h3 className="text-5xl font-bold mb-10 text-softPink dark:text-gold transition-colors duration-300">
        {title}
      </h3>

      <div className="max-w-3xl mx-auto space-y-4 text-left font-bold">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="border-b border-gold dark:border-softPink pb-4"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-softPink dark:text-softPink hover:text-pinkAccent dark:hover:text-gold transition"
            >
              {item.question}
              <motion.span
                animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-roseGold dark:text-gold"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-2 text-deepGray dark:text-lightGray overflow-hidden"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const ScheduleSection = () => (
  <section
    id="programare"
    className="bg-ivory dark:bg-charcoal text-deepGray dark:text-lightGray py-20 px-6 text-center transition-colors duration-300"
  >
    <h3 className="text-3xl font-semibold  text-softPink dark:text-gold mb-6">
      Programează o întâlnire gratuită
    </h3>
    <a
      href="https://wa.me/?text=Buna%20ziua!%20Doresc%20o%20programare%20pentru%20Dansul%20mirilor!"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-colors duration-300"
    >
      <FaWhatsapp className="mr-2 text-white" /> Scrie-ne pe WhatsApp
    </a>
  </section>
);

const Footer = () => (
  <footer className="bg-ivory text-deepGray dark:bg-charcoal dark:text-lightGray py-10 px-6 text-center text-sm space-y-2">
    <p>&copy; {new Date().getFullYear()} Toate drepturile rezervate.</p>
    <div className="flex flex-wrap justify-center gap-4 text-gold dark:text-softPink">
      <Link
        to="/Confidentialitate"
        className="hover:text-roseGold dark:hover:text-gold font-semibold transition"
      >
        Confidențialitate
      </Link>
      <Link
        to="/Cookies"
        className="hover:text-roseGold dark:hover:text-gold font-semibold transition"
      >
        Cookies
      </Link>
      <Link
        to="/Termeni"
        className="hover:text-roseGold dark:hover:text-gold font-semibold transition"
      >
        Termeni
      </Link>
      <Link
        to="/Contact"
        className="hover:text-roseGold dark:hover:text-gold font-semibold transition"
      >
        Contact
      </Link>
    </div>
  </footer>
);

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-4 z-50 max-w-xl w-full mx-4"
    >
      <p className="text-center text-sm flex-1">
        Folosim cookie-uri pentru a îmbunătăți experiența pe site. Vezi{' '}
        <Link to="/Cookies" className="text-pink-400 underline">
          Politica de Cookies
        </Link>
        .
      </p>
      <div className="flex space-x-2">
        <button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Refuz
        </button>
      </div>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="font-sans bg-white dark:bg-black transition duration-300">
      <Header />
      <HeroSection />
      <VideoIntroSection />
      <AboutSection />
      <GallerySection />
      <FAQSection />
      <ScheduleSection />
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Home;
