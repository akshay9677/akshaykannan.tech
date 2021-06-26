const rehypePrism = require('@mapbox/rehype-prism')
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRules = webpackConfig.module.rules.find((x) => !!x.oneOf).oneOf
      oneOfRules.unshift({
        test: /\.mdx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@mdx-js/loader',

            options: {
              rehypePlugins: [rehypePrism],
            },
          },
        ],
      })
      webpackConfig.node.fs = 'empty'
      return webpackConfig
    },
  },
}
