export const events = [
  {
    id: 'afro-vibes-festival',
    title: 'Afro Vibes Festival',
    city: 'Paris',
    date: '12 Juin 2026',
    category: 'Festival',
    priceFrom: 45,
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
    livestream: true
  },
  {
    id: 'tech-summit-africa',
    title: 'Tech Summit Africa',
    city: 'Lyon',
    date: '27 Juillet 2026',
    category: 'Conférence',
    priceFrom: 60,
    image:
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    livestream: true
  },
  {
    id: 'jazz-on-the-river',
    title: 'Jazz on the River',
    city: 'Bordeaux',
    date: '3 Août 2026',
    category: 'Concert',
    priceFrom: 30,
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    livestream: false
  }
];

export const livestreamPlans = [
  {
    name: 'Pass Live 24h',
    price: 9,
    perks: ['Accès web + mobile', 'Qualité HD', 'Replay 24h']
  },
  {
    name: 'Pass Premium',
    price: 19,
    perks: ['Multi-caméras', 'Chat exclusif', 'Replay 30 jours']
  }
];
