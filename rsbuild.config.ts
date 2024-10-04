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
      image: "./public/icons/logo/topesologo-icon.png",
      themeColor:"#0d217d"
    }
  },
});
