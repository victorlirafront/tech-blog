import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '@/Context/pagination';
import { ScrollProvider } from '@/Context/scrollProvider';
import { ThemeProviderFC } from '@/Context/darkmode';
import { AddToFavoritsProvider } from '@/Context/addToFavorits';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <ScrollProvider>
        <ThemeProviderFC>
          <AddToFavoritsProvider>
            <Component {...pageProps} />
          </AddToFavoritsProvider>
        </ThemeProviderFC>
      </ScrollProvider>
    </GlobalContextProvider>
  );
}
