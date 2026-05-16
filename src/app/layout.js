import "./globals.css";

export const metadata = {
    metadataBase: new URL("https://taofeek-portfolio.vercel.app"),

    title: {
        default: "Obayomi Taofeek | Frontend Developer",
        template: "%s | Obayomi Taofeek",
    },

    description:
        "Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Building fast, accessible, and business-focused web experiences. Open to frontend roles and freelance projects.",

    keywords: [
        "Obayomi Taofeek",
        "Frontend Developer Nigeria",
        "React Developer",
        "Next.js Developer",
        "JavaScript Developer",
        "TypeScript Developer",
        "Tailwind CSS Developer",
        "Frontend Engineer",
        "Web Developer Portfolio",
        "Responsive Web Design",
    ],

    authors: [
        {
            name: "Obayomi Taofeek",
            url: "https://taofeek-portfolio.vercel.app",
        },
    ],

    creator: "Obayomi Taofeek",

    openGraph: {
        title: "Obayomi Taofeek | Frontend Developer",
        description:
            "Frontend Developer building modern, responsive, and high-performance web experiences with React, Next.js, and Tailwind CSS.",
        url: "https://taofeek-portfolio.vercel.app",
        siteName: "Obayomi Taofeek Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Obayomi Taofeek — Frontend Developer Portfolio",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Obayomi Taofeek | Frontend Developer",
        description:
            "Frontend Developer building clean, responsive, and high-performance web experiences.",
        creator: "@ObayomiTaofeek",
        images: ["/og-image.png"],
    },

    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
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

    // Structured data for Google rich results
    other: {
        "theme-color": "#eeeeec",
    },
};

// JSON-LD structured data for Google
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Obayomi Taofeek",
    url: "https://taofeek-portfolio.vercel.app",
    jobTitle: "Frontend Developer",
    knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Frontend Development",
    ],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Ogun State",
        addressCountry: "NG",
    },
    sameAs: [
        "https://github.com/Dev-Taofeek",
        "https://www.linkedin.com/in/taofeek-obayomi-a7b29a36b/",
    ],
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#eeeeec",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://api.web3forms.com" />
                <link rel="dns-prefetch" href="https://api.web3forms.com" />

                {/* JSON-LD structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
