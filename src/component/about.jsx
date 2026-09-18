export default function About() {
  const stats = [
    { label: 'os', value: 'GrayOS' },
    { label: 'shell', value: 'bash' },
    { label: 'role', value: 'Student' },
    { label: 'focus', value: 'Cybersecurity, Software Dev' },
    { label: 'status', value: 'Building startups' },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-slate-950/80 py-20 px-6 md:px-10 lg:px-16 text-zinc-300 font-mono">
      <div className="absolute inset-0 " />
      <div className="relative mx-auto max-w-6xl px-2 md:px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16 lg:gap-20">
          <div className="w-full max-w-sm shrink-0 rounded-2xl border border-cyan-500/20 bg-black/60 p-6 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-sm md:ml-2 lg:ml-4">
            <div className="space-y-3 text-sm">
              {stats.map((s) => (
                <div key={s.label} className="grid grid-cols-[52px_10px_1fr] gap-2 text-left">
                  <span className="text-cyan-400">{s.label}</span>
                  <span className="text-zinc-600">:</span>
                  <span className="text-zinc-300">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-0 rounded-2xl border border-white/10  p-6 md:p-8">
            <p className="mb-3 text-sm text-cyan-400">$ whoami</p>
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">About</h2>
            <p className="mb-4 text-base leading-relaxed text-zinc-300">
              I&apos;m a student who spends most of my free time in the space between cybersecurity and
              software development — not because I have to, but because I genuinely like figuring out
              how things break and how to build them better. Most of what&apos;s here started as curiosity
              that turned into a real project.
            </p>
            <p className="text-base leading-relaxed text-zinc-300">
              Alongside that, I&apos;m working on building a few startups — early-stage, still shaping up,
              but it&apos;s where a lot of my longer-term energy is going right now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}