export type CourseCategory = {
  title: string;
  courses: string[];
};

export const undergraduateCourseCategories: CourseCategory[] = [
  {
    title: 'Cybersecurity, Security, and Digital Forensics',
    courses: [
      'Cybersecurity Principles and Foundations',
      'Service for Cybersecurity',
      'Security Experimentation',
      'Network Security and Protocols',
      'Cybersecurity Operations and Analytics',
      'Cyber-Crime Investigation and Forensics',
      'IoT, Cloud, and Mobile Security',
      'Web Application Security',
      'Network Security',
      'Information Security and Assurance',
      'Cybersecurity Experimentation',
      'Digital Forensics',
      'Digital Forensics and Data Recovery',
      'Advanced Digital Forensics',
      'Mobile Forensics',
      'Washington, D.C. Cyber Seminar',
    ],
  },
  {
    title: 'Governance, Management, Law, and Professional Practice',
    courses: [
      'Security, Laws, Ethics, and Policies',
      'Project Management',
      'Business Analysis',
      'Senior Seminar',
    ],
  },
  {
    title: 'Information Technology, Networking, and Systems',
    courses: [
      'Introduction to Information Science and Technology',
      'Introduction to Information Technology',
      'Data Communications',
      'Networking Essentials',
      'Windows Server Administration',
      'Virtual Computing',
      'Wireless Technologies',
    ],
  },
  {
    title: 'Research, Internship, Capstone, and Thesis',
    courses: [
      'Research in Cybersecurity',
      'Internships',
      'Senior Design Project',
      'Senior Capstone',
      'Master’s Thesis Research',
    ],
  },
];

export const graduateCourses: string[] = [
  'Enterprise Cybersecurity Management',
  'Information Security and Assurance',
  'Cybersecurity Experimentation',
  'Digital Forensics',
  'Project Management',
  'Master’s Thesis Research',
];
