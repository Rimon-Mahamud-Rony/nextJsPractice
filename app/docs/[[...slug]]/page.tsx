export default async function Docs(
  { params }: { params: Promise<{ slug: string[] }>; }
) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <div className="w-full h-screen items-center flex flex-row justify-center bg-gray-100">
        <div className="text-slate-500">
          <h1 className="text-2xl font-bold text-cyan-500">Docs Page</h1>
          <h2 className="text-lg">
            viewing the feature
            <span className="text-2xl font-semibold text-rose-500">
              {" "}
              {slug[0]}{" "}
            </span>
            and concept
            <span className="text-2xl font-semibold text-green-500">
              {" "}
              {slug[1]}{" "}
            </span>
            page of the Next.js application.
          </h2>
        </div>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div className="w-full h-screen items-center flex flex-row justify-center bg-gray-100">
        <div className="text-slate-500">
          <h1 className="text-2xl font-bold text-cyan-500">Docs Page</h1>
          <h2 className="text-lg">
            viewing the <span className="text-2xl font-semibold text-rose-500"> {slug[0]} </span> page of the Next.js application.
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen items-center flex flex-row justify-center bg-gray-100">
        <div className="text-slate-500">
          <h1 className="text-2xl font-bold text-cyan-500">Docs Page</h1>
          <h2 className="text-lg">
            viewing the <span className="text-2xl font-semibold text-rose-500"> docs home page </span> of the Next.js application.
          </h2>
        </div>
      </div>
    );
  }
}
