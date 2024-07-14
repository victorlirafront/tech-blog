import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '@/Context/pagination';
import { ScrollProvider } from '@/Context/scrollProvider';
import { AddToFavoritsProvider } from '@/Context/addToFavorits';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <ScrollProvider>
        <AddToFavoritsProvider>
          <GoogleOAuthProvider clientId="1038532450717-5sjt921eagtenq8oe19at9548fq4rpea.apps.googleusercontent.com">
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </AddToFavoritsProvider>
      </ScrollProvider>
    </GlobalContextProvider>
  );
}
