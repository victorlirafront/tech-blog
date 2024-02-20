import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '@/Context/pagination';
import { ThemeProviderFC } from '@/Context/darkmode';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <GlobalContextProvider>
            <ThemeProviderFC>
                <Component {...pageProps} />
            </ThemeProviderFC>
        </GlobalContextProvider>
    )
}
