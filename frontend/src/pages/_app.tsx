import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '@/Context/pagination';
import { ScrollProvider } from '@/Context/scrollProvider';
import { AddToFavoritsProvider } from '@/Context/addToFavorits';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <ScrollProvider>
        <AddToFavoritsProvider>
          <Component {...pageProps} />
        </AddToFavoritsProvider>
      </ScrollProvider>
    </GlobalContextProvider>
  );
}
