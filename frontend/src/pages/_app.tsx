import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '@/Context/pagination';
import { ScrollProvider } from '@/Context/scrollProvider';
import { AddToFavoritsProvider } from '@/Context/addToFavorits';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleSignInProvider } from '@/Context/googleSignIn';
import { CurrentUserProvider } from '@/Context/currentUser';
import Layout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleSignInProvider>
      <GlobalContextProvider>
        <ScrollProvider>
          <CurrentUserProvider>
            <AddToFavoritsProvider>
              <GoogleOAuthProvider clientId="1038532450717-5sjt921eagtenq8oe19at9548fq4rpea.apps.googleusercontent.com">
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </GoogleOAuthProvider>
            </AddToFavoritsProvider>
          </CurrentUserProvider>
        </ScrollProvider>
      </GlobalContextProvider>
    </GoogleSignInProvider>
  );
}
