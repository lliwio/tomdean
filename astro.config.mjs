import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";


export default defineConfig({
   site: 'https://zerk.vercel.app',
  integrations: [tailwind(),  sitemap()]
});






// crafted by http://github.com/Jamship-io