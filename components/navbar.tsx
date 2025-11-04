"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    // Check if dark mode is already set
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  const navItems = [
    { labelKey: "nav.about", href: "#about" },
    { labelKey: "nav.projects", href: "#projects" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/francisco-massimino", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/francisco-massimino", label: "LinkedIn" },
    { icon: Mail, href: "mailto:franmassi1904@gmail.com", label: "Email" },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-end gap-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`nav-items-${language}`}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-8"
            >
              {navItems.map((item) => (
                <a
                  key={item.labelKey}
                  href={item.href}
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
                >
                  {t(item.labelKey)}
                </a>
              ))}

              <Button
                size="sm"
                className="px-6"
                onClick={() => {
                  // TODO: Add scroll to contact section or open contact modal
                  console.log("Contact clicked");
                }}
              >
                {t("nav.contact")}
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Language Toggle */}
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className="relative hidden md:flex"
          title={`Switch to ${language === "es" ? "English" : "Español"}`}
        >
          <span className="text-sm font-semibold">
            {language.toUpperCase()}
          </span>
        </Button>

        {/* Theme Toggle */}
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="relative hidden md:flex"
        >
          <motion.div
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -180, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </motion.div>
        </Button>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors relative"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 180, scale: 0 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.div>
          </button>
          <button
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 md:hidden flex flex-col items-center justify-center px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Menu Items Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-menu-${language}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-col items-center justify-center space-y-8 w-full max-w-md"
                >
                  {/* Navigation Links */}
                  <div className="flex flex-col items-center space-y-6 w-full">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.labelKey}
                        href={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item.labelKey)}
                      </motion.a>
                    ))}
                  </div>

                  {/* CTA Button - Large */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="w-full max-w-xs"
                  >
                    <Button
                      size="lg"
                      className="w-full text-lg py-6"
                      onClick={() => {
                        setIsOpen(false);
                        console.log("Contact clicked");
                      }}
                    >
                      {t("nav.contact")}
                    </Button>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex gap-6 pt-8"
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 rounded-full bg-background border border-input shadow-sm hover:shadow-md transition-all duration-300"
                        aria-label={social.label}
                        onClick={() => setIsOpen(false)}
                      >
                        <social.icon className="h-6 w-6 text-foreground/70" />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
