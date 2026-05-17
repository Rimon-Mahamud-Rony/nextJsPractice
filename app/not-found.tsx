"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-300 via-slate-600 to-cyan-300 flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold text-slate-200 tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-slate-200">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-slate-800 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved. Please
          check the URL or go back to the homepage.
        </p>

        {/* Illustration (simple visual accent) */}
        <div className="my-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-slate-300/40 flex items-center justify-center">
            <span className="text-3xl">🔍</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-700 transition"
          >
            Go Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-slate-400 text-slate-700 hover:bg-slate-100 transition"
          >
            Go Back
          </button>
        </div>

        {/* Footer hint */}
        <p className="mt-6 text-xs text-slate-400">
          If you think this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
}
