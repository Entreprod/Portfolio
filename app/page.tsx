'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 font-sans">


      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-xl font-medium tracking-tight">Entreprod</div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#accueil">Accueil</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>

            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-700"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>


      
      {/* HERO */}
      {/* Ancien en-tête
        <section id="accueil" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 blur-3xl"></div>
      */}
      
      <section id="accueil" className="min-h-screen flex items-center pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          {/* Badge disponibilité */}
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-700">
            <span className="text-emerald-400">●</span>
            <span className="text-sm tracking-widest">Disponible immédiatement</span>
          </div>

          {/* Grand titre */}
          <h1 className="text-7xl md:text-8xl tracking-tighter mb-6">
            Entreprod
          </h1>

          {/* Sous-titre */}
          <p className="text-3xl md:text-4xl text-zinc-400 mb-4">
            Développeur Web &amp; Mobile
          </p>

          {/* Description */}
          <p className="max-w-md mx-auto text-zinc-500 text-lg mb-12">
            TypeScript • JavaScript • React • Flutter • Next.js • Prompting IA • Agent IA
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projets" 
              className="px-10 py-4 bg-white text-black font-medium rounded-2xl hover:bg-zinc-200 transition text-lg"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 border border-zinc-700 font-medium rounded-2xl hover:bg-zinc-900 transition text-lg"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>


      
      {/* HERO 2 */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-black/60 to-cyan-500/20" />

        <div className="relative text-center px-6">
          <h1 className="text-6xl font-bold mb-6">Développeur Web & Mobile</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Je conçois des applications modernes, performantes et orientées produit.
          </p>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Passionné par le développement, je crée des applications web et mobiles en combinant design, performance et expérience utilisateur.
          </p>
        </div>
      </section>


      
      {/* HERO 3 */}
      <section id="accueil" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 blur-3xl" />

        <div className="relative text-center px-6">
          <h1 className="text-6xl font-bold mb-6">Développeur Web & Mobile</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Je conçois des applications modernes, performantes et orientées produit.
          </p>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Passionné par le développement, je crée des applications web et mobiles en combinant design, performance et expérience utilisateur.
          </p>
        </div>
      </section>


      
      {/* COMPÉTENCES */}
      <section id="competences2" className="hero-bg min-h-screen flex items-center relative py-24"
               style={{ backgroundImage: "url('https://picsum.photos/id/160/1920/1080')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-white">
          <h2 className="text-5xl font-bold text-center mb-16">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-6 rounded-3xl text-center hover:border-blue-400 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* PROJECTS */}
      <section id="projets" className="py-32 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Projets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="p-6 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.desc}</p>
                <div className="text-sm text-zinc-500">{project.tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* DEMOS */}
      <section className="py-32 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-5xl font-bold mb-8">Ce que je construis</h2>
          <p className="text-xl text-zinc-400">
            Applications complètes avec API, base de données et déploiement cloud.
          </p>
        </div>
      </section>


      
      {/* CONTACT */}
      <section id="contact" className="hero-bg min-h-screen flex items-center relative py-24"
               style={{ backgroundImage: "url('https://picsum.photos/id/1005/1920/1080')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-white text-center">
          <h2 className="text-5xl font-bold mb-8">Contact</h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-md mx-auto">
            Disponible immédiatement : 78, 92 et Paris Ouest
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a href="mailto:tonemail@gmail.com" className="text-2xl hover:text-blue-400 transition">
              ✉️ loanngm@outlook.fr
            </a>
            
            <div className="flex gap-10 text-5xl">
              <a href="https://github.com/Entreprod" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-400 transition">🐙</a>
              <a href="https://www.instagram.com/Entreprod" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-400 transition">📷</a>
              <a href="https://www.linkedin.com/in/loanngm" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-400 transition">🔗</a>
            </div>
          </div>
          
          <p className="mt-24 text-sm text-zinc-400">
            Développé avec Next.js + Tailwind • 2026
          </p>
        </div>
      </section>
      
    </div>
  );
}
