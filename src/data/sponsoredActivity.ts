export type SponsoredActivityRecord = {
  title: string;
  role: string | null;
  sponsor: string | null;
  amount: string | null;
  period: string | null;
  description: string;
};

export const sponsoredActivities: SponsoredActivityRecord[] = [
  {
    title: 'Georgia Educators Networking to Revolutionize and Transform Education (GENERATE)',
    role: 'Co-Principal Investigator',
    sponsor: 'U.S. Department of Education',
    amount: '$9,146,065',
    period: '2022 to 2025',
    description: 'Developed and managed statewide computer science and cybersecurity curriculum, professional learning, and credential development for Georgia educators.',
  },
  {
    title: 'Liberal Education and America’s Promise, Advanced Forensics Project',
    role: 'Faculty participant',
    sponsor: 'Association of American Colleges & Universities (AAC&U)',
    amount: '$5,000',
    period: '2019 and 2020',
    description: 'Supported advanced digital-forensics learning and applied instructional work.',
  },
  {
    title: 'Erasmus+ International Faculty Mobility',
    role: 'Erasmus+ Scholar',
    sponsor: 'European Commission',
    amount: '$10,000',
    period: '2018',
    description: 'Supported invited teaching and international academic exchange in privacy, cyber forensics, social media, and information security in Warsaw, Poland.',
  },
  {
    title: 'Southeastern Advanced Cybersecurity Education Consortium (ACE), National Science Foundation',
    role: 'Program Associate, GA State Lead',
    sponsor: 'National Science Foundation',
    amount: '$1,800,000',
    period: '2013 to 2017',
    description: 'Supported ACE Consortium training, curriculum, and cyber forensics workforce-pipeline development activities in collaboration with consortium partners.',
  },
];
