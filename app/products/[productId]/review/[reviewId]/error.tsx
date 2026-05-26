"use client";

export default function ErrorBoundary({error}: {error: Error}) {
  return (
    <div className="w-full items-center flex flex-row justify-center bg-red-100 p-10 border border-red-500 rounded">
      <div className="">
        <h1 className="text-2xl font-bold text-red-500 text-center">Error Page</h1>
        <h2 className="text-sm text-red-700 mt-2 text-center">
            {error.message}
        </h2>
      </div>
    </div>
  );
}
