export const siteConfig = {
    title: "Los Angeles Sacred Harp",
    domain: "https://lasacredharp.org",
    defaultMeta: {
        title: "Los Angeles Sacred Harp and Shape Note Singing",
        description:
            "Los Angeles Sacred Harp and shape note singings take place around the city every month. All are welcome and no prior experience is necessary!",
    },
    defaultOpenGraph: {
        title: "Los Angeles Sacred Harp and Shape Note Singing",
        description:
            "Los Angeles Sacred Harp and shape note singings take place around the city every month. All are welcome and no prior experience is necessary!",
    },
};

export interface PageMeta {
    meta?: {
        title?: string;
        description?: string;
    };
    openGraph?: {
        title?: string;
        description?: string;
    };
}
