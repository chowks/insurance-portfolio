'use client';

import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
}