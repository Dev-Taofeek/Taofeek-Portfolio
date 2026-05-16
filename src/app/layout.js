import "./globals.css";

export const metadata = {
    metadataBase: new URL("https://taofeek-portfolio.vercel.app/"),
    title: {
        default: "Obayomi Taofeek | Frontend Developer",
        template: "%s | Obayomi Taofeek",
    },
    description:
        "Frontend Developer building clean, responsive, and high-performance web experiences with React, Next.js, TypeScript, and Tailwind CSS.",
    keywords: [
        "Obayomi Taofeek",
        "Frontend Developer",
        "React Developer",
        "Next.js Developer",
        "JavaScript Developer",
        "TypeScript Developer",
        "Tailwind CSS Developer",
        "Frontend Engineer Nigeria",
        "Web Developer Portfolio",
    ],
    authors: [{ name: "Obayomi Taofeek" }],
    creator: "Obayomi Taofeek",
    openGraph: {
        title: "Obayomi Taofeek | Frontend Developer",
        description:
            "Frontend Developer building modern, responsive, and business-focused web experiences.",
        url: "https://taofeek-portfolio.vercel.app/",
        siteName: "Obayomi Taofeek Portfolio",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Obayomi Taofeek Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Obayomi Taofeek | Frontend Developer",
        description:
            "Frontend Developer building clean, responsive, and high-performance web experiences.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
