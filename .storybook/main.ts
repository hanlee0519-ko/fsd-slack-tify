import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],

  webpackFinal: async (config) => {
    // Vanilla Extract 로더 추가
    config.module?.rules?.push({
      test: /\.css\.ts$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: { modules: true },
        },
        "vanilla-extract-loader",
      ],
      include: path.resolve(__dirname, "./"),
    });
    config.plugins?.push(new VanillaExtractPlugin());

    return config;
  },
};

export default config;
