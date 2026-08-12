'use client';

import { articles } from '@/data/articles';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="root">
      <style>{`
        .blog-hero {
          background: linear-gradient(135deg, #00d9ff 0%, #0066cc 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
        }
        .blog-hero h1 {
          font-size: 3em;
          font-weight: 700;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        .blog-hero p {
          font-size: 1.2em;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 500;
        }
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }
        .article-card {
          background: white;
          border: 2px solid #00d9ff;
          overflow: hidden;
          transition: all 0.3s ease;
          text-decoration: none;
          color: #333;
          display: flex;
          flex-direction: column;
        }
        .article-card:hover {
          border-color: #0066cc;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
        }
        .article-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          background: #f0f0f0;
        }
        .article-content {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .article-meta {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
          font-size: 0.85em;
          color: #666;
        }
        .article-category {
          background: #f0f4ff;
          color: #0066cc;
          padding: 4px 10px;
          border-radius: 3px;
          font-weight: 600;
          text-transform: capitalize;
        }
        .article-card h3 {
          font-size: 1.3em;
          color: #000;
          margin: 12px 0;
          font-weight: 700;
          line-height: 1.4;
          flex-grow: 1;
        }
        .article-excerpt {
          color: #666;
          font-size: 0.95em;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        .article-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #eee;
          font-size: 0.85em;
          color: #999;
        }
        .read-more {
          color: #00d9ff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s;
        }
        .article-card:hover .read-more {
          color: #0066cc;
          transform: translateX(3px);
        }
      `}</style>

      <div className="blog-hero">
        <h1>Blog</h1>
        <p>Conseils, stratégies et guides pour transformer votre communication audiovisuelle</p>
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
        </div>
      </div>
    </div>
  );
}
