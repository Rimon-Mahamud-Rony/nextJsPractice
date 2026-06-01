import { ReactNode } from "react";

type TestPageDesignProps = {
  heading: string;
  subject: string;
  body: string;
  children: ReactNode;
};

export default function TestPageDesign({
  heading,
  subject,
  body,
  children,
}: TestPageDesignProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-300 via-slate-600 to-cyan-300 flex items-center justify-center px-4 py-8">
      {/* Main Card */}
      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-200 p-6">
        {/* Top Blur Decoration */}
        <div className=" bg-cyan-700 text-white p-1 rounded-md w-1/5 text-center mb-3">
          Practice Project
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-cyan-700 leading-snug text-center">
          {heading}
        </h1>

        {/* Subject */}
        <h2 className="mt-2 text-sm font-medium text-slate-500">{subject}</h2>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-cyan-500 rounded-full mt-5"></div>

        {/* Body */}
        <p className="mt-5 text-[13px] leading-7 text-slate-600">{body}</p>

        {/* Children Content */}
        <div className="mt-5">
          {children}
        </div>

        {/* Bottom Buttons */}
        <div className="mt-8 flex gap-3">
          <button className="rounded-xl bg-cyan-500 px-4 py-2 text-xs font-medium text-white hover:bg-cyan-600 transition-all duration-300 cursor-pointer">
            Explore
          </button>

          <button className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-medium text-slate-800 hover:bg-slate-300 transition-all duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}