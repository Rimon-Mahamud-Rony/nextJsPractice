import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";

export default async function ProductDetails(
    { params
        
    }: {
            params: Promise<{ productId: string }>;
    }
) {
  const productId = (await params).productId;
  
  if (parseInt(productId) > 10000) {
    notFound();
  }
    return (
      <div className="w-full h-screen items-center flex flex-row justify-center bg-gray-100">
        <div className="text-slate-500">
          <h1 className="text-2xl font-bold text-cyan-500">{productId} Page</h1>
          <h2 className="text-lg">
            This is the {productId} page of the Next.js application.
          </h2>
        </div>
      </div>
    );
}