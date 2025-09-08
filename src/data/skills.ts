import { Brain, Cloud, Code, Terminal } from "lucide-react";
import { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Facial Recognition",
      "CNN",
      "SVM",
      "Random Forest",
      "LSTM",
      "Indic BERT",
      "Classification",
      "Regression",
    ],
  },
  {
    name: "Programming & Development",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "JavaScript",
      "HTML",
      "CSS",
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithm Design",
    ],
  },
  {
    name: "Data & Databases",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "MySQL",
      "SQL",
      "Data Analysis",
      "Statistical Methods",
      "Data Visualization",
      "Hadoop",
      "Relational Databases",
      "Data Processing",
      "TF-IDF",
    ],
  },
  {
    name: "Systems & Methodologies",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "UNIX",
      "Linux",
      "Arduino",
      "IoT",
      "Agile Methodology",
      "Waterfall Model",
      "Systems Programming",
      "Sensor Integration",
      "API Integration",
    ],
  },
];