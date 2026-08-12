'use client';

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Récupère le slug de l'URL
  const slug = params?.slug || 'service';

  // Mappe chaque slug à son contenu
  const videoImmobiliereContent = `Incarner vos équipes, sublimer vos biens et déclencher le coup de cœur

Dans un marché saturé de photos grand-angle sans âme et de visites virtuelles générées par IA, l'immobilier reste avant tout une aventure humaine et émotionnelle. Une vidéo immobilière réussie ne se contente pas de lister des mètres carrés : elle raconte l'histoire d'un lieu, met en lumière le savoir-faire de votre agence et crée une connexion immédiate avec vos futurs acheteurs.

Chez byli4m corporate, nous combinons exigence cinématique et proximité terrain pour transformer vos annonces et votre image de marque en vrais leviers de croissance.

Pourquoi intégrer la vidéo dans votre stratégie immobilière ?

Aujourd'hui, les acquéreurs et les vendeurs recherchent de la transparence et du vrai. Plutôt que de faire défiler des visuels statiques, la vidéo offre une expérience vivante et engageante.

Intégrer la vidéo dans votre communication vous permet de :

• Démarcher moins, séduire plus : Attirez naturellement les propriétaires en leur prouvant que vous investissez réellement dans la mise en valeur de leur bien pour décrocher des mandats exclusifs.
• Incarner votre agence : Montrez les visages, la passion et l'accompagnement sur-mesure de vos collaborateurs pour établir une relation de confiance avant même la première rencontre.
• Gagner un temps précieux : La vidéo pré-qualifie les acheteurs. Finies les visites inutiles, vous ne faites déplacer que des prospects réellement projetés et séduits.

Les bénéfices concrets pour votre agence

1. Révéler l'âme des lieux
Grâce à un travail minutieux sur la lumière naturelle, le cadrage et le rythme du montage, nous capturons l'atmosphère unique de chaque bien : la chaleur d'une pièce de vie, la circulation des espaces, les détails architecturaux.

2. Une présence forte sur les réseaux sociaux
Les algorithmes d'Instagram (Reels), TikTok et LinkedIn privilégient massivement les formats vidéo verticaux (9:16). Nous créons du contenu dynamique et immersif qui capte l'attention dès les premières secondes.

3. Une valeur perçue démultipliée
Proposer une production audiovisuelle léchée à vos clients vendeurs valorise leur patrimoine au juste prix et positionne votre agence comme une référence premium sur votre secteur.

Nos formats de vidéos immobilières

Chaque projet a des objectifs précis. Nous concevons différents formats adaptés à votre stratégie :

• Le Film "Coup de Cœur" (Biens d'exception & Exclusivités) : Une immersion cinématique fluide, esthétique et rythmée pour donner envie de visiter instantanément.
• La Vidéo "Présentation d'Équipe & Inbound" : Un format court et chaleureux (interview, coulisses, philosophie) pour mettre en avant l'humain derrière l'agence et rassurer vos futurs clients.
• Le Format Réseaux Sociaux (Reels / Shorts) : Des vidéos courtes et captivantes présentées par vos agents ou axées sur du storytelling local pour booster votre communauté et votre notoriété de quartier.
• Les Témoignages Clients : Donnez la parole à des vendeurs ou acheteurs satisfaits pour créer la meilleure des preuves sociales.

La touche byli4m : Comment nous sublimons vos projets

Pour réaliser une vidéo qui déclenche des ventes et de la confiance, nous misons sur l'artisanat de l'image et du son :

1. Une mise en scène soignée et naturelle : Nous travaillons l'ambiance, la lumière et l'agencement pour rendre chaque espace accueillant sans dénaturer la réalité.
2. Une qualité d'image cinématique : Cadrage stabilisé, objectifs à grande ouverture pour capter la lumière et étalonnage des couleurs sur-mesure pour un rendu haut de gamme.
3. Un montage dynamique et sur-mesure : Le secret d'une vidéo réussie réside dans son rythme. Nous alternons plans d'ensemble immersifs et détails architecturaux, portés par une musique parfaitement ajustée.
4. Un sound design immersif : Intégration d'ambiances sonores discrètes et de sous-titres graphiques pour une lecture optimale, même sans le son sur smartphone.

Un investissement rentable pour accélérer vos transactions

La vidéo n'est pas une dépense marketing gadget, c'est un accélérateur de business. En combinant storytelling humain et esthétique visuelle, vous marquez les esprits, gagnez des mandats plus facilement et vendez plus rapidement.

Vous souhaitez moderniser l'image de votre agence ou sublimer un mandat d'exception ?`;

  const titles: { [key: string]: string } = {
    'video-immobiliere': 'Vidéo immobilière',
    'interviews-temoignages': 'Interviews et témoignages',
    'video-corporate': 'Vidéo corporate',
    'motion-design-corporate': 'Motion design corporate',
    'video-evenementiel': 'Vidéo événementiel',
    'video-automobile': 'Vidéo automobile',
  };

  const title = titles[slug] || slug.replace(/-/g, ' ').toUpperCase();
  const content = slug === 'video-immobiliere' ? videoImmobiliereContent : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

  return (
    <div style={{ background: '#000', color: '#fff', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '-1px', color: '#00d9ff' }}>
              {title}
            </h1>
            <p style={{ fontSize: '1.05em', color: '#b0b0b0', lineHeight: 1.8, marginBottom: '40px', whiteSpace: 'pre-wrap' }}>
              {content}
            </p>
            <a href="mailto:byli4mpro@gmail.com" style={{ display: 'inline-block', padding: '15px 35px', background: '#00d9ff', color: '#000', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', borderRadius: '4px', fontSize: '0.95em', cursor: 'pointer' }}>
              Demander un devis gratuit
            </a>
          </div>

          <div style={{ aspectRatio: '1 / 1', background: '#1a1a1a', border: '2px solid #00d9ff', borderRadius: '4px', overflow: 'hidden', position: 'sticky', top: '100px' }}>
            <img src="/shalev-cohen-QKZdcN15Cog-unsplash.jpg" alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
