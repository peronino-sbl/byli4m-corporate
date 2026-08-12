'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(0, 0, 0, 0.98)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid #00d9ff',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
      }}>
        <div className="logo" style={{ height: '45px', display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <img src="/byli4m.jpeg" alt="Byli4mCorporate" style={{ height: '45px', width: 'auto' }} />
          </Link>
        </div>
        <nav style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px', transition: 'all 0.3s', borderBottom: '2px solid transparent' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#00d9ff'; e.currentTarget.style.borderBottomColor = '#00d9ff'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = 'transparent'; }}>Accueil</Link>
          <Link href="/services" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px', transition: 'all 0.3s', borderBottom: '2px solid transparent' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#00d9ff'; e.currentTarget.style.borderBottomColor = '#00d9ff'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = 'transparent'; }}>Services</Link>
          <Link href="/blog" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px', transition: 'all 0.3s', borderBottom: '2px solid transparent' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#00d9ff'; e.currentTarget.style.borderBottomColor = '#00d9ff'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = 'transparent'; }}>Blog</Link>
          <Link href="/#contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px', transition: 'all 0.3s', borderBottom: '2px solid transparent' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#00d9ff'; e.currentTarget.style.borderBottomColor = '#00d9ff'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = 'transparent'; }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
