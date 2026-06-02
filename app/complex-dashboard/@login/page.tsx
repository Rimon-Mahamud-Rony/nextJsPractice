import CommonPageDesign from "@/app/components/CommonPageDesign";

export default function LoginSlot() {
  return (
    <CommonPageDesign>
      <section className="flex items-center justify-center h-[80vh] ">
        <div className="text-center border-2 border-gray-200 w-1/2 rounded-xl p-6 shadow-sm">
          <h2 className="mb-4 text-3xl font-semibold text-white py-10">
            Login Page
          </h2>
        </div>
      </section>
    </CommonPageDesign>
  );
}