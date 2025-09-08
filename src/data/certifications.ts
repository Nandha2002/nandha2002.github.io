export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
  {
    name: "Google Advanced Data Analytics Specialization",
    image: "/certifications/google-advanced-data-analytics.png", // You'll need to add this image
    link: "#", // Add your actual Coursera certificate link
    issuedBy: "Google via Coursera",
    issuedDate: "August 2023",
  },
  {
    name: "Google Data Analytics Specialization",
    image: "/certifications/google-data-analytics.png", // You'll need to add this image
    link: "#", // Add your actual Coursera certificate link
    issuedBy: "Google via Coursera",
    issuedDate: "November 2022",
  },
  {
    name: "Data Analyst Bootcamp",
    image: "/certifications/grow-data-skills.png", // You'll need to add this image
    link: "#", // Add your actual certificate link if available
    issuedBy: "Grow Data Skills",
    issuedDate: "November 2023",
  },
];