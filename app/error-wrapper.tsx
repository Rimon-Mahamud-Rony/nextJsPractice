"use client";
import { useState } from "react";

interface ErrorWrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({ message = "An error occurred"}: { message?: string }) => {
   
    const [error, setError] = useState(false);
    
    if (error) {
        throw new Error(message);
    }

    return (
        <button
            title="Simulate an error"
            onClick={() => setError(true)}
            className="px-4 py-2 bg-cyan-500 text-white rounded mb-4 cursor-pointer hover:bg-cyan-600 transition-colors duration-300 text-base font-medium"
        >
            Make an eroor Error to check the global error boundary
        </button>
    );
};

export default function ErrorWrapper({ children }: ErrorWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <ErrorSimulator message="Simulated error in root layout"/>
      {children}
    </div>
  );
};