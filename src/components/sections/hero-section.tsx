
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Bot, Database, Cloud } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const trustedLogos = [
  { name: 'Next.js', icon: Zap },
  { name: 'Genkit AI', icon: Bot },
  { name: 'Firebase', icon: Database },
  { name: 'Google Cloud', icon: Cloud },
];

export default function HeroSection() {
  const heroDescription = "Certitude Professionals is a trusted software development and technology consulting firm dedicated to building reliable, scalable, and future-ready digital solutions. Our team of skilled developers, designers, and strategists transform ideas into intelligent software systems that empower businesses to grow, automate, and innovate with confidence. We specialize in custom web and mobile app development, AI integration, cloud solutions, and enterprise software consulting — delivering every project with precision, transparency, and unmatched commitment to quality.";

  return (
    <section id="home" className="w-full py-20 md:py-24 lg:py-32 bg-background overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid gap-10 items-center">
            <div className="space-y-6 text-center">
                <motion.h1
                    className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
                    variants={itemVariants}
                >
                    Custom Software to <span className="text-primary">Empower Your Vision</span>
                </motion.h1>
                <motion.p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto" variants={itemVariants}>
                    {heroDescription}
                </motion.p>
                <motion.div variants={itemVariants}>
                    <Button asChild size="lg" className="px-8 py-3">
                        <Link href="#contact">Get in Touch</Link>
                    </Button>
                </motion.div>
            </div>
        </div>

        <motion.div className="mt-24 text-center" variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Powering solutions with modern technologies</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {trustedLogos.map((logo) => (
                    <div key={logo.name} className="flex items-center gap-2 text-muted-foreground" title={logo.name}>
                        <logo.icon className="h-7 w-7"/>
                    </div>
                ))}
            </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

HeroSection.displayName = "HeroSection";
