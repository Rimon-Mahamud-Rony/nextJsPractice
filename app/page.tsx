"use client";

import TestPageDesign from "./components/TestPageDesign";
import MyCalendar from "./components/MyCalendar";

export default function Home() {
  return (
    <TestPageDesign
      heading="Welcome to Next.js!"
      subject="Get started by editing app/page.tsx"
      body="This is a practice project to explore the features of Next.js and improve my skills in building web applications."
    >
      <div className="flex flex-col items-center gap-6 bg-gray-100">
        <div className="text-slate-500">
          <h1 className="text-xl font-bold mb-2 text-cyan-500">
            Welcome to Next.js!
          </h1>

          <h2 className="text-base text-black">
            Get started by editing{" "}
            <code className="px-2 py-1 rounded bg-slate-300">app/page.tsx</code>
          </h2>
        </div>
      </div>
      <MyCalendar />
    </TestPageDesign>
  );
}
