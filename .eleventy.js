const pluginSass = require("eleventy-plugin-sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sassPluginOptions = {
  sourcemaps: true
};
module.exports = eleventyConfig => {
  // Plug-ins
  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

  // Liquid options
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  eleventyConfig.setTemplateFormats([
    "md",
    "html",
    "njk"
  ]);
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
};
