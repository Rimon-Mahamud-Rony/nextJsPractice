import CommonPageDesign from "../components/CommonPageDesign";
export default function Products() {
  return (
    <CommonPageDesign>
      <div className="flex min-h-[90vh] items-center justify-center p-4">
        <div className="w-full items-center flex flex-row justify-center bg-gray-100 p-5">
          <div className="text-slate-500">
            <h1 className="text-2xl font-bold text-cyan-500">Products Page</h1>
            <h2 className="text-lg">
              This is the products page of the Next.js application.
            </h2>
          </div>
        </div>
      </div>
    </CommonPageDesign>
  );
}
