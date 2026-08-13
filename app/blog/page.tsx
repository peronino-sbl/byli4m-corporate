'use client';

import { articles } from '@/data/articles';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div style={{ background: '#000' }}>
      <style>{`
        .blog-header {
          background: #000;
          color: white;
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #00d9ff;
        }
        .blog-header h1 {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }
        .blog-header p {
          font-size: 1em;
          color: #b0b0b0;
          font-weight: 500;
        }
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
          background: #000;
        }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        @media (max-width: 1200px) {
          .articles-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .articles-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .articles-grid { grid-template-columns: 1fr; }
        }
        .article-card {
          background: #1a1a1a;
          border: 2px solid #00d9ff;
          overflow: hidden;
          transition: all 0.3s ease;
          text-decoration: none;
          color: #fff;
          display: flex;
          flex-direction: column;
          aspect-ratio: 1 / 1;
        }
        .article-card:hover {
          border-color: #0066cc;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
        }
        .article-image {
          width: 100%;
          height: 55%;
          object-fit: cover;
          background: #f0f0f0;
        }
        .article-content {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .article-card h3 {
          font-size: 0.95em;
          color: #00d9ff;
          margin: 0 0 10px 0;
          font-weight: 700;
          line-height: 1.3;
        }
        .article-card:hover h3 {
          color: #0066cc;
        }
        .article-excerpt {
          color: #b0b0b0;
          font-size: 0.8em;
          line-height: 1.4;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .article-footer {
          font-size: 0.75em;
          color: #666;
        }
        .read-more {
          color: #00d9ff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          transition: all 0.3s;
          font-size: 0.8em;
        }
        .article-card:hover .read-more {
          color: #0066cc;
        }
      `}</style>

      <div className="blog-header">
        <h1>Blog</h1>
        <p>Conseils et stratégies pour votre communication audiovisuelle</p>
      </div>

      <div className="blog-container">
        <div className="articles-grid">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span>{article.readTime} min de lecture</span>
                </div>
                <h3>{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-footer">
                  <span>{new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="read-more">Lire →</span>
                </div>
              </div>
            </Link>
          ))}
          {/* Placeholders pour futurs articles */}
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={`placeholder-${i}`} className="article-card" style={{ opacity: 0.3, cursor: 'default' }}>
              <div style={{ width: '100%', height: '55%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>?</div>
              <div className="article-content">
                <div style={{ fontSize: '0.75em', color: '#666' }}>
                  <span>À venir</span>
                </div>
                <h3>Nouvel article</h3>
                <p className="article-excerpt">Contenu en cours de rédaction...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
