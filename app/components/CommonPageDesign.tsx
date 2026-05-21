import { ReactNode } from "react";

type CommonPageDesignProps = {
  children: ReactNode;
};

export default function CommonPageDesign({ children }: CommonPageDesignProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-300 via-slate-600 to-cyan-300 flex items-center justify-center px-4 py-8">
      {children}
    </div>
  );
}