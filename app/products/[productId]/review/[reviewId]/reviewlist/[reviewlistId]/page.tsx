export default async function ReviewList(
    {params}: {params: Promise<{ productId: string, reviewId: string, reviewlistId: string }>;}
)
{
    const { productId, reviewId, reviewlistId } = await params;
    return (
      <div className="w-full items-center flex flex-row justify-center bg-gray-100 p-5">
        <div className="text-slate-500">
          <h1 className="text-2xl font-bold text-cyan-500">Product id:  {productId} Page</h1> 
          <h2 className="text-lg">
            This is <span className="text-2xl font-semibold text-rose-500"> reviewID: {reviewId} </span> page of the Next.js application.
          </h2>
          <h2 className="text-lg">
            This is <span className="text-2xl font-semibold text-green-500"> reviewlistID: {reviewlistId} </span> page of the Next.js application.
          </h2>
        </div>
      </div>
    )
}