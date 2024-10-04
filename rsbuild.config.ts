import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [pluginReact(), pluginLess()],
  html: {
    favicon: './public/icons/logo/topesologo-icon-tiny.png',
    title: "Top ESO Builds"
  },
});
