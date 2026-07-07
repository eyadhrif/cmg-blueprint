export interface ClientSector {
  name: string;
  clients: string[];
}

export const clientSectors: ClientSector[] = [
  {
    name: 'Industrial',
    clients: [
      'Air Liquide',
      'Carrefour',
      'Accor',
      'Cementos Portland Valderrivas',
      'ICF',
      'Sancella',
      'Adwya',
      'Sotradies',
    ],
  },
  {
    name: 'Financial',
    clients: ['Banque Centrale de Tunisie', 'Banque Centrale de Libye', 'BTK'],
  },
  {
    name: 'Oil & Gas',
    clients: ['ExxonMobil'],
  },
  {
    name: 'Telecom / Transport / Tourism',
    clients: ['Ooredoo (Qatar Telecom)'],
  },
  {
    name: 'Other sectors',
    clients: ['Further references available on request'],
  },
];
