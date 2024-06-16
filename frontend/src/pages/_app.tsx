import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '@/Context/pagination';
import { ScrollProvider } from '@/Context/scrollProvider';
import { ThemeProviderFC } from '@/Context/darkmode';
import { AddToFavoritsProvider } from '@/Context/addToFavorits';
import { SignInProvider } from '@/Context/signIn';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <SignInProvider>
        <ScrollProvider>
          <ThemeProviderFC>
            <AddToFavoritsProvider>
              <Component {...pageProps} />
            </AddToFavoritsProvider>
          </ThemeProviderFC>
        </ScrollProvider>
      </SignInProvider>
    </GlobalContextProvider>
  );
}
