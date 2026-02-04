import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Paul John Judan - Frontend Developer",
        template: "%s | Paul John Judan",
    },
    description:
        "Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Expert in converting client designs from Figma, PSD, and other design files into pixel-perfect, responsive web applications. Building exceptional user experiences for clients worldwide.",
    keywords: [
        "Frontend Developer",
        "React Developer",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Web Developer",
        "Tailwind CSS",
        "Portfolio",
        "Paul John Judan",
        "Full Stack Developer",
    ],
    authors: [{ name: "Paul John Judan" }],
    creator: "Paul John Judan",
    publisher: "Paul John Judan",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Paul John Judan - Frontend Developer",
        description:
            "Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Expert in converting client designs from Figma, PSD, and other design files into pixel-perfect, responsive web applications. Building exceptional user experiences for clients worldwide.",
        url: "/",
        siteName: "Paul John Judan Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Paul John Judan - Frontend Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Paul John Judan - Frontend Developer",
        description:
            "Professional Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Expert in converting client designs from Figma, PSD, and other design files into pixel-perfect, responsive web applications.",
        creator: "@yourtwitterhandle", // Replace with your actual Twitter handle
        images: ["/og-image.jpg"],
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
    verification: {
        // Add your verification tokens here when you have them
        // google: 'your-google-verification-token',
        // yandex: 'your-yandex-verification-token',
        // yahoo: 'your-yahoo-verification-token',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className="antialiased [&::-webkit-scrollbar]:hidden lg:overflow-hidden">
                {children}
            </body>
        </html>
    );
}
