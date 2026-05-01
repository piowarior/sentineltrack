export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Users</h2>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Devices</h2>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Logs</h2>
        </div>
      </div>
    </div>
  );
}