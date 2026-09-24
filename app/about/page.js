
import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-linear-to-br from-purple-50 via-white to-purple-100">
      
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-5 text-5xl">
          🔗
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About <span className="text-purple-700">Linkly</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Linkly is a simple and easy-to-use URL shortening website
          designed to turn long URLs into short, clean, and
          shareable links.
        </p>
      </section>

      {/* What is Linkly */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                What is Linkly?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Long URLs can be difficult to copy, share, and remember.
                Linkly solves this problem by converting long URLs into
                short links that are much easier to use.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Simply enter your long URL, generate a short link, and
                share it wherever you want — social media, messages,
                websites, emails, or anywhere else.
              </p>
            </div>

            <div className="rounded-3xl bg-purple-700 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">
                Long URL → Short URL
              </h3>

              <div className="mt-6 rounded-xl bg-white/10 p-4">
                <p className="break-all text-sm text-purple-100">
                  https://example.com/this-is-a-very-long-url
                </p>
              </div>

              <div className="my-4 text-center text-2xl">
                ↓
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-sm font-semibold text-purple-700">
                  https://linkly.com/abc123
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              How does Linkly work?
            </h2>

            <p className="mt-3 text-gray-600">
              Shorten your URL in three simple steps.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7 text-center shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700">
                1
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Enter URL
              </h3>

              <p className="mt-3 text-gray-600">
                Paste your long URL into the URL shortener.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700">
                2
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Shorten It
              </h3>

              <p className="mt-3 text-gray-600">
                Click the shorten button and let Linkly create your
                short link.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700">
                3
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Share It
              </h3>

              <p className="mt-3 text-gray-600">
                Copy your new short URL and share it anywhere.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-700 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Start shortening your URLs
        </h2>

        <p className="mt-3 text-purple-100">
          Make your long links shorter, cleaner, and easier to share.
        </p>

        <Link
          href="/shorten"
          className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-purple-700 shadow-lg transition hover:bg-purple-50"
        >
          Shorten a URL →
        </Link>
      </section>

    </main>
  )
}

export default About

