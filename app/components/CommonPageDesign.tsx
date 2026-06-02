import { ReactNode } from "react";

type CommonPageDesignProps = {
  children: ReactNode;
};

export default function CommonPageDesign({ children }: CommonPageDesignProps) {
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-cyan-300 via-slate-600 to-cyan-300 py-8">
      <header className="bg-cyan-500 text-white p-4 fixed top-0 w-full text-start">
        <h1 className="text-xl font-bold text-black text-center">My Next.js App</h1>
      </header>
      {children}
      <footer className="bg-cyan-500 text-white p-4 fixed bottom-0 w-full text-center">
        <p>&copy; 2023 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}