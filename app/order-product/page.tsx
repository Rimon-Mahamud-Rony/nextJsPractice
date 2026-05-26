"use client";

import CommonPageDesign from "@/app/components/CommonPageDesign";
import { useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();

  const handleGoHome = () => {
    // router.back();
    console.log("Go home button clicked");
    router.push("/"); //
  }

  return (
    <CommonPageDesign>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-20 text-black">
        <h2 className="text-2xl font-bold mb-4">Order Product</h2>
        <p className="mb-4">This is the order product page. You can place your order here.</p>
        <button
          onClick={handleGoHome}
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors cursor-pointer"
        >
          Go Home
        </button>
      </div>
    </CommonPageDesign>
  );
}
