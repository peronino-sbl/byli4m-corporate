export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  price: string;
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'video-immobiliere',
    title: 'Vidéo immobilière pour agences et propriétaires',
    shortTitle: 'Vidéo immobilière',
    metaDescription: 'Vidéos professionnelles pour mettre en valeur vos biens immobiliers et augmenter vos mandats exclusifs.',
    description: 'Augmentez vos mandats exclusifs avec des vidéos immobilières professionnelles. Tournage, montage et livrables prêts à publier en 10 jours.',
    benefits: [
      'Augmente l\'intérêt des acheteurs',
      'Réduit le temps de visite inutile',
      'Montre l\'âme de la propriété',
      'Différencie votre agence',
      'Crée du coup de cœur digital',
    ],
    deliverables: [
      'Vidéo principale 60-90 secondes',
      'Reportage photo 30-40 images',
      'Reel récap 30 secondes',
      '2-3 reels plan-séquence verticaux',
      'Fichiers optimisés tous formats',
    ],
    price: 'À partir de 550€',
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    icon: '',
  },
  {
    id: '2',
    slug: 'interviews-temoignages',
    title: 'Interviews et témoignages client',
    shortTitle: 'Interviews et témoignages',
    metaDescription: 'Créez de l\'authenticité avec des vidéos d\'interviews et témoignages clients professionnels.',
    description: 'Captez l\'authenticité avec des interviews et témoignages vidéo professionnels. Parfait pour humaniser votre marque.',
    benefits: [
      'Crée de la confiance instantanée',
      'Humanise votre marque',
      'Convertit les prospects',
      'Valide votre expertise',
      'Contenu réutilisable longtemps',
    ],
    deliverables: [
      'Interview 5-10 minutes brute',
      'Montage court 60-90 secondes',
      'Reel court 30 secondes',
      'Sous-titres français et anglais',
      'Fichiers sources et montés',
    ],
    price: 'À partir de 400€',
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    icon: '',
  },
  {
    id: '3',
    slug: 'marque-personnelle',
    title: 'Marque personnelle et personal branding',
    shortTitle: 'Marque personnelle',
    metaDescription: 'Développez votre personal branding et établissez une marque personnelle forte et authentique.',
    description: 'Construisez votre marque personnelle avec une stratégie et une identité visuelle cohérentes.',
    benefits: [
      'À compléter',
    ],
    deliverables: [
      'À compléter',
    ],
    price: 'À compléter',
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    icon: '👤',
  },
];
