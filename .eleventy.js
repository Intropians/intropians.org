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
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");
};
