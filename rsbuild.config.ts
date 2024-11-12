import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [pluginReact(), pluginLess()],
  html: {
    favicon: './public/icons/logo/topesologo-icon-tiny.png',
    title: "Top ESO Builds",
    meta:{
      description: "The only source of top ESO builds",
      site_name: "Top ESO Builds",
      image: "/icons/logo/topesologo-icon.png",
      "theme-color":"#0d217d",
      "og:image:height": "300",
      "og:image:width": "300",
      "og:site_name" :"Top ESO Builds",
      "og:description" :"The only source of top ESO builds",
      "og:image" :"/icons/logo/topesologo-icon.png",
      "twitter:title":"Top ESO Builds",
      "twitter:card":"summary",
      "twitter:description":"The only source of top ESO builds"
    }
  },
});
