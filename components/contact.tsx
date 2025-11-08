"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add form submission logic (e.g., email service, API call)
    console.log("Form submitted:", formData);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/francisco-massimino",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/francisco-massimino",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:franmassi1904@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center overflow-hidden py-12 md:py-16 scroll-mt-20"
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

        {/* Contact Card */}
        <motion.div variants={itemVariants}>
          <Card className="border max-w-xl  mx-auto border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    {t("contact.form.name")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("contact.form.name_placeholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    {t("contact.form.email")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact.form.email_placeholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    {t("contact.form.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.message_placeholder")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    t("contact.form.sending")
                  ) : (
                    <>
                      {t("contact.form.submit")}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-primary/20">
                <p className="text-sm text-center text-foreground/70 mb-4">
                  {t("contact.social_text")}
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-background border border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-foreground/70" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
