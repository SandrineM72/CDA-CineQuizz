import { Limelight } from "next/font/google";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client/react";
import type { AppProps } from "next/app";
import client from "@/graphql/client";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className={limelight.className}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
