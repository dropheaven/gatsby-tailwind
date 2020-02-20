/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
   plugins: [
      {
         resolve: `gatsby-plugin-postcss`,
         options: {
            postCssPlugins: [
               require('tailwindcss'), 
               require('autoprefixer'),
               require('cssnano')
            ]
         }
      },
      {
         resolve: `gatsby-plugin-purgecss`,
         options: {
            develop: false,
            tailwind: true
         }
      }
   ],
}
