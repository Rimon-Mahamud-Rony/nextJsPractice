"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  
  const router = useRouter();
  
  const retry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="w-full items-center flex flex-row justify-center bg-red-100 p-10 border border-red-500 rounded">
      <div className="">
        <h1 className="text-2xl font-bold text-red-500 text-center">Error Page</h1>
        <h2 className="text-sm text-red-700 mt-2 text-center">
            {error.message} 
        </h2>
        <button
          onClick={retry}
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm block w-full text-center cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
