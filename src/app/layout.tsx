import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/header/Header";
import Footer from "./_components/layout/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "IMC",
    description: "application qui calcule votre imc.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="h-full">
            <body className={`${inter.className} bg-white dark:bg-black`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
