export interface Service {
  id: number;
  title: string;
  description: string;
  details?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Audit',
    description:
      'Independent statutory and voluntary audits conducted in accordance with ISA standards, serving industrial groups, financial institutions and commercial enterprises.',
    details: [
      'Risk assessment & audit strategy',
      'Systems & controls evaluation',
      'Individual case studies & analyses',
      'Audit opinion & reporting',
    ],
  },
  {
    id: 2,
    title: 'Accounting Advisory',
    description:
      'Tailor-made support on complex accounting matters — consolidation, IFRS conversion, group reporting and IPO preparation.',
    details: [
      'Consolidation & IFRS conversion',
      'Group reporting & financial close',
      'IPO preparation & transition support',
    ],
  },
  {
    id: 3,
    title: 'Management & Risk Consulting',
    description:
      'Strategic consulting on finance transformation, HR process optimisation and operational performance, paired with risk management and internal audit advisory.',
    details: [
      'Finance transformation',
      'HR process optimisation',
      'Internal control & audit',
      'Information systems security',
      'Actuarial & risk management',
    ],
  },
  {
    id: 4,
    title: 'Transactions & Restructuring',
    description:
      'Independent due diligence, financial evaluation and fraud investigation for banking and non-banking clients across Tunisia, France and the Gulf.',
    details: [
      'Financial, legal, tax & IP/IT due diligence',
      'Financial evaluation & valuation',
      'Fraud investigation',
      'PPP financing advisory',
    ],
  },
];
