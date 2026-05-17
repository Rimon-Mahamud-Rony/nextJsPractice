import TestPageDesign from "./components/TestPageDesign";

export default function Home() {
  return (
    <TestPageDesign
      heading="Welcome to Next.js!"
      subject="Get started by editing app/page.tsx"
      body="This is a practice project to explore the features of Next.js and improve my skills in building web applications. Feel free to explore the code and make changes to see how it works!"
    >
      <div className="items-center flex flex-row justify-center bg-gray-100 p-5">
        <div className="text-slate-500">
          <h1 className="text-xl font-bold mb-2 text-cyan-500">Welcome to Next.js!</h1>

          <h2 className="text-base text-black">
            Get started by editing{" "}
            <code className=" px-2 py-1 rounded">app/page.tsx</code>
          </h2>
        </div>
      </div>
    </TestPageDesign>
  );
}
