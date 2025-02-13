'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '@/app/store/auth-slice';

export default function AuthButton() {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isAuthenticated } = useSelector((state) => (state as any).auth);

  useEffect(() => {
    if (session) {
      dispatch(setUser(session.user));
    } else {
      dispatch(clearUser());
    }
  }, [session, dispatch]);

  return (
    <div className="text-center">
      {!isAuthenticated ? (
        <button
          onClick={() => signIn('google')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      ) : (
        <div>
          <p className="mb-4">
            Signed in as {session?.user?.email}
          </p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}