export default function ComplexDashboardLayout({
    children,
}: { children: React.ReactNode; }) {
  return (
    <div>
      <header>
        <h1>Complex Dashboard</h1>
      </header>
      <div>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}