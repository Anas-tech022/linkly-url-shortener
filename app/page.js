import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-50 text-slate-900 selection:bg-purple-500 selection:text-white">
      
      {/* Background Ambient Glow Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-300/40 via-indigo-200/30 to-pink-300/40 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-[400px] w-[400px] rounded-full bg-purple-300/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Hero Section */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center lg:py-28">
        
        {/* Badge */}
        <div className="group mb-8 inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/80 px-4 py-1.5 text-sm font-semibold text-purple-700 shadow-sm backdrop-blur-md transition-all hover:border-purple-300 hover:shadow-md hover:scale-105">
          <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
          <span>🚀 Simple. Fast. Powerful.</span>
        </div>

        {/* Title */}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
          Shorten Your Links.
          <span className="mt-2 block bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Share Them Anywhere.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          Linkly is a simple and fast URL shortener that turns long,
          complicated URLs into short and easy-to-share links.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/shorten"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-purple-500/25 transition-all duration-200 hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-purple-500/35 active:scale-95"
          >
            Shorten a URL →
          </Link>

          <Link
            href="/about"
            className="rounded-xl border border-slate-200 bg-white/90 px-8 py-4 font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-700 hover:shadow-md active:scale-95"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="relative border-t border-purple-100/80 bg-white/70 backdrop-blur-md py-24">
        <div className="mx-auto max-w-6xl px-6">
          
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why use Linkly?
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Everything you need to manage and share your links easily.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl transition-transform group-hover:scale-110">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Fast & Simple
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Create short URLs quickly without complicated steps or
                unnecessary features.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-3xl transition-transform group-hover:scale-110">
                🔗
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Easy to Share
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Turn long URLs into short links that are easier to copy,
                remember, and share.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/10">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-3xl transition-transform group-hover:scale-110">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Convenient
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Keep your links short and organized while making them
                convenient to use.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 py-20 text-center text-white shadow-2xl">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Ready to shorten your URL?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-purple-200">
            Create a short, clean, and shareable link in just a few seconds.
          </p>

          <Link
            href="/shorten"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-purple-900 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:bg-purple-50 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Get Started →
          </Link>
        </div>
      </section>

    </main>
  )
}

export default Home