import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen w-full flex items-center bg-[url('/image/DuskSky.svg')] bg-cover bg-center bg-fixed">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-20 gap-10">

          <div className="flex flex-col items-center justify-center text-center max-w-md">
            <h1 className="text-5xl font-bold text-white">Greyvortex</h1>
            <p className="mt-4 text-lg text-gray-300">
              A short line about who you are and what you build.
            </p>
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
      <section className="bg-slate-950 py-20 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="text-4xl font-bold text-white">18+</p>
            <p className="mt-2 text-sm text-gray-400">Projects shipped</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-white">3</p>
            <p className="mt-2 text-sm text-gray-400">Years coding</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-white">8</p>
            <p className="mt-2 text-sm text-gray-400">Technologies used</p>
          </div>

          <div>
            <p className="text-4xl font-bold text-white">100%</p>
            <p className="mt-2 text-sm text-gray-400">Self-taught</p>
          </div>

        </div>
      </section>

    </main>
  );
}
