const items = [
  ["Compra por volumen", "Escalá márgenes con packs pensados para revender."],
  ["Envíos a todo el país", "Logística ágil para que no cortes tu flujo de ventas."],
  ["Asesoría estratégica", "Sugerencias de mix y rotación según tu etapa."],
  ["Novedades semanales", "Siempre actualizado con títulos que convierten."],
];

export default function Benefits() {
  return <section id="beneficios" className="py-20 sm:py-24 px-4 sm:px-6 border-b border-zinc-900">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14"><p className="text-red-500 uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">Beneficios</p><h3 className="text-3xl sm:text-5xl font-black">Estructura sólida para vender más.</h3></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{items.map(([title,text],i)=><article key={title} className="group bg-zinc-950/90 border border-zinc-800 rounded-3xl p-7 hover:-translate-y-1 hover:border-red-500 transition-all duration-300 shadow-[0_0_0_rgba(220,38,38,0)] hover:shadow-[0_10px_35px_rgba(220,38,38,0.18)]">
        <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/40 flex items-center justify-center mb-5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"/></div>
        <h4 className="text-xl font-bold mb-3">{title}</h4><p className="text-zinc-400">{text}</p></article>)}</div>
    </div>
  </section>;
}
