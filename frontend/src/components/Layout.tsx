import Head from "next/head";
import type { ReactNode } from "react";
import { Limelight } from 'next/font/google';

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const limelight = Limelight({
	weight: ["400"],
});

export default function Layout({ children, pageTitle }: LayoutProps) {
	return (
		<>
			<Head>
				<title>{`CinéQuizz - ${pageTitle}`}</title>
				<meta name="description" content="Application de quiz cinéma" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={`flex flex-col min-h-screen bg-zinc-900 ${limelight.className}`}>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</div>
		</>
	);
}
