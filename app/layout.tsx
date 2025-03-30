import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CSPostHogProvider } from "@/app/analytics/posthogProvider";
import { AxiomWebVitals } from "next-axiom";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "400 600 950",
});

export const metadata: Metadata = {
    title: "TTT",
    description: "Card Game inside a Train",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CSPostHogProvider>
            <html lang="en">
                <body className={`${geistSans.variable} bg-background text-foreground min-h-svh antialiased`}>
                    <Injectors />
                    {children}
                </body>
            </html>
        </CSPostHogProvider>
    );
}

function Injectors() {
    return (
        <>
            <AxiomWebVitals />
            <SpeedInsights />
            <Toaster />
        </>
    );
}
