
'use client';

import { Button } from '@/components/ui/button';
import { Award, Users, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: Award,
    title: 'Expertise & Quality',
    description: 'Our experienced team delivers high-quality, reliable, and maintainable code.',
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: "We work closely with you as a true partner to understand and achieve your goals.",
  },
  {
    icon: ShieldCheck,
    title: 'Transparent & Reliable',
    description: 'We believe in clear communication and predictable delivery, ensuring no surprises.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const iconContainerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 150 } },
};


export default function KeyFeaturesSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background text-foreground overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-16"
          variants={itemVariants}
        >
          Why Choose <span className="text-primary">Certitude?</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-20"
          variants={sectionVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                variants={iconContainerVariants}
              >
                <feature.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-center max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button asChild size="lg" className="px-8 py-3">
            <Link href="#contact">
              Let's Discuss Your Project
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

KeyFeaturesSection.displayName = "KeyFeaturesSection";
