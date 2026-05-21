"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/").pop();
  return (
    <div className="flex min-h-[20vh] items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="text-center">
        <div className="mb-4 text-6xl font-black text-red-500">404 </div>

        <h1 className="text-2xl font-bold text-slate-800">
          Product: {productId} Not Found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
          The product you are looking for does not exist or may have been removed from the system.
        </p>

        <button className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600">
          Back to Products
        </button>
      </div>
    </div>
  );
}
