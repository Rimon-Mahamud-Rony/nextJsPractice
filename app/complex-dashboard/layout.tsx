import CommonPageDesign from "@/app/components/CommonPageDesign";

export default function ComplexDashboardLayout({
    children,
    notifications,
    users,
    revenue,
    /// name should be same as the folder name
}: {
    children: React.ReactNode;
    notifications: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;       
}) {
      return (
        <CommonPageDesign>
          <div className="p-10">
            <main className="min-h-[80vh] p-6">
              <div className="mx-auto max-w-7xl">
                {/* Dashboard Header */}
                {children}

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {/* Left Section */}
                  <div className="space-y-4 lg:col-span-2">
                    {/* User Analytics */}
                    {users}
                    {/* Revenue */}
                    {revenue}
                  </div>
                  {/* Right Section */}
                  {notifications}
                </div>
              </div>
            </main>
          </div>
        </CommonPageDesign>
      );
}