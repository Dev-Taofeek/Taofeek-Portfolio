import "../app/globals.css";

export const metadata = {
    metadataBase: new URL("https://your-portfolio-link.vercel.app"),

    title: {
        default: "Obayomi Taofeek | Frontend Developer",
        template: "%s | Obayomi Taofeek",
    },

    description:
        "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and modern responsive web applications. Building fast, interactive, and user-focused digital experiences.",

    keywords: [
        "Obayomi Taofeek",
        "Frontend Developer",
        "React Developer",
        "Next.js Developer",
        "JavaScript Developer",
        "TypeScript Developer",
        "Tailwind CSS",
        "Web Developer Nigeria",
        "Frontend Engineer",
        "Responsive Web Design",
    ],

    authors: [
        {
            name: "Obayomi Taofeek",
            url: "https://your-portfolio-link.vercel.app",
        },
    ],

    creator: "Obayomi Taofeek",

    openGraph: {
        title: "Obayomi Taofeek | Frontend Developer",
        description:
            "Frontend Developer building modern, responsive, and high-performance web experiences.",
        url: "https://your-portfolio-link.vercel.app",
        siteName: "Obayomi Portfolio",
        locale: "en_US",
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
            "Frontend Developer building modern and responsive web applications.",
        creator: "@ObayomiTaofeek",

        images: ["/og-image.png"],
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
