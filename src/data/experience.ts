export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Master's Student - Artificial Intelligence Stream",
    company: "University of Windsor",
    location: "Windsor, Ontario, Canada",
    startDate: "Jan 2025",
    endDate: "Present",
    achievements: [
      {
        text: "Pursuing Master of Applied Computing with specialization in Artificial Intelligence, maintaining 80% average in advanced coursework."
      },
      {
        text: "Completed advanced coursework in Software Engineering (Agile & Waterfall methodologies), Database Topics (Hadoop, Relational Databases), and Systems Programming (UNIX/LINUX)."
      },
      {
        text: "Actively engaged in Machine Learning coursework focusing on Classification and Regression Algorithms with hands-on implementation."
      },
      {
        text: "Preparing for upcoming 4-8 month internship opportunity starting January 2025 as part of program requirements."
      }
    ],
    skills: [
      { name: "Machine Learning" },
      { name: "Agile Methodology" },
      { name: "Hadoop" },
      { name: "UNIX/LINUX" },
      { name: "Advanced Database Systems" },
      { name: "Software Engineering" }
    ],
  },
  {
    title: "Data Analytics Trainee",
    company: "Med Tour Easy",
    location: "Delhi, India",
    startDate: "Aug 2023",
    endDate: "Sep 2023",
    achievements: [
      {
        text: "Collaborated with Data Analytics professionals during intensive traineeship under project mentor guidance to gain hands-on experience in real-world data analysis."
      },
      {
        text: "Developed comprehensive project 'Analyze Death Age Difference of Right-Hand users with Left-Hand users' using advanced statistical methods and data visualization tools."
      },
      {
        text: "Enhanced understanding of age-related trends across handedness groups through rigorous statistical analysis and pattern recognition."
      },
      {
        text: "Applied Python programming and MySQL database management to process and analyze large datasets effectively."
      }
    ],
    skills: [
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "MySQL" },
      { name: "Statistical Analysis" },
      { name: "Data Visualization" },
      { name: "Data Processing" }
    ],
  },
  {
    title: "Machine Learning Development Intern",
    company: "NULL CLASS",
    location: "Coimbatore, India",
    startDate: "May 2023",
    endDate: "Jul 2023",
    achievements: [
      {
        text: "Completed comprehensive development internship focused on facial recognition techniques to strengthen practical skills in advanced model building and deployment."
      },
      {
        text: "Implemented complex tasks related to 'Facial Features' detection using sophisticated data processing and pattern recognition methods."
      },
      {
        text: "Improved accuracy in facial feature detection and classification through optimization of machine learning algorithms and deep learning techniques."
      },
      {
        text: "Gained hands-on experience with computer vision libraries and frameworks for real-world application development."
      }
    ],
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Computer Vision" },
      { name: "Facial Recognition" },
      { name: "Pattern Recognition" }
    ],
  },
];

export const previousExperiences: Experience[] = [
  {
    title: "Field Re-Setter Volunteer",
    company: "First Robotic Competition",
    location: "Windsor, Canada",
    startDate: "Mar 2025",
    endDate: "Mar 2025",
    achievements: [],
    skills: [],
  },
];