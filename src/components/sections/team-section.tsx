'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Saravanan Thangavel',
    title: 'Founder & Director',
    imageUrl: 'https://placehold.co/400x400.png',
    aiHint: 'professional portrait',
  },
  {
    name: 'Yeshan Randika',
    title: 'Founder & Director',
    imageUrl: 'https://placehold.co/400x400.png',
    aiHint: 'professional portrait',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="space-y-6 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Meet Our <span className="text-primary">Leadership</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            The driving force behind our innovation and success.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={cardVariants}>
              <Card className="text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full bg-card border-border/50 overflow-hidden w-full max-w-sm mx-auto">
                <div className="relative">
                  <Image
                    src={member.imageUrl}
                    alt={`Photo of ${member.name}`}
                    data-ai-hint={member.aiHint}
                    width={400}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl font-semibold text-card-foreground">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary">{member.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

TeamSection.displayName = "TeamSection";
