'use client';

import { services } from '@/data/services';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#000' }}>
      <Header />
      <style>{`
        .services-header {
          background: #000;
          color: white;
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #00d9ff;
        }
        .services-header h1 {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }
        .services-header p {
          font-size: 1em;
          color: #b0b0b0;
          font-weight: 500;
        }
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
          flex-grow: 1;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        .service-card {
          background: #1a1a1a;
          border: 2px solid #00d9ff;
          padding: 30px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: #fff;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
        }
        .service-card:hover {
          border-color: #0066cc;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
          background: #242424;
        }
        .service-icon {
          font-size: 0;
          margin-bottom: 0;
        }
        .service-card h3 {
          font-size: 1.3em;
          color: #00d9ff;
          margin: 12px 0;
          font-weight: 700;
          line-height: 1.4;
        }
        .service-card:hover h3 {
          color: #0066cc;
        }
        .service-description {
          color: #b0b0b0;
          font-size: 0.95em;
          line-height: 1.6;
          margin-bottom: 15px;
          flex-grow: 1;
        }
        .service-price {
          color: #00d9ff;
          font-weight: 700;
          font-size: 1.1em;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .service-card:hover .service-price {
          color: #0066cc;
        }
        .explore-btn {
          display: inline-block;
          padding: 10px 20px;
          background: #00d9ff;
          color: #000;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 3px;
          transition: all 0.3s;
          align-self: flex-start;
          font-size: 0.9em;
        }
        .service-card:hover .explore-btn {
          background: #0066cc;
          transform: translateX(3px);
        }
      `}</style>

      <div className="services-header">
        <h1>Services</h1>
        <p>Solutions vidéo adaptées à votre secteur d'activité</p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.shortTitle}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <span className="explore-btn">Explorer →</span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
