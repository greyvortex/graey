import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Graey",
  description: "A portfolio website for Graey",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050816] text-slate-100 antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <a href="/" className="text-lg font-semibold tracking-[0.2em] text-white transition hover:text-cyan-300" >
              GRAEY
            </a>

            <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 shadow-lg shadow-cyan-950/20">
              {[
                { label: "Vault", href: "https://greyvortex.github.io/" },
                { label: "Anime", href: "https://ranker-rose.vercel.app/" },
                { label: "Contact", href: "mailto:greyvortex.official@gmail.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
