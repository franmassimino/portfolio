"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Github as GithubIcon, Linkedin as LinkedinIcon } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const contactLinks = [
    {
      icon: Mail,
      href: "mailto:franmassi1904@gmail.com",
      label: "Email",
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/francisco-massimino",
      label: "LinkedIn",
    },
    {
      icon: GithubIcon,
      href: "https://github.com/francisco-massimino",
      label: "GitHub",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center overflow-hidden py-12 md:py-16 pb-20 md:pb-24 scroll-mt-20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 lg:px-16 w-full"
      >
        {/* Section Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">
              {t("contact.badge")}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground text-center"
        >
          {t("contact.title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-foreground/70 text-center max-w-xl mx-auto mb-8"
        >
          {t("contact.description")}
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-3xl mx-auto"
        >
          {contactLinks.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-64 h-32 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/40 hover:bg-background/80 transition-all duration-300 flex flex-col items-center justify-center gap-3 px-6"
            >
              <contact.icon className="w-8 h-8 text-foreground/70 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
              <span className="text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {contact.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
