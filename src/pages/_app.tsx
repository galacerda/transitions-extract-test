import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

// utilizando o pages route pois permite trabalhar com SSR
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Extrato</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
