export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-[url('/image/DuskSky.svg')] bg-cover bg-center bg-fixed">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-20 gap-10">
        <div className="flex flex-col items-center justify-center text-center max-w-md">
          <h1 className="text-5xl font-bold text-white">Greyvortex</h1>
          <p className="mt-4 text-lg text-gray-300">
            Student. Cybersecurity & software dev hobbyist. Building startups on the side.
          </p>
          <a
            href="#about"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/70 px-5 py-2.5 text-sm font-medium tracking-[0.12em] text-cyan-200 uppercase shadow-[0_0_18px_rgba(34,211,238,0.2)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]" />
            About me
          </a>
        </div>

        <div className="w-full max-w-md rounded-xl border border-white/10 bg-black/60 shadow-lg shadow-black/40 overflow-hidden font-mono text-sm">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2.5 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-gray-400">guest@greyvortex</span>
          </div>
          <div className="p-4 text-gray-300 space-y-1.5">
            <p><span className="text-green-400">guest@greyvortex</span>:<span className="text-blue-400">~</span>$ whoami</p>
            <p className="text-gray-400">greyvortex — developer &amp; builder</p>
            <p><span className="text-green-400">guest@greyvortex</span>:<span className="text-blue-400">~</span>$ ls projects/</p>
            <p className="text-gray-400">watchlog graphly ranker-rose</p>
            <p><span className="text-green-400">guest@greyvortex</span>:<span className="text-blue-400">~</span>$ <span className="inline-block w-2 h-4 bg-gray-300 animate-pulse" /></p>
          </div>
        </div>
      </div>
    </section>
  );
}
