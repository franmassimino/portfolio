"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  const containerVariants = {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20 md:pt-32 pb-12 md:pb-16">
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

      {/* Language transition overlay */}
      <AnimatePresence>
        <motion.div
          key={`overlay-${language}`}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 z-50 bg-gradient-to-r from-transparent via-background/80 to-transparent pointer-events-none"
          style={{ width: "100%" }}
        />
      </AnimatePresence>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center"
      >
        {/* Greeting Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">
              {t("hero.greeting")}
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-6xl max-w-5xl font-bold tracking-tight mb-8 text-foreground"
        >
          {t("hero.title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-8">
          <p className="text-lg md:text-xl max-w-[500px] mx-auto text-foreground/60">
            {t("hero.subtitle")}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <Button
            size="lg"
            variant="outline"
          >
            {t("hero.cta_contact")}
          </Button>
          <Button
            size="lg"
            className="group flex items-center justify-center"
          >
            {t("hero.cta_work")}
            <ArrowRight />
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          {[
            { icon: Github, href: "https://github.com/francisco-massimino", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/francisco-massimino", label: "LinkedIn" },
            { icon: Mail, href: "mailto:franmassi1904@gmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-background border border-input shadow-sm hover:shadow-md transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 text-foreground/70" />
            </motion.a>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
