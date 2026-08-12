'use client';

import Link from 'next/link';

const navItemStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '0.9rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  transition: 'all 0.3s',
  paddingBottom: '4px',
  borderBottom: '2px solid transparent',
  cursor: 'pointer',
};

export default function Header() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#00d9ff';
    e.currentTarget.style.borderBottomColor = '#00d9ff';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#fff';
    e.currentTarget.style.borderBottomColor = 'transparent';
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
        <div style={{ height: '45px', display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <img src="/byli4m.jpeg" alt="Byli4mCorporate" style={{ height: '45px', width: 'auto', cursor: 'pointer' }} />
          </Link>
        </div>
        <nav style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <Link href="/" style={navItemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Accueil</Link>
          <Link href="/services" style={navItemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Services</Link>
          <Link href="/blog" style={navItemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Blog</Link>
          <a href="mailto:byli4mpro@gmail.com" style={navItemStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
