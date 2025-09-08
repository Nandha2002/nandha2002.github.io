export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Master of Applied Computing - Artificial Intelligence Stream",
  school: "University of Windsor",
  location: "Windsor, Ontario, Canada",
  startDate: "January 2025",
  endDate: "Present",
  gpa: "80%",
  honors: [
    { name: "Current Average: 80%" },
    { name: "Internship Program Participant" },
  ],
  activities: [
    { name: "Advanced Software Engineering (Agile & Waterfall Methodology)" },
    { name: "Advanced Database Topics (Hadoop, Relational Databases)" },
    { name: "Advanced Systems Programming (UNIX and LINUX Commands)" },
    { name: "Machine Learning (Classification and Regression Algorithms)" },
    { name: "Field Re-Setter Volunteer - First Robotic Competition" },
  ],
};

export const previousEducation: Education = {
  degree: "Bachelor of Engineering - Computer Science and Engineering",
  school: "Anna University",
  location: "Chennai, India",
  startDate: "July 2020",
  endDate: "July 2024",
  gpa: "8.23",
  honors: [
    { name: "CGPA: 8.23/10" },
    { name: "Python Programming Excellence (90% score)" },
  ],
  activities: [
    { name: "Python Programming (Secured 90% score)" },
    { name: "Data Structures in C" },
    { name: "Object Oriented Programming in Java" },
  ],
};