'use client';

import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUsers } from '../user';

export default function Users() {
  const { data: session } = useSession();
  const { users, loading, error } = useUsers();
  const [revealedEmails, setRevealedEmails] = useState<Record<number, boolean>>({});
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  if (!session) {
    return null; 
  }

  const handleRevealEmail = (id: number) => {
    setRevealedEmails((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={() => signOut()}>Sign Out</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>
              Email: {revealedEmails[user.id] ? user.email : '***@***.***'}
              <button onClick={() => handleRevealEmail(user.id)}>Reveal Email</button>
            </p>
            {/* <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}