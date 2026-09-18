import Hero from '../component/hero';
import About from '../component/about';

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

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
