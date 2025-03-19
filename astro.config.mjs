// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'MeowFi',
      social: {
        discord: 'https://discord.com/invite/RZWntTWFrb',
      },
      logo: {
        src: './src/assets/logo.webp',
        alt: 'MeowFi Logo',
      },
      favicon: '/favicon.ico',
      components: {
        PageTitle: './src/components/title.astro',
        Sidebar: './src/components/sidebar.astro',
      },
      customCss: ['./src/styles/theme.css'],
    }),
  ],
})
