import ProtectedRoute from "../components/protected-route";

export default function UsersLayout() {
  return (
    <ProtectedRoute>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </ProtectedRoute>
  );
}