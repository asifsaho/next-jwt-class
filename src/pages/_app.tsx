import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NoSSR } from "@kwooshung/react-no-ssr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSSR>
      <Component {...pageProps} />
    </NoSSR>
  );
}
