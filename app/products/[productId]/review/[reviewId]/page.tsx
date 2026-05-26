import { notFound } from "next/navigation"; 

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetails(
    { params }: {
        params: Promise<{productId:string, reviewId: string}>;
    }
) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) { 
    notFound();
  }
  const randomNum = getRandomInt(2);
  if (randomNum === 1) {
    throw new Error("Random error occurred while fetching review details.");
  }
    return (
        <div className="w-full  items-center flex flex-row justify-center bg-gray-100 p-5">
        <div className="text-slate-500">
          <h1 className="text-2xl font-bold text-cyan-500">Product id:  {productId} Page</h1> 
          <h2 className="text-lg">
            This is <span className="text-2xl font-semibold text-rose-500">
              reviewID: {reviewId} </span> page of the Next.js application.
          </h2>
        </div>
      </div>
    )
}