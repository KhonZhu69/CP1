
'use client';

import * as React from 'react';
import {
  Code2, Cloud, BrainCircuit, ShieldCheck, Palette, Briefcase, CheckCircle2, ArrowRightCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SubService {
  title: string;
  description: string;
}

interface ServiceCategory {
  title: string;
  icon: React.ElementType;
  services: SubService[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Software Development Services",
    icon: Code2,
    services: [
      { title: "Custom Software Development", description: "Tailored applications designed to fit your business goals." },
      { title: "Web Application Development", description: "Scalable, responsive, and secure web apps using modern frameworks." },
      { title: "Mobile App Development", description: "Native and cross-platform apps for iOS and Android." },
      { title: "Desktop Application Development", description: "Robust desktop solutions for specialized enterprise needs." },
      { title: "SaaS Product Development", description: "End-to-end Software-as-a-Service solutions built for scalability." },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    services: [
      { title: "Cloud Migration & Integration", description: "Move your infrastructure to AWS, Azure, or Google Cloud seamlessly." },
      { title: "DevOps Automation", description: "CI/CD pipelines, containerization, and cloud deployment optimization." },
      { title: "Infrastructure as Code (IaC)", description: "Automated, reliable, and repeatable cloud environments." },
      { title: "Application Monitoring & Support", description: "Continuous monitoring and performance optimization." },
    ]
  },
  {
    title: "AI, Data & Automation",
    icon: BrainCircuit,
    services: [
      { title: "AI & Machine Learning Solutions", description: "Intelligent systems for automation, analytics, and decision support." },
      { title: "Natural Language Processing (NLP)", description: "Chatbots, sentiment analysis, and knowledge graph solutions." },
      { title: "Data Analytics & Visualization", description: "Data-driven dashboards and insights using tools like Power BI or Tableau." },
      { title: "Process Automation (RPA)", description: "Automate repetitive business tasks to improve efficiency." },
    ]
  },
  {
    title: "Cybersecurity & Compliance",
    icon: ShieldCheck,
    services: [
      { title: "Vulnerability Assessment & Penetration Testing", description: "Identify and mitigate security weaknesses in your systems." },
      { title: "Data Privacy & Compliance Consulting", description: "Navigate regulations like ISO 27001, GDPR, and more." },
      { title: "Security Implementation for Cloud & Applications", description: "Implement robust security measures for your infrastructure." },
      { title: "Incident Response & Risk Management Planning", description: "Prepare for and respond to security incidents effectively." },
    ]
  },
  {
    title: "UI/UX & Product Design",
    icon: Palette,
    services: [
      { title: "User Experience (UX) Research & Design", description: "Create intuitive and user-centered product experiences." },
      { title: "User Interface (UI) Design & Prototyping", description: "Design visually appealing and functional interfaces." },
      { title: "Branding & Digital Product Identity", description: "Develop a strong brand identity for your digital products." },
      { title: "Design System & Accessibility Optimization", description: "Ensure consistency and accessibility across your products." },
    ]
  },
  {
    title: "IT Consulting & Digital Transformation",
    icon: Briefcase,
    services: [
      { title: "Technology Strategy Consulting", description: "Aligning business goals with innovative tech solutions." },
      { title: "Legacy System Modernization", description: "Upgrading outdated systems for speed and scalability." },
      { title: "Project Management & Agile Coaching", description: "Delivering projects with transparency and collaboration." },
      { title: "IT Support & Maintenance", description: "Ongoing support for system updates, monitoring, and enhancements." },
    ]
  },
];


const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
  

function ServiceCard({ category }: { category: ServiceCategory }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const cardContainerStyle = {
    perspective: '1000px',
  };

  const cardStyle = {
    transformStyle: 'preserve-3d' as const,
    transition: 'transform 0.6s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };

  const faceStyle = {
    backfaceVisibility: 'hidden' as const,
    WebkitBackfaceVisibility: 'hidden' as const, // For Safari
  };

  const frontStyle = {
    ...faceStyle,
    zIndex: 2,
    transform: 'rotateY(0deg)',
  };

  const backStyle = {
    ...faceStyle,
    transform: 'rotateY(180deg)',
  };

  return (
    <motion.div
      style={cardContainerStyle}
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer h-[350px]"
      variants={cardVariants}
    >
      <div style={cardStyle} className="relative w-full h-full">
        {/* Front of Card */}
        <div style={frontStyle} className="absolute w-full h-full flex flex-col justify-center items-center p-6 bg-secondary rounded-lg border border-border/50 shadow-lg text-center">
            <category.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
            <p className="text-muted-foreground">Click to see details</p>
        </div>

        {/* Back of Card */}
        <div style={backStyle} className="absolute w-full h-full flex flex-col bg-secondary rounded-lg border border-border/50 shadow-lg p-6 overflow-y-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <category.icon className="h-6 w-6 text-primary" />
                {category.title}
            </h3>
            <ul className="space-y-4 text-sm">
                {category.services.map((service, sIndex) => (
                    <li key={sIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0"/>
                        <div>
                            <p className="font-semibold text-foreground">{service.title}</p>
                        </div>
                    </li>
                ))}
            </ul>
             <div className="flex-grow" />
            <p className="text-xs text-muted-foreground mt-4 text-center">Click to flip back</p>
        </div>
      </div>
    </motion.div>
  );
}


export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="space-y-6 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Comprehensive <span className="text-primary">Services</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            From initial concept to final deployment, we provide end-to-end technology solutions to accelerate your business growth.
          </p>
        </motion.div>
        
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridVariants}
        >
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

ServicesSection.displayName = "ServicesSection";
