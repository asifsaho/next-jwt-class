import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NoSSR } from "@kwooshung/react-no-ssr";
import { AuthGuard } from "@/components/auth-guard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSSR>
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </NoSSR>
  );
}
