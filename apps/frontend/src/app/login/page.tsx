'use client'

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session) {
      router.push("/users");
    }
  }, [session, router]);

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn("google");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
}