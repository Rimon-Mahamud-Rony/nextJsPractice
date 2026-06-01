import react from 'react';

export default function ComplexDashboard({
  sidebar,
}: { sidebar: React.ReactNode }) {
  return (
    <div>
      {sidebar}
      <h2>Dashboard Home</h2>
    </div>
  );
}