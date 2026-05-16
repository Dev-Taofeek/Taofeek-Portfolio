import { projects } from "@/data/portfolio";

export default function sitemap() {
    const baseUrl = "https://taofeek-portfolio.vercel.app";

    const projectPages = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...projectPages,
    ];
}
