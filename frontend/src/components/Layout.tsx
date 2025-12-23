import Head from "next/head";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
	children: ReactNode;
	pageTitle: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
	return (
		<>
			<Head>
				<title>{`CinéQuizz - ${pageTitle}`}</title>
				<meta name="description" content="Application de quiz cinéma" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col min-h-screen bg-zinc-900">
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
}
