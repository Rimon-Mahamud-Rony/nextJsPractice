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
        <div className="min-h-[20vh] rounded-sm border border-slate-20 p-6 shadow-sm text-black">
        <h1 className="text-xl font-bold">Product Details</h1>
        
            <p className="mt-3 text-base leading-6 text-slate-500">
              This is the details page for product with ID: <span className="font-mono text-red-700 font-bold text-3xl">{productId}</span>. You can add more content here to display detailed information about this product.
            </p>
        </div>
    );
}