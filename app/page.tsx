'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { articles } from '@/data/articles';

export default function Home() {
  const [currentDelay, setCurrentDelay] = useState('standard');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('byli4mpro@gmail.com');
    const btn = document.querySelector('.copy-email-btn');
    const feedback = document.getElementById('copyFeedback');
    if (btn && feedback) {
      btn.classList.add('copied');
      feedback.classList.add('show');
      setTimeout(() => {
        btn.classList.remove('copied');
        feedback.classList.remove('show');
      }, 3000);
    }
  };

  const setDelay = (delay: string, e: React.MouseEvent) => {
    setCurrentDelay(delay);
    const multiplier = delay === 'express' ? 1.5 : 1;
    const prices = { discovery: 550, complete: 950, premium: 750 };

    document.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.remove('active'));
    (e.target as HTMLElement).classList.add('active');

    const discoveryEl = document.getElementById('price-discovery');
    const completeEl = document.getElementById('price-complete');
    const premiumEl = document.getElementById('price-premium');

    if (discoveryEl) discoveryEl.innerHTML = `${Math.round(prices.discovery * multiplier)}€<span style="font-size: 0.6em; color: var(--text-muted);">TTC</span>`;
    if (completeEl) completeEl.innerHTML = `${Math.round(prices.complete * multiplier)}€<span style="font-size: 0.6em; color: var(--text-muted);">TTC</span>`;
    if (premiumEl) premiumEl.innerHTML = `${Math.round(prices.premium * multiplier)}€<span style="font-size: 0.6em; color: var(--text-muted);">TTC</span>`;
  };

  const filterPortfolio = (category: string, e: React.MouseEvent) => {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach((btn) => btn.classList.remove('active'));
    (e.target as HTMLElement).classList.add('active');

    items.forEach((item) => {
      if (category === 'all' || (item as HTMLElement).dataset.category === category) {
        (item as HTMLElement).style.display = 'flex';
        setTimeout(() => {
          (item as HTMLElement).style.opacity = '1';
        }, 10);
      } else {
        (item as HTMLElement).style.opacity = '0';
        setTimeout(() => {
          (item as HTMLElement).style.display = 'none';
        }, 300);
      }
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="root">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; overflow-x: hidden; }
        :root {
          --bg: #000000;
          --text: #ffffff;
          --text-muted: #b0b0b0;
          --accent: #00d9ff;
          --accent-dark: #00a8cc;
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        body {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
        }
        header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(0, 0, 0, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 2px solid var(--accent);
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }
        .logo { height: 45px; display: flex; align-items: center; }
        .logo img { height: 45px; width: auto; }
        nav { display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap; }
        nav a {
          color: var(--text);
          text-decoration: none;
          font-weight: 600;
          font-size: clamp(0.75rem, 2vw, 0.95rem);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: var(--transition);
        }
        nav a:hover { color: var(--accent); border-bottom-color: var(--accent); }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero {
          padding: 4rem 1.5rem;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          background: var(--bg);
        }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; gap: 2rem; min-height: auto; padding: 3rem 1.5rem; }
        }
        section {
          width: 100%;
          padding: 3rem 1.5rem;
        }
        @media (min-width: 768px) {
          section { padding: 5rem 2rem; }
        }
        .section-title {
          font-size: clamp(1.8rem, 7vw, 4rem);
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
          animation: fadeInUp 0.8s ease-out;
          letter-spacing: -0.5px;
          text-transform: uppercase;
        }
        .highlight { color: var(--accent); }
        .cta-btn {
          display: inline-block;
          padding: 0.8rem 2rem;
          background: var(--accent);
          color: var(--bg);
          border: none;
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
          margin: 0.5rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .cta-btn:hover {
          background: var(--accent-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 217, 255, 0.2);
        }
        .cta-btn.secondary {
          background: transparent;
          border: 2px solid var(--accent);
          color: var(--accent);
        }
        .cta-btn.secondary:hover {
          background: var(--accent);
          color: var(--bg);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .service-card {
          padding: 2rem;
          background: transparent;
          border: 2px solid var(--accent);
          animation: fadeInUp 0.8s ease-out;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .service-card h3 {
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          margin-bottom: 1rem;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .service-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 500;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .pricing-card {
          padding: 2rem;
          border: 2px solid var(--accent);
          background: transparent;
          animation: fadeInUp 0.8s ease-out;
          display: flex;
          flex-direction: column;
        }
        .pricing-card:hover {
          background: var(--accent);
          color: var(--bg);
          transform: translateY(-5px);
        }
        .pricing-card h3 {
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          margin-bottom: 0.8rem;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 700;
        }
        .pricing-card:hover h3 { color: var(--bg); }
        .price {
          font-size: clamp(2rem, 8vw, 3rem);
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .pricing-card:hover .price { color: var(--bg); }
        .price-period {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-weight: 500;
          text-transform: uppercase;
        }
        .pricing-card:hover .price-period { color: var(--bg); }
        .feature-list {
          list-style: none;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .feature-list li {
          padding: 0.6rem 0;
          color: var(--text-muted);
          font-size: 0.95rem;
          font-weight: 500;
        }
        .pricing-card:hover .feature-list li { color: var(--bg); }
        .feature-list li::before {
          content: '▸';
          color: var(--accent);
          margin-right: 1rem;
          font-weight: bold;
        }
        .pricing-card:hover .feature-list li::before { color: var(--bg); }
        .tab-btn {
          padding: 0.8rem 1.5rem;
          background: transparent;
          border: 2px solid var(--accent);
          color: var(--accent);
          font-size: clamp(0.85rem, 2vw, 1.1rem);
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .tab-btn.active {
          background: var(--accent);
          color: var(--bg);
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .portfolio-item {
          aspect-ratio: 9/16;
          background: var(--bg);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          border: 2px solid var(--accent);
          position: relative;
          animation: fadeInUp 0.8s ease-out;
        }
        .portfolio-item:hover {
          border-color: var(--accent);
          transform: scale(1.05);
        }
        .portfolio-link {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-decoration: none;
          background-size: cover;
          background-position: center;
        }
        .portfolio-link::before {
          content: '';
          position: absolute;
          width: 60px;
          height: 60px;
          background: var(--accent);
          border-radius: 50%;
          transition: var(--transition);
        }
        .portfolio-link::after {
          content: '▶';
          position: absolute;
          color: var(--bg);
          font-size: 24px;
          z-index: 2;
        }
        .portfolio-item:hover .portfolio-link::before {
          width: 80px;
          height: 80px;
          background: var(--accent-dark);
        }
        .portfolio-item-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,217,255,0.2), transparent);
          padding: 1.5rem 1rem 0.8rem;
          color: var(--text);
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          font-weight: 700;
          transform: translateY(10px);
          opacity: 0;
          transition: var(--transition);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .portfolio-item:hover .portfolio-item-label {
          opacity: 1;
          transform: translateY(0);
        }
        .portfolio-filters {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.6rem 1.2rem;
          border: 2px solid var(--accent);
          background: transparent;
          color: var(--accent);
          cursor: pointer;
          transition: var(--transition);
          font-weight: 700;
          text-transform: uppercase;
          font-size: clamp(0.8rem, 2vw, 0.95rem);
        }
        .filter-btn:hover, .filter-btn.active {
          background: var(--accent);
          color: var(--bg);
        }
        .contact-section {
          text-align: center;
          padding: 3rem 1.5rem;
          background: transparent;
          border: 2px solid var(--accent);
          animation: fadeInUp 0.8s ease-out;
        }
        .contact-section h2 {
          font-size: clamp(1.8rem, 8vw, 3rem);
          margin-bottom: 1rem;
          text-transform: uppercase;
          font-weight: 700;
        }
        .contact-section p {
          font-size: clamp(1rem, 3vw, 1.2rem);
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 500;
        }
        .email-display {
          display: inline-block;
          background: transparent;
          padding: 1rem 1.5rem;
          border: 2px solid var(--accent);
          margin-bottom: 1.5rem;
          font-size: clamp(1rem, 3vw, 1.3rem);
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.5px;
        }
        .copy-email-btn {
          padding: 0.8rem 1.5rem;
          background: var(--accent);
          color: var(--bg);
          border: none;
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: var(--transition);
        }
        .copy-email-btn:hover {
          background: var(--accent-dark);
          transform: translateY(-2px);
        }
        .copy-email-btn.copied { background: #00ff88; }
        .copy-feedback {
          display: none;
          color: #00ff88;
          font-weight: 700;
          margin-top: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .copy-feedback.show { display: block; }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          max-width: 700px;
          margin: 0 auto;
        }
        .blog-card {
          background: #1a1a1a;
          border: 2px solid var(--accent);
          overflow: hidden;
          transition: var(--transition);
          animation: fadeInUp 0.8s ease-out;
          display: flex;
          flex-direction: column;
          aspect-ratio: 1 / 1;
        }
        .blog-card:hover {
          border-color: #0066cc;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
        }
        .blog-card-image {
          width: 100%;
          height: 55%;
          object-fit: cover;
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border-bottom: 2px solid var(--accent);
        }
        .blog-card-content {
          padding: 1rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .blog-card h3 {
          font-size: 0.9rem;
          margin: 0.5rem 0;
          color: var(--accent);
          text-transform: none;
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 1.3;
        }
        .blog-card .date {
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          font-weight: 600;
        }
        .blog-card p {
          color: #b0b0b0;
          font-size: 0.8rem;
          line-height: 1.4;
          margin: 0;
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .read-more {
          color: var(--accent);
          text-decoration: none;
          font-weight: 700;
          margin-top: 1rem;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .read-more:hover { transform: translateX(3px); }
        footer {
          background: var(--bg);
          border-top: 2px solid var(--accent);
          padding: 2rem 1.5rem;
          text-align: center;
          color: var(--text-muted);
        }
        footer p {
          margin: 0.6rem 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: clamp(0.85rem, 2vw, 0.95rem);
        }
        footer a {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
        }
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
        }
        .scroll-reveal.active {
          opacity: 1;
          transform: translateY(0);
          transition: var(--transition);
        }
        #cgv {
          background: var(--bg);
          padding: 4rem 1.5rem;
          border-top: 2px solid var(--accent);
        }
        #cgv h3 {
          color: var(--accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          text-transform: uppercase;
        }
        #cgv p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        #cgv ul {
          margin-left: 2rem;
          margin-top: 1rem;
        }
        #cgv li {
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
      `}</style>

      <header>
        <div className="header-content">
          <div className="logo">
            <img src="/byli4m.jpeg" alt="Byli4mCorporate" />
          </div>
          <nav>
            <a onClick={() => scrollToSection('services')}>Services</a>
            <a onClick={() => scrollToSection('pricing')}>Tarifs</a>
            <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
            <a style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/blog'}>Blog</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-1px' }}>NOTRE MISSION</h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-1px' }}>
            <span className="highlight">SUBLIMER VOTRE IMAGE</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8, fontWeight: 500 }}>
            Pack complet à partir de <strong style={{ color: 'var(--accent)', fontSize: '1.3rem' }}>950€</strong>
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8, fontWeight: 500 }}>
            Livré en <strong style={{ color: 'var(--accent)' }}>10 jours max</strong>. Tournage, montage, photos, reels — tout inclus. Aucun coût caché.
          </p>
          <div>
            <button className="cta-btn" onClick={() => scrollToSection('contact')}>Commencer un projet</button>
            <Link href="/services" className="cta-btn secondary" style={{ textDecoration: 'none', display: 'inline-block', color: 'inherit' }}>Voir nos services</Link>
            <button className="cta-btn secondary" onClick={() => scrollToSection('portfolio')}>Voir nos réalisations</button>
          </div>
        </div>

        <div className="hero-right">
          <iframe
            width="100%"
            height="600"
            src="https://www.instagram.com/reel/DO8uC2QCAWT/embed/"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            style={{ border: '2px solid var(--accent)', maxWidth: '100%' }}
          />
        </div>
      </section>

      <section style={{ background: 'transparent', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="scroll-reveal">
              <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '1rem', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Humain</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.8 }}>Chaque projet traité avec engagement et créativité personnelle</p>
            </div>
            <div className="scroll-reveal">
              <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '1rem', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Rapide</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.8 }}>Du tournage au montage en 5-7 jours max</p>
            </div>
            <div className="scroll-reveal">
              <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '1rem', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Créatif</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.8 }}>Motion design et effets qui captivent vraiment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal" id="services">
        <h2 className="section-title">LE PACK COMPLET</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Vidéo Principale</h3>
            <p>40s à 1 min. Présentation complète avec montage, musique, sound design. Votre vitrine durable.</p>
          </div>
          <div className="service-card">
            <h3>Reportage Photo</h3>
            <p>~30 photos HD retouchées. Ambiance, équipe, produits. Prêtes pour tous vos canaux.</p>
          </div>
          <div className="service-card">
            <h3>Reel Récap'</h3>
            <p>30s max (9:16). Montage dynamique pour Instagram & TikTok. L'essentiel en un plan.</p>
          </div>
          <div className="service-card">
            <h3>Reels Plan-Séquence</h3>
            <p>3 à 4 capsules immersives (15-45s). Contenus verticaux pour alimenter votre feed.</p>
          </div>
        </div>
      </section>

      <section className="scroll-reveal" id="pricing" style={{ background: 'transparent', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">NOS TARIFS</h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <button className="tab-btn active" onClick={(e) => setDelay('standard', e)}>Délai Standard (10j)</button>
            <button className="tab-btn" onClick={(e) => setDelay('express', e)}>Délai Express (48h) +50%</button>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Découverte</h3>
              <div className="price" id="price-discovery">550€<span style={{ fontSize: '0.6em', color: 'var(--text-muted)' }}>TTC</span></div>
              <p className="price-period">Pour débuter</p>
              <ul className="feature-list">
                <li>Tournage 2h</li>
                <li>1 reel principal (30-40s)</li>
                <li>2 reels annexes (15s c.)</li>
                <li>15-20 photos retouchées</li>
                <li>Livrables prêts à publier</li>
                <li>Parfait pour tester</li>
              </ul>
              <button className="cta-btn" onClick={() => scrollToSection('contact')}>Devis gratuit</button>
            </div>

            <div className="pricing-card" style={{ border: '3px solid var(--accent)' }}>
              <div style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '0.5rem 1rem', margin: '-2.5rem -2.5rem 1rem -2.5rem', textAlign: 'center', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                ⭐ 30% MOINS CHER ⭐
              </div>
              <h3>Pack Complet</h3>
              <div className="price" id="price-complete">950€<span style={{ fontSize: '0.6em', color: 'var(--text-muted)' }}>TTC</span></div>
              <p className="price-period">LE MEILLEUR RAPPORT</p>
              <ul className="feature-list">
                <li>Tout le pack Découverte +</li>
                <li>Vidéo principale (40s-1min)</li>
                <li>Retours possibles</li>
                <li>1h coaching réseaux sociaux</li>
                <li>Tournage 1/2 journée complet</li>
                <li>Livrables premium</li>
                <li>Accompagnement personnalisé</li>
              </ul>
              <button className="cta-btn" onClick={() => scrollToSection('contact')} style={{ background: 'var(--accent)', color: 'var(--bg)' }}>Réserver</button>
            </div>

            <div className="pricing-card">
              <h3>Pack Premium</h3>
              <div className="price" id="price-premium">750€<span style={{ fontSize: '0.6em', color: 'var(--text-muted)' }}>TTC</span></div>
              <p className="price-period">+ 4 prestations 200€/an</p>
              <ul className="feature-list">
                <li>Tout le Pack Complet +</li>
                <li>1h cadrage par mois</li>
                <li>2-3 reels de 15-20s/mois</li>
                <li>10 photos par mois</li>
                <li>Engagement 4 prestations/an</li>
                <li>Suivi stratégique continu</li>
                <li>Support prioritaire</li>
              </ul>
              <button className="cta-btn" onClick={() => scrollToSection('contact')}>Devis gratuit</button>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            TVA non applicable, art. 293 B du CGI
          </p>

          <div style={{ marginTop: '4rem', padding: '2rem', border: '2px solid var(--accent)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>Conseil en Communication Réseaux</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
              Vous avez du contenu mais pas la stratégie ? On vous aide à maximiser votre ROI sur les réseaux.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1.5rem' }}>
              À la demande — tarif sur devis
            </p>
            <button className="cta-btn" onClick={() => scrollToSection('contact')}>Demander une consultation</button>
          </div>
        </div>
      </section>

      <section className="scroll-reveal" id="portfolio">
        <h2 className="section-title">PORTFOLIO</h2>
        <div className="portfolio-filters">
          <button className="filter-btn active" onClick={(e) => filterPortfolio('all', e)}>Tous</button>
          <button className="filter-btn" onClick={(e) => filterPortfolio('restaurant', e)}>Restaurant</button>
          <button className="filter-btn" onClick={(e) => filterPortfolio('reels', e)}>Reels</button>
          <button className="filter-btn" onClick={(e) => filterPortfolio('main', e)}>Vidéo Principale</button>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-item" data-category="restaurant">
            <a href="https://www.youtube.com/watch?v=yesBhL1Zflk" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ backgroundImage: 'url(https://img.youtube.com/vi/yesBhL1Zflk/maxresdefault.jpg)' }}></a>
            <div className="portfolio-item-label">Côté Sushi - Lille</div>
          </div>

          <div className="portfolio-item" data-category="reels">
            <a href="https://www.youtube.com/watch?v=TAXd87L3dRk" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ backgroundImage: 'url(https://img.youtube.com/vi/TAXd87L3dRk/maxresdefault.jpg)' }}></a>
            <div className="portfolio-item-label">Gand Brinus - Reel 1</div>
          </div>

          <div className="portfolio-item" data-category="reels">
            <a href="https://www.youtube.com/watch?v=YvDJA_nzAf0" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ backgroundImage: 'url(https://img.youtube.com/vi/YvDJA_nzAf0/maxresdefault.jpg)' }}></a>
            <div className="portfolio-item-label">Gand Brinus - Reel 2</div>
          </div>

          <div className="portfolio-item" data-category="reels">
            <a href="https://www.youtube.com/watch?v=QjOfJlp1gxY" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ backgroundImage: 'url(https://img.youtube.com/vi/QjOfJlp1gxY/maxresdefault.jpg)' }}></a>
            <div className="portfolio-item-label">Gand Brinus - Reel 3</div>
          </div>

          <div className="portfolio-item" data-category="reels">
            <a href="https://www.youtube.com/watch?v=oAMWUerTUH0" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ backgroundImage: 'url(https://img.youtube.com/vi/oAMWUerTUH0/maxresdefault.jpg)' }}></a>
            <div className="portfolio-item-label">Gand Brinus - Reel 4</div>
          </div>

          <div className="portfolio-item" data-category="reels">
            <a href="https://www.youtube.com/watch?v=fjdK5ANw9R4" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ backgroundImage: 'url(https://img.youtube.com/vi/fjdK5ANw9R4/maxresdefault.jpg)' }}></a>
            <div className="portfolio-item-label">Gand Brinus - Reel 5</div>
          </div>

          <div className="portfolio-item" data-category="main">
            <a href="https://www.youtube.com/watch?v=9ZQsFCDPJuw" target="_blank" rel="noopener noreferrer" className="portfolio-link" style={{ backgroundImage: 'url(https://img.youtube.com/vi/9ZQsFCDPJuw/maxresdefault.jpg)' }}></a>
            <div className="portfolio-item-label">Gand Brinus - Vidéo Principale</div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal" id="contact">
        <div className="contact-section">
          <h2>PRÊT À TRANSFORMER VOTRE IMAGE</h2>
          <p>Répondons à votre projet en 24h</p>

          <div className="email-display">byli4mpro@gmail.com</div>
          <br />
          <button className="copy-email-btn" onClick={copyEmail}>Copier le mail</button>
          <div className="copy-feedback" id="copyFeedback">Mail copié</div>
        </div>
      </section>

      <section className="blog-section scroll-reveal" id="blog" style={{ background: 'transparent', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">Blog</h2>
          <div className="blog-grid">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="blog-card">
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '2px solid var(--accent)' }} />
                  <div className="blog-card-content">
                    <span className="date">{new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <a href={`/blog/${article.slug}`} className="read-more" style={{ marginTop: 'auto', display: 'block' }}>Lire →</a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/blog" style={{ display: 'inline-block', padding: '12px 30px', background: 'var(--accent)', color: 'var(--bg)', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', borderRadius: '4px', transition: 'var(--transition)' }} onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-dark)')} onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}>Voir tous les articles</Link>
          </div>
        </div>
      </section>

      <section id="cgv" style={{ background: 'var(--bg)', padding: '4rem 1.5rem', borderTop: '2px solid var(--accent)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">CONDITIONS GÉNÉRALES DE VENTE</h2>

          <div style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            <h3>1. Objet</h3>
            <p>Les présentes conditions régissent toute prestation de création de contenu entre Byli4m et le client professionnel souhaitant promouvoir son établissement, son événement ou son activité en vidéo et en photo.</p>

            <h3>2. Le principe : un seul tournage, tous vos contenus</h3>
            <p>Une session de tournage sur place, déclinée en un ensemble de contenus prêts à publier :</p>
            <ul>
              <li><strong>Vidéo principale</strong> (16:9 ou 4:3) — 40s à 1min. Présentation du lieu, montage complet, musique, sound design.</li>
              <li><strong>Reportage photo</strong> — environ 30 photos retouchées HD.</li>
              <li><strong>Reel récap'</strong> (9:16) — 30s max. Montage dynamique pour Instagram et TikTok.</li>
              <li><strong>Reels plan-séquence</strong> (9:16) — 3 à 4 capsules de 15 à 45s.</li>
            </ul>

            <h3>3. Déroulement de la prestation</h3>
            <p><strong>Pré-production :</strong> Échange sur vos attentes, identité et canaux de diffusion.</p>
            <p><strong>Tournage :</strong> Réalisé en autonomie complète sur une demi-journée ou en immersion lors de votre événement.</p>
            <p><strong>Post-production :</strong> Tri des rushs, montage, étalonnage, sound design. Version de validation avant finalisation.</p>
            <p><strong>Livraison :</strong> Fichiers haute qualité optimisés pour chaque plateforme.</p>

            <h3>4. Tarification</h3>
            <p><strong>Pack complet :</strong> à partir de 950€ — soit près de 25% d'économie par rapport aux mêmes livrables pris à l'unité.</p>
            <p><strong>Chaque projet fait l'objet d'un devis personnalisé gratuit,</strong> ajusté selon le lieu, la durée du tournage et les livrables retenus.</p>
            <p><strong>Collaboration récurrente = tarifs dégressifs.</strong> La vidéo principale ne refait pas : les prestations suivantes se recentrent sur les photos et reels, pour un budget réduit.</p>

            <h3>5. Droits d'utilisation</h3>
            <p>Le Client peut utiliser librement l'ensemble des contenus livrés, sans limite de durée, sur tous ses supports : site web, réseaux sociaux, écrans en point de vente, newsletters — y compris en publicité payante. Aucune licence additionnelle, aucun coût caché.</p>
            <p>Byli4m conserve le droit de présenter les contenus dans son portfolio, sauf accord contraire écrit.</p>

            <h3>6. Paiement</h3>
            <p>Acompte de 50% à la validation du devis ; solde dû avant livraison des fichiers HD. Paiement par virement bancaire.</p>
            <p>Tout retard de paiement entraîne des pénalités calculées sur la base de trois fois le taux d'intérêt légal, ainsi qu'une indemnité forfaitaire de 40€.</p>

            <h3>7. Délais de livraison</h3>
            <p><strong>Photos, vidéo principale et reel récap' :</strong> sous 10 jours ouvrés après le tournage.</p>
            <p><strong>Reels plan-séquence :</strong> sous 14 jours ouvrés.</p>
            <p><strong>Option express :</strong> première sélection de contenus livrée sous 48h pour communiquer à chaud après l'événement.</p>

            <h3>8. Annulation et report</h3>
            <p>Annulation moins de 72h avant tournage : dédommagement forfaitaire de 100€. Report de date possible une fois sans frais.</p>

            <h3>9. Acceptation</h3>
            <p>La validation d'un devis ou la passation d'une commande vaut acceptation pleine et entière des présentes conditions générales de vente.</p>

            <p style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <strong>Basé à Lille — Byli4m, Auto-entrepreneur, Production Audiovisuelle</strong><br />
              SIRET : 95335845400015 · TVA non applicable, art. 293 B du CGI
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>BYLI4MCORPORATE</p>
        <p>RÉALISATEUR VIDÉO & MOTION DESIGN</p>
        <p style={{ marginTop: '1rem' }}>Basés à Lille • Mobiles en France & Europe</p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}><a href="#cgv">Conditions Générales de Vente</a></p>
        <p style={{ fontSize: '0.85rem' }}>© 2026 Byli4mCorporate. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
