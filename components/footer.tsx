"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/francisco-massimino", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/francisco-massimino", label: "LinkedIn" },
    { icon: Mail, href: "mailto:franmassi1904@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { labelKey: "nav.about", href: "#about" },
    { labelKey: "nav.projects", href: "#projects" },
    { labelKey: "nav.contact", href: "mailto:franmassi1904@gmail.com" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* CTA - Centered and minimal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="py-6 md:py-8 text-center"
        >
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2 flex-wrap justify-center">
            <span>{t("footer.cta")}</span>
            <a
              href="mailto:franmassi1904@gmail.com"
              className="inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium group"
            >
              {t("hero.cta_contact")}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </p>
        </motion.div>

        <div className="border-t border-border/50" />

        {/* Main footer content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="py-6 md:py-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

            {/* Quick Links */}
            <nav className="flex items-center gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="border-t border-border/50" />

        {/* Copyright */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="py-4 text-center"
        >
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
