type AuthLayoutProps = Readonly<{
  children: React.ReactNode;
  heading: string;
  subject: string;
  body: string;
}>;



export default function AuthTemplate({
  children,
  heading,
  subject,
  body,
}: AuthLayoutProps) {

  const forgot_paass = heading === "Forgot Password"; 
  const isLogin = heading === "Welcome Back";

  return (
    <div className="w-full flex justify-center overflow-y-auto mb-20 min-h-[75vh]">
      <div className="w-full max-w-2xl rounded-xl bg-white shadow-sm border border-slate-200 p-6">
        {/* Top Badge */}
        <div className="bg-cyan-700 text-white p-1 rounded-md w-fit px-4 text-center mb-3 text-sm font-medium">
          Practice Project
        </div>

        {/* Heading */}
        {forgot_paass === true ? (
          <h1 className="text-2xl font-bold tracking-tight text-red-500 leading-snug text-center">
            {heading}
          </h1>
        ) : isLogin === true ? (
          <h1 className="text-2xl font-bold tracking-tight text-green-500 leading-snug text-center">
            {heading}
          </h1>
        ) : (
          <h1 className="text-2xl font-bold tracking-tight text-cyan-700 leading-snug text-center">
            {heading}
          </h1>
        )}

        {/* Subject */}
        <h2 className="mt-2 text-sm text-slate-500 text-center">{subject}</h2>

        {/* Divider */}
        <div className="w-full border-t border-cyan-500 my-4"></div>

        {/* Body */}
        <p className="text-xs leading-7 text-slate-600 text-center">{body}</p>

        {/* Page Content */}
        <div className="flex items-center justify-center">{children}</div>

        {/* Bottom Buttons */}
        <div className="mt-2 flex gap-3 justify-center w-full border-t border-slate-200 pt-6">
          <button className=" border border-slate-300 px-4 py-2 text-xs font-medium text-black hover:bg-cyan-300 transition-all duration-300 cursor-pointer">
            Explore
          </button>

          <button className=" border border-slate-300 px-4 py-2 text-xs font-medium text-black hover:bg-cyan-300 transition-all duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
