"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain,
  Cloud,
  Code,
  Building2,
  GraduationCap,
  Award,
  Mail,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot-2024.jpg"
                alt="Nandha Kumar Reddy Kaipa"
                fill
                sizes="192px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nandha Kumar Reddy Kaipa</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Student at University of Windsor | Aspiring Data Engineer
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  <GraduationCap className="w-3 h-3 mr-2" /> University of Windsor
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" /> AI & ML
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" /> Python & SQL
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm currently pursuing my Master of Applied Computing with an Artificial Intelligence Stream 
                at the University of Windsor (80% current average), building upon my strong foundation in 
                Computer Science and Engineering from Anna University (8.23 CGPA).
              </p>
              <p>
                Through internships at Med Tour Easy and NULL CLASS, I've gained hands-on experience in 
                data analytics, machine learning model development, and facial recognition systems. 
                I've successfully led projects including cross-lingual SMS phishing detection achieving 
                97.72% accuracy.
              </p>
              <p>
                My technical expertise spans Python, Java, C/C++, MySQL, and machine learning frameworks. 
                Currently seeking internship opportunities starting January 2025 as part of my program 
                requirements.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>kaipa@uwindsor.ca</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 519-567-9924</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <a href="https://linkedin.com/in/kaipanandhakumarreddy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                <a href="https://github.com/Nandha2002" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  GitHub Profile
                </a>
              </div>
            </div>
          </Card>
          {/* Skills Section - ADD THIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5">Python</Badge>
                <Badge variant="outline" className="bg-primary/5">Java</Badge>
                <Badge variant="outline" className="bg-primary/5">C</Badge>
                <Badge variant="outline" className="bg-primary/5">C++</Badge>
                <Badge variant="outline" className="bg-primary/5">JavaScript</Badge>
              </div>
            </Card>
            
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Data & Analytics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5">MySQL</Badge>
                <Badge variant="outline" className="bg-primary/5">Machine Learning</Badge>
                <Badge variant="outline" className="bg-primary/5">TF-IDF</Badge>
                <Badge variant="outline" className="bg-primary/5">Random Forest</Badge>
                <Badge variant="outline" className="bg-primary/5">SVM</Badge>
                <Badge variant="outline" className="bg-primary/5">LSTM</Badge>
              </div>
            </Card>
            
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Systems & Methodologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5">UNIX</Badge>
                <Badge variant="outline" className="bg-primary/5">Linux</Badge>
                <Badge variant="outline" className="bg-primary/5">Agile</Badge>
                <Badge variant="outline" className="bg-primary/5">Waterfall</Badge>
              </div>
            </Card>
            
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Web & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5">HTML</Badge>
                <Badge variant="outline" className="bg-primary/5">CSS</Badge>
                <Badge variant="outline" className="bg-primary/5">Deep Learning</Badge>
                <Badge variant="outline" className="bg-primary/5">Arduino</Badge>
              </div>
            </Card>
          </div>
        </motion.div>
        {/* Work Experience Section - ADD THIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" />
            Work Experience
          </h2>
          <div className="space-y-6">
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Data Analytics Trainee</h3>
                  <p className="text-primary">Med Tour Easy</p>
                  <p className="text-sm text-muted-foreground">Delhi, India</p>
                </div>
                <p className="text-sm text-muted-foreground">Aug 2023 - Sep 2023</p>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span className="flex-1">Collaborated with a Data Analytics professional during a traineeship under a project mentor's guidance to gain hands-on experience in real-world data analysis</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span className="flex-1">Developed a project titled "Analyze Death Age Difference of Right-Hand users with Left-Hand users" using statistical methods and data visualization tools, enhanced understanding of age-related trends across handedness groups</span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5">Python</Badge>
                <Badge variant="outline" className="bg-primary/5">Machine Learning</Badge>
                <Badge variant="outline" className="bg-primary/5">MySQL</Badge>
                <Badge variant="outline" className="bg-primary/5">Data Visualization</Badge>
              </div>
            </Card>

            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Machine Learning Development Intern</h3>
                  <p className="text-primary">NULL CLASS</p>
                  <p className="text-sm text-muted-foreground">Coimbatore, India</p>
                </div>
                <p className="text-sm text-muted-foreground">May 2023 - Jul 2023</p>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span className="flex-1">Completed a development internship focused on facial recognition techniques to strengthen practical skills in model building</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span className="flex-1">Implemented tasks related to "Facial Features" using data processing and pattern recognition methods, improved accuracy in facial feature detection and classification</span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/5">Python</Badge>
                <Badge variant="outline" className="bg-primary/5">SQL</Badge>
                <Badge variant="outline" className="bg-primary/5">Machine Learning</Badge>
                <Badge variant="outline" className="bg-primary/5">Deep Learning</Badge>
              </div>
            </Card>
          </div>
        </motion.div>
        {/* Projects Section - ADD THIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">Phishing Detection Model for SMS/Text Messages</h3>
                <span className="text-xs text-muted-foreground">Jan 2025 - Apr 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">University of Windsor</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                <li>Built a cross-lingual SMS phishing detector using Hindi and Telugu datasets with TF-IDF and preprocessing to enhance multilingual detection accuracy</li>
                <li>Applied ML and Indic language models (SVM, Random Forest, LSTM, Indic BERT, Mu RIL) achieving up to 97.72% accuracy in phishing detection</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="bg-primary/5">Python</Badge>
                <Badge variant="outline" className="bg-primary/5">Machine Learning</Badge>
                <Badge variant="outline" className="bg-primary/5">SQL</Badge>
                <Badge variant="outline" className="bg-primary/5">TF-IDF</Badge>
                <Badge variant="outline" className="bg-primary/5">LSTM</Badge>
              </div>
              <a href="https://github.com/Nandha2002/Group_Project" target="_blank" rel="noreferrer" className="text-primary underline text-sm">View on GitHub</a>
            </Card>

            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">AI and Sensor Driven System for Irrigation</h3>
                <span className="text-xs text-muted-foreground">Jan 2024 - May 2024</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Nehru Institute of Engineering and Technology</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                <li>Developed a smart irrigation system to determine and release required water level in agricultural fields based on real-time parameters soil moisture, humidity, and temperature</li>
                <li>Automated water supply process operating sensor data analysis optimized water usage and improved crop health</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="bg-primary/5">Python</Badge>
                <Badge variant="outline" className="bg-primary/5">Machine Learning</Badge>
                <Badge variant="outline" className="bg-primary/5">SQL</Badge>
                <Badge variant="outline" className="bg-primary/5">Arduino</Badge>
              </div>
              <a href="https://github.com/Nandha2002/Personal_Project2" target="_blank" rel="noreferrer" className="text-primary underline text-sm">View on GitHub</a>
            </Card>

            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">Music Recommendation Using Facial Expression</h3>
                <span className="text-xs text-muted-foreground">Dec 2021 - Jun 2023</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Nehru Institute of Engineering and Technology</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                <li>Designed a system to identify user emotions through facial expressions leveraging Convolutional Neural Networks (CNN) to enable emotion-based interaction</li>
                <li>Integrated Spotify API to fetch and play songs based on detected emotion provided a personalized music experience based on facial cues</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="bg-primary/5">Python</Badge>
                <Badge variant="outline" className="bg-primary/5">Machine Learning</Badge>
                <Badge variant="outline" className="bg-primary/5">HTML</Badge>
                <Badge variant="outline" className="bg-primary/5">CSS</Badge>
                <Badge variant="outline" className="bg-primary/5">CNN</Badge>
              </div>
              <a href="https://github.com/Nandha2002/Personal_Project" target="_blank" rel="noreferrer" className="text-primary underline text-sm">View on GitHub</a>
            </Card>
          </div>
        </motion.div>
        {/* Education Section - ADD THIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Master of Applied Computing, Artificial Intelligence Stream</h3>
                    <p className="text-muted-foreground">University of Windsor • Windsor, Ontario, Canada</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">Jan 2025 - Present</p>
                    <p className="text-sm font-medium text-primary">Current Average: 80%</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-1">
                  <li>Second semester requires a 4- or 8-month internship starting January 2025</li>
                  <li>Advanced Software Engineering (Agile Methodology, Waterfall Methodology)</li>
                  <li>Advanced Database Topics (Hadoop, Relational Databases)</li>
                  <li>Advanced Systems Programming (UNIX and LINUX Commands)</li>
                  <li>Machine Learning (Classification and Regression Algorithms)</li>
                </ul>
              </div>

              <div className="border-t border-primary/10 pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor of Engineering, Computer Science and Engineering</h3>
                    <p className="text-muted-foreground">Anna University • Chennai, India</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">Jul 2020 - Jul 2024</p>
                    <p className="text-sm font-medium text-primary">CGPA: 8.23</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-1">
                  <li>Python Programming (Secured 90% score)</li>
                  <li>Data Structures in C</li>
                  <li>Object Oriented Programming in Java</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
        {/* Certifications Section - ADD THIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-primary" />
            Certifications & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Google Advanced Data Analytics Specialization</h3>
                    <p className="text-sm text-muted-foreground">Coursera</p>
                    <p className="text-sm text-muted-foreground">Issued: Aug 2023</p>
                    <a href="https://www.coursera.org/specializations/google-advanced-data-analytics" target="_blank" rel="noreferrer" className="text-primary underline text-xs">View Certificate</a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Google Data Analytics Specialization</h3>
                    <p className="text-sm text-muted-foreground">Coursera</p>
                    <p className="text-sm text-muted-foreground">Issued: Nov 2022</p>
                    <a href="https://www.coursera.org/professional-certificates/google-data-analytics" target="_blank" rel="noreferrer" className="text-primary underline text-xs">View Certificate</a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">Data Analyst Bootcamp</h3>
                    <p className="text-sm text-muted-foreground">Grow Data Skills</p>
                    <p className="text-sm text-muted-foreground">Issued: Nov 2023</p>
                    <Badge variant="outline" className="bg-primary/5 w-fit">Bootcamp Completed</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        {/* Volunteer Activities Section - ADD THIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20"
        >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Extracurricular & Volunteer Activities
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Field Re-Setter</h3>
                    <p className="text-muted-foreground">First Robotic Competition • Windsor, Canada</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">Mar 2025</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-1">
                  <li>Contributed to the smooth execution of a large-scale robotics competition by promptly resetting the playing field and verifying game element placement</li>
                  <li>Prioritized safety by diligently removing debris and supervising team members and robots during transitions</li>
                  <li>Collaborated effectively with the Field Supervisor and event staff to optimize match transitions and ensure the event progressed efficiently</li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/5">Event Management</Badge>
                  <Badge variant="outline" className="bg-primary/5">Team Collaboration</Badge>
                  <Badge variant="outline" className="bg-primary/5">Safety Protocols</Badge>
                  <Badge variant="outline" className="bg-primary/5">Robotics</Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
}