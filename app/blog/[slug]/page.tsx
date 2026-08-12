'use client';

import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <style>{`
        .article-banner {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }
        .article-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 50px 20px;
        }
        .article-header {
          margin-bottom: 40px;
        }
        .article-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
          font-size: 0.9em;
          color: #666;
        }
        .article-category {
          background: #f0f4ff;
          color: #0066cc;
          padding: 6px 12px;
          border-radius: 3px;
          font-weight: 600;
          text-transform: capitalize;
        }
        .article-header h1 {
          font-size: 2.5em;
          color: #000;
          margin: 20px 0;
          font-weight: 700;
          line-height: 1.3;
        }
        .article-content {
          font-size: 1.05em;
          line-height: 1.9;
          color: #333;
        }
        .article-content h2 {
          font-size: 1.8em;
          color: #0066cc;
          margin-top: 40px;
          margin-bottom: 20px;
          font-weight: 700;
          border-bottom: 2px solid #0066cc;
          padding-bottom: 10px;
        }
        .article-content h3 {
          font-size: 1.3em;
          color: #333;
          margin-top: 30px;
          margin-bottom: 15px;
          font-weight: 700;
        }
        .article-content p {
          margin-bottom: 20px;
        }
        .article-content ul {
          margin: 20px 0 20px 30px;
        }
        .article-content li {
          margin-bottom: 12px;
          line-height: 1.8;
        }
        .article-content strong {
          color: #0066cc;
          font-weight: 600;
        }
        .article-footer {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 2px solid #00d9ff;
        }
        .back-link {
          display: inline-block;
          color: #0066cc;
          text-decoration: none;
          font-weight: 700;
          margin-bottom: 40px;
          transition: all 0.3s;
        }
        .back-link:hover {
          transform: translateX(-3px);
        }
        .cta-section {
          background: linear-gradient(135deg, #00d9ff 0%, #0066cc 100%);
          color: white;
          padding: 40px;
          border-radius: 8px;
          text-align: center;
          margin-top: 60px;
        }
        .cta-section h3 {
          font-size: 1.5em;
          margin-bottom: 15px;
          font-weight: 700;
        }
        .cta-section p {
          font-size: 1.1em;
          margin-bottom: 25px;
        }
        .cta-button {
          display: inline-block;
          background: white;
          color: #0066cc;
          padding: 12px 30px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <img src={article.image} alt={article.title} className="article-banner" />

      <div className="article-container">
        <Link href="/blog" className="back-link">← Retour au blog</Link>

        <div className="article-header">
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span>{new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>{article.readTime} min de lecture</span>
            <span>Par {article.author}</span>
          </div>
          <h1>{article.title}</h1>
        </div>

        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="cta-section">
          <h3>Prêt à transformer votre image ?</h3>
          <p>Nos experts en vidéo professionnelle sont là pour vous aider</p>
          <a href="mailto:byli4mpro@gmail.com" className="cta-button">Demander un devis gratuit</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
