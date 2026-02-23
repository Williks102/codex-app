export const adminStats = [
  { label: 'Billets vendus (30j)', value: '12 480', trend: '+18%' },
  { label: 'CA total', value: '428 900€', trend: '+12%' },
  { label: 'Événements actifs', value: '86', trend: '+9%' },
  { label: 'Demandes support', value: '34', trend: '-6%' }
];

export const organizerStats = [
  { label: 'Événements publiés', value: '14', trend: '+2 ce mois' },
  { label: 'Taux de remplissage', value: '72%', trend: '+5%' },
  { label: 'Revenus nets', value: '84 230€', trend: '+11%' },
  { label: 'Pass live vendus', value: '1 482', trend: '+20%' }
];

export const buyerStats = [
  { label: 'Billets achetés', value: '9', trend: '3 à venir' },
  { label: 'Lives suivis', value: '6', trend: '2 ce mois' },
  { label: 'Budget annuel', value: '540€', trend: 'optimisé' },
  { label: 'Points fidélité', value: '1 280', trend: '+240 pts' }
];

export const adminModerationQueue = [
  {
    event: 'Nuit Electro Riviera',
    organizer: 'BlueWave Events',
    status: 'En revue',
    risk: 'Moyen'
  },
  {
    event: 'Crypto Finance Expo',
    organizer: 'BlockVision',
    status: 'Validation KYC',
    risk: 'Faible'
  },
  {
    event: 'Festival Urbain 360',
    organizer: 'Pulse Factory',
    status: 'Signalement reçu',
    risk: 'Élevé'
  }
];

export const organizerEvents = [
  {
    name: 'Afro Vibes Festival',
    sold: '2 450 / 3 000',
    revenue: '110 250€',
    stream: 'Activé'
  },
  {
    name: 'Tech Summit Africa',
    sold: '1 120 / 1 500',
    revenue: '67 200€',
    stream: 'Activé'
  },
  {
    name: 'Jazz on the River',
    sold: '740 / 1 000',
    revenue: '22 200€',
    stream: 'Inactif'
  }
];

export const buyerTickets = [
  {
    event: 'Afro Vibes Festival',
    date: '12 Juin 2026',
    type: 'VIP',
    access: 'QR prêt'
  },
  {
    event: 'Tech Summit Africa',
    date: '27 Juillet 2026',
    type: 'Standard',
    access: 'QR prêt'
  },
  {
    event: 'Jazz on the River',
    date: '3 Août 2026',
    type: 'Groupe',
    access: 'Paiement en attente'
  }
];
