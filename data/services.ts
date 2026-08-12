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
    slug: 'video-corporate',
    title: 'Vidéo corporate pour entreprises',
    shortTitle: 'Vidéo corporate',
    metaDescription: 'Vidéos corporate percutantes pour présenter votre entreprise, vos valeurs et votre histoire.',
    description: 'Présentez votre entreprise avec une vidéo corporate professionnelle. Parfait pour le site web, LinkedIn et recrutement.',
    benefits: [
      'Renforce la crédibilité',
      'Améliore le recrutement',
      'Valide votre légitimité',
      'Boost votre présence online',
      'Longue durée de vie',
    ],
    deliverables: [
      'Vidéo présentation 90-120 secondes',
      'Reportage photo équipe',
      'Reel récap 30 secondes',
      'Animations texte et logo',
      'Sous-titres intégrés',
    ],
    price: 'À partir de 750€',
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    icon: '🏢',
  },
  {
    id: '4',
    slug: 'motion-design-corporate',
    title: 'Motion design pour présenter vos données',
    shortTitle: 'Motion design corporate',
    metaDescription: 'Animations motion design pour présenter vos chiffres, processus et concepts complexes de façon attractive.',
    description: 'Rendez vos données vivantes avec du motion design professionnel. Parfait pour expliquer ou présenter.',
    benefits: [
      'Capte l\'attention immédiatement',
      'Explique les concepts complexes',
      'Augmente l\'engagement vidéo',
      'Crée une identité visuelle',
      'Mémorisable et partageable',
    ],
    deliverables: [
      'Animation motion design 30-60 secondes',
      'Storyboard présenté avant',
      'Couleurs et style personnalisés',
      'Voix off et musique incluses',
      'Fichiers modifiables fournis',
    ],
    price: 'À partir de 800€',
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    icon: '✨',
  },
  {
    id: '5',
    slug: 'video-evenementiel',
    title: 'Vidéo événementiel, conférences, séminaires',
    shortTitle: 'Vidéo événementiel',
    metaDescription: 'Filmez et montez vos événements, conférences et séminaires en vidéo professionnelle.',
    description: 'Immortalisez vos événements avec une couverture vidéo professionnelle. Tournage complet et montage rapide.',
    benefits: [
      'Conserve vos événements',
      'Crée du contenu réutilisable',
      'Attire de futurs participants',
      'Renforce la notoriété',
      'Livraison rapide et dynamique',
    ],
    deliverables: [
      'Tournage complet de l\'événement',
      'Montage 3-5 minutes percutant',
      'Reel court pour réseaux sociaux',
      'Highlights 60 secondes',
      'Fichier brut partiellement trié',
    ],
    price: 'À partir de 950€',
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    icon: '🎬',
  },
  {
    id: '6',
    slug: 'video-automobile',
    title: 'Vidéo automobile pour concessionnaires',
    shortTitle: 'Vidéo automobile',
    metaDescription: 'Mettez en avant vos véhicules avec des vidéos de présentation automobile professionnelles.',
    description: 'Présentez vos véhicules en beauté avec une vidéo automobile professionnelle. Tournage et montage spécialisés.',
    benefits: [
      'Montre le véhicule sous tous les angles',
      'Crée le désir d\'achat',
      'Réduit les questions sans fondement',
      'Boost vos ventes',
      'Stand out de la concurrence',
    ],
    deliverables: [
      'Vidéo présentation véhicule 45-60 secondes',
      'Intérieur et extérieur couverts',
      'Plans drone si possible',
      'Reel court 30 secondes',
      'Diaporama photo 20-25 images',
    ],
    price: 'À partir de 600€',
    image: '/shalev-cohen-QKZdcN15Cog-unsplash.jpg',
    icon: '🚗',
  },
];
