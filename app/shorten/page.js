"use client"
import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")

  const [urls, setUrls] = useState([])
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [deletingId, setDeletingId] = useState(null)
  const [loading, setLoading] = useState(false)

  // Get all successfully generated URLs
  const getUrls = async () => {
    try {
      const response = await fetch("/api/generate")

      if (!response.ok) {
        throw new Error("Failed to fetch URLs")
      }

      const result = await response.json()

      // API should return something like:
      // { success: true, urls: [...] }

      if (result.success === true) {
        setUrls(result.urls || [])
      } else {
        setUrls([])
      }
    } catch (error) {
      console.error(error)
    }
  }

  // Load URLs when page opens
  useEffect(() => {
    getUrls()
  }, [])

  const generate = async () => {
    setMessage("")
    setError("")

    // Basic validation
    if (!url.trim() || !shorturl.trim()) {
      setError("Please enter both the original URL and short URL.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
          shorturl: shorturl,
        }),
      })

      const result = await response.json()

      // Check whether API says generation was successful
      if (response.ok && result.success === true) {
        setMessage("Your short URL has been generated successfully! 🎉")

        setUrl("")
        setShorturl("")

        // Refresh the list
        getUrls()
      } else {
        setError(result.message || "Unable to generate short URL.")
      }
    } catch (error) {
      console.error(error)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const copyUrl = async (shortUrl) => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      toast(' 📋 Copied Successfully', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (error) {
      console.error(error)
      setError("Unable to copy the URL.")
    }
  }

  // Delete URL
  const deleteUrl = async (id) => {
    setMessage("")
    setError("")
    setDeletingId(id)

    try {
      const response = await fetch(`/api/generate?id=${id}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (response.ok && result.success === true) {
        toast(' URL Deleted Successfully', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

        // Remove deleted URL from screen immediately
        setUrls((previousUrls) =>
          previousUrls.filter((item) => item._id !== id)
        )

      } else {

        setError(result.message || "Unable to delete URL.")

      }

    } catch (error) {

      console.error(error)
      setError("Something went wrong while deleting the URL.")

    } finally {
      setDeletingId(null)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className="min-h-[calc(100vh-4rem)] bg-linear-to-br from-purple-50 via-white to-purple-100 px-4 py-12 sm:px-6">

        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <div className="mb-10 text-center">

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-700 text-3xl shadow-lg">
              🔗
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Shorten Your URL
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Turn long URLs into short, clean, and easy-to-share links
              with Linkly.
            </p>

          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Form Card */}
            <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-xl sm:p-8">

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Create a short link
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter your original URL and choose your short URL.
                </p>
              </div>

              <div className="space-y-5">

                {/* Original URL */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Original URL
                  </label>

                  <input
                    type="url"
                    value={url}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                    placeholder="https://example.com/very-long-url"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>

                {/* Short URL */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Custom Short URL
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-gray-50 focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">

                    <span className="flex items-center bg-gray-100 px-3 text-sm text-gray-500">
                      linkly.com/
                    </span>

                    <input
                      type="text"
                      value={shorturl}
                      className="min-w-0 flex-1 bg-transparent px-3 py-3 text-gray-800 outline-none placeholder:text-gray-400"
                      placeholder="my-link"
                      onChange={(e) => setShorturl(e.target.value)}
                    />

                  </div>
                </div>

                {/* Success Message */}
                {message && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    ✅ {message}
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    ❌ {error}
                  </div>
                )}

                {/* Generate Button */}
                <button
                  onClick={generate}
                  disabled={loading}
                  className="w-full rounded-xl bg-purple-700 px-5 py-3.5 font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-purple-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Generating..." : "Generate Short URL →"}
                </button>

              </div>
            </div>

            {/* Info Card */}
            <div className="flex flex-col justify-center rounded-2xl bg-purple-700 p-8 text-white shadow-xl">

              <span className="mb-4 text-4xl">⚡</span>

              <h2 className="text-2xl font-bold">
                Make your links shorter
              </h2>

              <p className="mt-4 leading-7 text-purple-100">
                Long URLs can be difficult to share and remember. Linkly
                converts them into short and simple links that you can
                easily share anywhere.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  <div>
                    <h3 className="font-semibold">
                      Easy to use
                    </h3>

                    <p className="text-sm text-purple-200">
                      Enter your URL and generate your link in seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  <div>
                    <h3 className="font-semibold">
                      Custom short links
                    </h3>

                    <p className="text-sm text-purple-200">
                      Choose a memorable name for your shortened URL.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  <div>
                    <h3 className="font-semibold">
                      Easy sharing
                    </h3>

                    <p className="text-sm text-purple-200">
                      Copy your short link and share it anywhere.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Generated URLs */}
          <section className="mt-12">

            <div className="mb-5 flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Generated URLs
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Successfully generated short links appear here.
                </p>
              </div>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-bold text-purple-700">
                {urls.length} Links
              </span>

            </div>

            {urls.length === 0 ? (

              <div className="rounded-2xl border border-dashed border-purple-200 bg-white p-10 text-center shadow-sm">

                <div className="mb-3 text-4xl">
                  🔗
                </div>

                <h3 className="font-bold text-gray-800">
                  No short URLs yet
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Generate your first short URL and it will appear here.
                </p>

              </div>

            ) : (

              <div className="space-y-4">

                {urls.map((item) => {
                  const shortLink = `${window.location.origin}/${item.shorturl}`
                  return (
                    <div
                      key={item._id}
                      className="flex w-full flex-col gap-4 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-5"
                    >
                      {/* URL Content */}
                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Short URL
                        </p>

                        <a
                          href={`/${item.shorturl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block truncate font-bold text-purple-700 hover:text-purple-900"
                        >
                          https://linkly.com/{item.shorturl}
                        </a>

                        <p className="mt-1 truncate text-sm text-gray-500">
                          → {item.url}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex w-full shrink-0 gap-2 sm:w-auto sm:justify-end sm:gap-3">
                        <button
                          onClick={() => deleteUrl(item._id)}
                          disabled={deletingId === item._id}
                          className="flex-1 rounded-lg bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700 transition hover:bg-purple-700 hover:text-white sm:flex-none"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => copyUrl(shortLink)}
                          className="flex-1 rounded-lg bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700 transition hover:bg-purple-700 hover:text-white sm:flex-none"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  );
                })}

              </div>
            )}

          </section>

        </div>
      </main>
    </>
  )
}

export default Shorten