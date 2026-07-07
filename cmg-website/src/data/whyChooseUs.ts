export interface Reason {
  id: number;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    id: 1,
    title: 'Deep understanding',
    description:
      'A thorough grasp of our clients\u2019 organisation, procedures and governance structures.',
  },
  {
    id: 2,
    title: 'International & national expertise',
    description:
      'Audit execution under ISA standards by a multicultural team trained at leading French and Tunisian institutions.',
  },
  {
    id: 3,
    title: 'High-quality service',
    description:
      'Teams recruited from top business schools in Tunisia and France, ensuring rigorous, high-calibre delivery.',
  },
  {
    id: 4,
    title: 'Materiality focus',
    description:
      'Expertise concentrated on the significant and material aspects of each engagement \u2014 no wasted effort.',
  },
  {
    id: 5,
    title: 'Continuous improvement',
    description:
      'A genuine motivation to support our clients\u2019 ongoing development and operational excellence.',
  },
];
