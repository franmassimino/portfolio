"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    // Check if dark mode is already set
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-nav-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {navItems.map((item) => (
                  <a
                    key={item.labelKey}
                    href={item.href}
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.labelKey)}
                  </a>
                ))}
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    console.log("Contact clicked");
                  }}
                >
                  {t("nav.contact")}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
