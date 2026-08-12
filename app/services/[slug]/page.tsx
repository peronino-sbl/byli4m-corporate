'use client';

import { useParams } from 'next/navigation';

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string || 'service';

  // Contenu pour chaque service
  const serviceContent: { [key: string]: { title: string; image: string; text: string } } = {
    'video-immobiliere': {
      title: 'Vidéo immobilière',
      image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
      text: `Incarner vos équipes, sublimer vos biens et déclencher le coup de cœur

Dans un marché saturé de photos grand-angle sans âme et de visites virtuelles générées par IA, l'immobilier reste avant tout une aventure humaine et émotionnelle.

Pourquoi intégrer la vidéo dans votre stratégie immobilière ?

Aujourd'hui, les acquéreurs et les vendeurs recherchent de la transparence et du vrai. La vidéo offre une expérience vivante et engageante.

Ce format vous permet de :
• Démarcher moins, séduire plus : Attirez naturellement les propriétaires en leur prouvant que vous investissez réellement
• Incarner votre agence : Montrez les visages et la passion de vos collaborateurs
• Gagner un temps précieux : La vidéo pré-qualifie les acheteurs

Les bénéfices concrets pour votre agence

Révéler l'âme des lieux : Nous capturons l'atmosphère unique de chaque bien
Une présence forte sur les réseaux sociaux : Format vidéo privilégié par les algorithmes
Une valeur perçue démultipliée : Positionne votre agence comme premium

Un investissement rentable pour accélérer vos transactions

La vidéo n'est pas une dépense marketing, c'est un accélérateur de business.`,
    },
    'interviews-temoignages': {
      title: 'Interviews & Témoignages vidéo',
      image: '/austin-distel-Hg3BHX6U5jg-unsplash.jpg',
      text: `Donner de la voix et du cœur à votre entreprise

À l'heure où les consommateurs recherchent des preuves de sincérité, rien ne vaut l'authenticité d'un visage, d'une voix et d'une histoire vécue.

La vidéo d'interview est le levier le plus puissant pour humaniser votre marque et rassurer vos futurs clients.

Pourquoi intégrer des témoignages et interviews ?

Les individus n'achètent pas seulement un produit, ils choisissent des personnes en qui ils ont confiance.

Ce format vous permet de :
• Déclencher la confiance : Un client qui raconte son expérience est bien plus persuasif
• Incarner votre marque employeur : Donnez la parole à vos collaborateurs
• Simplifier vos messages complexes : Explliquez votre valeur ajoutée

Les bénéfices concrets pour votre business

Une crédibilité maximale : Finies les citations anonymes
Une connexion émotionnelle forte : Faire ressortir la passion et sincérité
Un contenu polyvalent : Format long + mini-capsules verticales

La touche byli4m : L'art de mettre à l'aise

Notre savoir-faire réside dans la préparation et la technique :
• Une direction d'intervenant bienveillante : Climat chaleureux et naturel
• Le dispositif multi-caméra : Plusieurs angles complémentaires
• Une prise de son & lumière irréprochables : Qualité plateau télé
• Habillage graphique & Sous-titres dynamiques : Engagement jusqu'à la fin

Investissez dans ce qui rassure vraiment vos clients.`,
    },
  };

  const service = serviceContent[slug] || {
    title: slug.replace(/-/g, ' ').toUpperCase(),
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    text: 'Service en cours de développement. Contacter nossa équipe pentru plus d\'informations.',
  };

  return (
    <div style={{ background: '#000', color: '#fff' }}>
      {/* Bannière image */}
      <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
        <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '-1px', color: '#00d9ff' }}>
          {service.title}
        </h1>

        <div style={{ fontSize: '1.05em', color: '#b0b0b0', lineHeight: 1.8, marginBottom: '40px', whiteSpace: 'pre-wrap' }}>
          {service.text}
        </div>

        <a href="mailto:byli4mpro@gmail.com" style={{ display: 'inline-block', padding: '15px 35px', background: '#00d9ff', color: '#000', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', borderRadius: '4px', fontSize: '0.95em', cursor: 'pointer' }}>
          Demander un devis gratuit
        </a>
      </div>
    </div>
  );
}
