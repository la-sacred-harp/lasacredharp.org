import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const singings = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/singings" }),
    schema: z.object({
        title: z.string(),
        order: z.number(),
    }),
});

const navs = defineCollection({
    loader: file("src/content/nav.yaml"),
    schema: z.object({
        entries: z.array(
            z.object({
                title: z.string(),
                href: z.string(),
            }),
        ),
    }),
});

const faqs = defineCollection({
    loader: file("src/content/faq.yaml"),
    schema: z.object({
        title: z.string(),
        content: z.string(),
    }),
});

export const collections = {
    faqs,
    navs,
    singings,
};
