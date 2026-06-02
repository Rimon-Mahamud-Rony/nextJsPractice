export default function UsersAnalytics() {
  return (
    <>
      <section className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          <span className="text-blue-500">Default</span> User Analytics
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-sm text-gray-500">Users</p>
            <p className="text-2xl font-bold">2,450</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Active</p>
            <p className="text-2xl font-bold">1,890</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">New</p>
            <p className="text-2xl font-bold">145</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Growth</p>
            <p className="text-2xl font-bold text-green-600">+12%</p>
          </div>
        </div>
      </section>
    </>
  );
}
