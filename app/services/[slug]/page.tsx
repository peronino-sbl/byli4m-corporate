export default function ServicePage({ params }: { params: { slug: string } }) {
  const serviceNames: { [key: string]: string } = {
    'video-immobiliere': 'Vidéo immobilière',
    'interviews-temoignages': 'Interviews et témoignages',
    'video-corporate': 'Vidéo corporate',
    'motion-design-corporate': 'Motion design corporate',
    'video-evenementiel': 'Vidéo événementiel',
    'video-automobile': 'Vidéo automobile',
  };

  const title = serviceNames[params.slug] || 'Service';

  return (
    <div style={{ background: '#000', color: '#fff', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Texte à gauche */}
          <div>
            <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '-1px' }}>
              {title}
            </h1>
            <p style={{ fontSize: '1.1em', color: '#b0b0b0', lineHeight: 1.8, marginBottom: '20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p style={{ fontSize: '1.1em', color: '#b0b0b0', lineHeight: 1.8, marginBottom: '20px' }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ fontSize: '1.1em', color: '#b0b0b0', lineHeight: 1.8, marginBottom: '30px' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a href="mailto:byli4mpro@gmail.com" style={{ display: 'inline-block', padding: '12px 30px', background: '#00d9ff', color: '#000', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', borderRadius: '4px' }}>
              Demander un devis
            </a>
          </div>

          {/* Image carrée à droite */}
          <div style={{ aspectRatio: '1 / 1', background: '#1a1a1a', border: '2px solid #00d9ff', borderRadius: '4px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/shalev-cohen-QKZdcN15Cog-unsplash.jpg" alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
