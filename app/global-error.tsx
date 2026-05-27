"use client";

export default function GlobalError() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
          <h1 className="text-2xl font-bold text-red-500">Something went wrong</h1>
          <button
              onClick={() => {
                    window.location.reload()
                }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
              Reload Page
          </button>
      </div>
  );
}  