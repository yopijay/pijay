import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "../assets/globals.css";

export const metadata: Metadata = {
    title: "Pijay | Frontend Developer",
    description:
        "Frontend Developer with 6+ years experience specializing in React, Next.js, and transforming Figma designs into pixel-perfect websites. Currently learning React Native for mobile development.",
    keywords: [
        "frontend developer",
        "react developer",
        "next.js developer",
        "web developer",
        "figma to code",
        "responsive design",
        "react native",
        "typescript",
        "tailwind css",
        "portfolio",
        "pijay",
    ],
    authors: [{ name: "Pijay" }],
    creator: "Pijay",
    publisher: "Pijay",
    openGraph: {
        title: "Pijay | Frontend Developer",
        description:
            "Frontend Developer with 6+ years experience. Transforming Figma designs into pixel-perfect websites with React, Next.js, and modern technologies.",
        url: "https://pijay.vercel.app", // Replace with your actual domain
        siteName: "Pijay",
        // images: [
        //     {
        //         url: "/og-image.png", // Add this image to your public folder
        //         width: 1200,
        //         height: 630,
        //         alt: "Pijay - Frontend Developer Portfolio",
        //     },
        // ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
    applicationName: "Pijay",
    referrer: "origin-when-cross-origin",
    alternates: {
        canonical: "https://pijay.vercel.app", // Replace with your actual domain
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-[#36454F] [&::-webkit-scrollbar]:hidden">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
