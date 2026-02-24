import Head from "next/head";
import type { ReactNode } from "react";
import { Quantico } from 'next/font/google';

import Footer from "./Footer";
import AdminHeader from "./admin/AdminHeader";

interface AdminLayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const quantico = Quantico({
	weight: ["400"],
});

export default function AdminLayout({ children, pageTitle }: AdminLayoutProps) {
	return (
		<>
			<Head>
				<title>{`CyberQuiz - ${pageTitle}`}</title>
				<meta name="description" content="Administration CyberQuiz" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={`flex flex-col min-h-screen bg-black ${quantico.className}`}>
				<AdminHeader />
				<main className="flex-1">{children}</main>
				<Footer />
			</div>
		</>
	);
}
