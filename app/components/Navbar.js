import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-200/20 bg-purple-700/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-purple-700 shadow-md transition-transform duration-300 group-hover:rotate-6">
            🔗
          </span>
          <span className="text-white">
            Link<span className="text-purple-200">ly</span>
          </span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-2 sm:gap-4">
          <li>
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-purple-100 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="rounded-lg px-3 py-2 text-sm font-medium text-purple-100 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              About
            </Link>
          </li>

          {/* Try Now */}
          <li>
            <Link
              href="/shorten"
              className="ml-1 rounded-lg bg-white px-4 py-2 text-sm font-bold text-purple-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-50 hover:shadow-lg"
            >
              Try Now
            </Link>
          </li>

          {/* GitHub */}
          <li>
            <Link
              href="https://github.com/Anas-tech022"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20 sm:block"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar