// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "DiscoCats",
      social: {
        discord: "https://discord.com/invite/RZWntTWFrb",
      },
      logo: {
        src: "./src/assets/logo.avif",
        alt: "DiscoCats Logo",
      },
      components: {
        PageTitle: "./src/components/title.astro",
      },
      customCss: ["./src/styles/theme.css"],
      sidebar: [
        { label: "Introduction to MeowFi", slug: "" },
        {
          label: "Guides",
          items: [{ label: "Example Guide", slug: "guides/example" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
