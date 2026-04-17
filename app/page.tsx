'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const skills = [
    "React / Next.js", "React Native", "Flutter", "Vue.js / Vuetify",
    "TypeScript", "Tailwind CSS", "WordPress", "Shopify",
    "Python", "Android", "Agents IA (Cursor, Claude, Grok)"
  ];

  const projects = [
    { title: "Site e-commerce Shopify", desc: "Boutique complète avec paiement Stripe", tech: "Shopify + React" },
    { title: "Application mobile Flutter", desc: "Gestion de tâches cross-platform", tech: "Flutter + Firebase" },
    { title: "Dashboard React / Next.js", desc: "Interface admin en temps réel", tech: "Next.js + TypeScript" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tight">Entreprod by Loan</div>
          
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#accueil" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Accueil</a>
            <a href="#competences" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Compétences</a>
            <a href="#projets" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projets</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO ACCUEIL */}
      <section id="accueil" className="hero-bg min-h-screen flex items-center relative" 
               style={{ backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <div className="mb-6 text-6xl">👨‍💻</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Entreprod by Loan</h1>
          <p className="text-3xl text-blue-300 mb-8">Développeur Web &amp; Mobile Junior</p>
          <p className="max-w-xl mx-auto text-lg text-zinc-300 mb-12">
            Bac+4 École d’Ingénieurs • React • Flutter • Next.js • IA avancée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projets" className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition">
              Voir mes projets
            </a>
            <a href="#contact" className="px-10 py-4 border-2 border-white rounded-2xl font-semibold hover:bg-white/10 transition">
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="hero-bg min-h-screen flex items-center relative py-24"
               style={{ backgroundImage: "url('https://picsum.photos/id/160/1920/1080')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-white">
          <h2 className="text-5xl font-bold text-center mb-16">Mes Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-6 rounded-3xl text-center hover:border-blue-400 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="hero-bg min-h-screen flex items-center relative py-24"
               style={{ backgroundImage: "url('https://picsum.photos/id/133/1920/1080')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-white">
          <h2 className="text-5xl font-bold text-center mb-16">Mes Projets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:border-blue-400 transition group">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-300">{project.title}</h3>
                <p className="text-zinc-300 mb-6">{project.desc}</p>
                <p className="text-sm text-blue-300">{project.tech}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-sm text-zinc-400">+ de projets sur mon GitHub</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="hero-bg min-h-screen flex items-center relative py-24"
               style={{ backgroundImage: "url('https://picsum.photos/id/1005/1920/1080')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-white text-center">
          <h2 className="text-5xl font-bold mb-8">Prêt à collaborer ?</h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-md mx-auto">
            Je suis disponible immédiatement dans le 78 / 92 / ouest Paris
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a href="mailto:tonemail@gmail.com" className="text-2xl hover:text-blue-400 transition">✉️ tonemail@gmail.com</a>
            <div className="flex gap-8 text-4xl">
              <a href="https://github.com/tonusername" target="_blank" className="hover:text-blue-400 transition">🐙</a>
              <a href="https://linkedin.com/in/tonprofil" target="_blank" className="hover:text-blue-400 transition">🔗</a>
            </div>
          </div>
          
          <p className="mt-24 text-sm text-zinc-400">
            Développé avec Next.js + Tailwind • 2026
          </p>
        </div>
      </section>
    </>
  );
}
