export default function RevenueMetrics() {
  return (
    <>
      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-800"> <span className="text-green-500">Default</span> Revenue</h2>

        <div className="space-y-2">
          <p className="text-sm text-gray-500">Total Revenue</p>

          <p className="text-4xl font-bold text-gray-900">$24,500</p>

          <p className="text-sm text-green-600">+8.2% from last month</p>
        </div>
      </section>
    </>
  );
}
