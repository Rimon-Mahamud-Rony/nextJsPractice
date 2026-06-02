import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <>
      <aside className="rounded-xl p-6 shadow-sm border border-gray-200 text-black bg-white">
        <h2 className="mb-4 text-lg font-semibold "> <span className="text-yellow-500">Archived</span> Notifications</h2>

        <div className="space-y-3">
          <Link
            className="text-blue-500 hover:underline"
            href="/complex-dashboard/"
          >
            Default Notifications
          </Link>
        </div>
      </aside>
    </>
  );
}
