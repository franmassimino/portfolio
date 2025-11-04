import type { Metadata } from "next";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  description: "Full stack developer with +4 years of experience creating and launching digital products. Building web applications that work, look great, and grow businesses.",
  openGraph: {
    title: "Francisco Massimino - Portfolio",
    description: "Full stack developer with +4 years of experience creating and launching digital products. Building web applications that work, look great, and grow businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Massimino - Portfolio",
    description: "Full stack developer with +4 years of experience creating and launching digital products.",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
