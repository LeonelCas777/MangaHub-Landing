import { useState } from "react";
const faqs=[
["¿Hacen envíos a todo el país?","Sí, coordinamos envíos nacionales semanalmente."],
["¿Necesito local físico?","No. Trabajamos con tiendas físicas, online y revendedores."],
["¿Cómo inicio?","Nos escribís por WhatsApp y te guiamos en minutos."],
["¿Qué tipo de títulos manejan?","Clásicos, novedades y títulos de alta rotación."],
];
export default function FAQ(){const [open,setOpen]=useState(0);return <section id="faq" className="py-20 sm:py-24 px-4 sm:px-6 border-b border-zinc-900"><div className="max-w-4xl mx-auto"><div className="text-center mb-12"><p className="text-red-500 uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">FAQ</p><h3 className="text-3xl sm:text-5xl font-black">Resolvé todo en segundos.</h3></div><div className="space-y-3">{faqs.map(([q,a],i)=><button key={q} onClick={()=>setOpen(open===i?-1:i)} className="w-full text-left p-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 hover:border-zinc-600 transition"><div className="flex justify-between gap-3"><h4 className="font-semibold">{q}</h4><span className="text-red-500 text-xl leading-none">{open===i?"−":"+"}</span></div><p className={`text-zinc-400 text-sm overflow-hidden transition-all duration-300 ${open===i?"max-h-20 mt-3":"max-h-0"}`}>{a}</p></button>)}</div></div></section>}
