import heroImage from "../src/assets/hero.jpg";

export default function Hero({ whatsappLink }) {
  return <section className="relative pt-36 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 border-b border-zinc-900 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(220,38,38,0.3),transparent_38%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black" />
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="animate-[fadeIn_900ms_ease-out]">
        <div className="flex flex-wrap gap-2 mb-5">{["Mayorista Oficial", "Atención 1:1", "Envíos Nacionales"].map(b => <span key={b} className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/70 text-xs uppercase tracking-wider text-zinc-200">{b}</span>)}</div>
        <p className="text-red-500 uppercase tracking-[0.25em] text-xs sm:text-sm mb-4">Venta mayorista de mangas</p>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6">Convertí tu tienda en un referente del manga.</h2>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">Catálogo profesional, lanzamientos semanales y acompañamiento real para crecer con márgenes saludables.</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 transition px-6 sm:px-8 py-4 rounded-2xl font-bold text-center text-base sm:text-lg shadow-[0_20px_40px_rgba(220,38,38,0.32)]">Consultar por WhatsApp</a>
          <a href="#beneficios" className="border border-zinc-700 hover:border-zinc-300 transition px-6 sm:px-8 py-4 rounded-2xl text-center">Ver beneficios</a>
        </div>
      </div>
      <div className="relative group animate-[fadeIn_1200ms_ease-out]">
        <div className="absolute -inset-4 bg-red-700/25 blur-3xl rounded-full" />
        <img src={heroImage} alt="MangaHub mayorista" className="relative rounded-3xl border border-zinc-800 object-cover w-full h-[430px] sm:h-[560px] shadow-2xl" />
      </div>
    </div>
  </section>;
}
