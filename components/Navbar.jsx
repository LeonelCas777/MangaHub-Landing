import { useEffect, useState } from "react";

export default function Navbar({ whatsappLink }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/85 backdrop-blur-xl border-b border-zinc-800/90" : "bg-transparent backdrop-blur-md border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Manga<span className="text-red-600">Hub</span></h1>
          <p className="text-[10px] text-zinc-400 tracking-[0.25em] uppercase">Mayorista de Mangas</p>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#beneficios" className="hover:text-white transition">Beneficios</a>
          <a href="#funciona" className="hover:text-white transition">Cómo funciona</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-red-700 to-red-600 text-white px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold shadow-[0_10px_30px_rgba(220,38,38,0.28)] hover:scale-[1.03] hover:from-red-600 hover:to-red-500 transition-all duration-300">WhatsApp</a>
      </div>
    </header>
  );
}
