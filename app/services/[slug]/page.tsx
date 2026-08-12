'use client';

import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#000' }}>
      <Header />
      <style>{`
        .service-banner {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }
        .service-header-section {
          background: #000;
          color: white;
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #00d9ff;
        }
        .service-header-section h1 {
          font-size: 2em;
          font-weight: 700;
          margin-bottom: 0;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }
        .service-content-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 50px 20px;
          flex-grow: 1;
        }
        .service-intro {
          font-size: 1.2em;
          color: #b0b0b0;
          line-height: 1.8;
          margin-bottom: 50px;
          padding: 30px;
          border-left: 4px solid #00d9ff;
          background: #1a1a1a;
          border-radius: 4px;
        }
        .service-section {
          margin-bottom: 50px;
        }
        .service-section h2 {
          font-size: 1.8em;
          color: #00d9ff;
          margin-bottom: 25px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        .benefit-item {
          background: #1a1a1a;
          padding: 20px;
          border: 2px solid #00d9ff;
          border-radius: 4px;
          color: #fff;
          font-weight: 600;
        }
        .benefit-item::before {
          content: '✓ ';
          color: #00d9ff;
          margin-right: 10px;
          font-weight: 700;
        }
        .deliverables-list {
          background: #1a1a1a;
          padding: 30px;
          border: 2px solid #00d9ff;
          border-radius: 4px;
        }
        .deliverables-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .deliverables-list li {
          padding: 12px 0;
          color: #b0b0b0;
          border-bottom: 1px solid #333;
          font-weight: 500;
        }
        .deliverables-list li:last-child {
          border-bottom: none;
        }
        .deliverables-list li::before {
          content: '▸ ';
          color: #00d9ff;
          margin-right: 10px;
          font-weight: bold;
        }
        .price-section {
          background: linear-gradient(135deg, #00d9ff 0%, #0066cc 100%);
          color: white;
          padding: 40px;
          border-radius: 4px;
          margin-bottom: 50px;
          text-align: center;
        }
        .price-section h3 {
          font-size: 1.2em;
          margin-bottom: 10px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .price-section .price {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-button {
          display: inline-block;
          padding: 12px 30px;
          background: white;
          color: #0066cc;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 4px;
          transition: all 0.3s;
          border: 2px solid transparent;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        .back-link {
          display: inline-block;
          color: #00d9ff;
          text-decoration: none;
          font-weight: 700;
          margin-bottom: 30px;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.9em;
        }
        .back-link:hover {
          transform: translateX(-3px);
        }
      `}</style>

      <img src={service.image} alt={service.title} className="service-banner" />

      <div className="service-header-section">
        <h1>{service.title}</h1>
      </div>

      <div className="service-content-container">
        <Link href="/services" className="back-link">← Retour aux services</Link>

        <div className="service-intro">
          {service.description}
        </div>

        <div className="service-section">
          <h2>Avantages</h2>
          <div className="benefits-grid">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="service-section">
          <h2>Livrables</h2>
          <div className="deliverables-list">
            <ul>
              {service.deliverables.map((deliverable, idx) => (
                <li key={idx}>{deliverable}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="price-section">
          <h3>Tarification</h3>
          <div className="price">{service.price}</div>
          <div className="cta-buttons">
            <a href="mailto:byli4mpro@gmail.com" className="cta-button">Demander un devis</a>
            <a href="/" className="cta-button" style={{ background: 'transparent', color: 'white', border: '2px solid white' }}>Retour accueil</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
