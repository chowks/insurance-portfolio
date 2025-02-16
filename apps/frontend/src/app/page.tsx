import AuthButton from './components/auth-button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">
      Login to Zurich Customer Portal
      </h1>
      <AuthButton />
    </main>
  );
}