import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { trpc } from '@/utils/trpc';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

// Wrap the export of the main app with tRPC's withTRPC() function
export default trpc.withTRPC(App);
