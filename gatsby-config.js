const config = require('./config/website')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  /* General Information */
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     /*
    //      * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
    //      * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
    //      */
    //     // baseUrl: `dev-gatbsyjswp.pantheonsite.io`,
    //     baseUrl: `askable.com`,
    //     // The protocol. This can be http or https.
    //     protocol: `https`,
    //     // Indicates whether the site is hosted on wordpress.com.
    //     // If false, then the asumption is made that the site is self hosted.
    //     // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
    //     // If your site is hosted on wordpress.org, then set this to false.
    //     hostingWPCOM: false,
    //     // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
    //     // This feature is untested for sites hosted on Wordpress.com
    //     useACF: false,
    //     includedRoutes: [
    //       "**/posts",
    //       "**/pages",
    //       // "**/media"
    //     ],
    //   },
    // },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
