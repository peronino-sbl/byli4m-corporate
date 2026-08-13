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
    title: 'Personal Branding pour indépendants : Devenez la référence de votre secteur',
    shortTitle: 'Marque personnelle',
    metaDescription: 'Construisez votre marque personnelle en vidéo pour attirer les bons clients et assoir votre autorité. Parfait pour indépendants et consultants.',
    description: 'Quand on est indépendant, les clients achètent une personne. Devenez la référence de votre secteur avec du contenu vidéo incarné, esthétique et percutant.',
    benefits: [
      'Inspirer une confiance immédiate auprès de vos prospects',
      'Attirer naturellement les bons clients (Inbound Marketing)',
      'Sortir de la guerre des prix par le haut',
      'Se créer un patrimoine de marque réutilisable',
      'Humaniser votre expertise et votre singularité',
      'Intégrer un réseau d\'entrepreneurs et créateurs',
    ],
    deliverables: [
      'Définition de votre ligne éditoriale & stratégie de contenu',
      'Tournage immersif et guidé avec matériel professionnel',
      'Post-production cinématique (montage, sous-titres, étalonnage)',
      'Fichiers optimisés pour tous formats (Reels, TikTok, LinkedIn, site web)',
      'Accompagnement calendrier de diffusion',
      'Option crosspost sur notre compte 190k+ followers',
    ],
    price: 'Sur devis personnalisé',
    image: '/kate-oseen-XQKUIPjPl-s-unsplash.jpg',
    icon: '👤',
  },
];
