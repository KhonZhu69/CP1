
'use client';

import ContactForm from '@/components/contact-form';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
};


export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="space-y-6 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Ready to start your project? Fill out the form below and we'll get back to you.
          </p>
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={gridItemVariants}
            className="p-8 rounded-lg bg-secondary border w-full max-w-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

ContactSection.displayName = "ContactSection";
