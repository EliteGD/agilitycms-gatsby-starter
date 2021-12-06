require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

//configure your agility plugin with environment variables so that
//your agility api credentials stay secure
const agilityConfig = {
  guid: process.env.AGILITY_GUID,
  apiKey: process.env.AGILITY_API_KEY,
  isPreview: process.env.AGILITY_API_ISPREVIEW === "true",
}

// algolia stuff

const myQuery = `{
  pages: allSitePage {
    nodes {
      objectID: id
      component
      path
      componentChunkName
      internal {
        type
        contentDigest
        owner
      }
    }
    totalCount
  }
}
`;


const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: 'prod_tender-carson', // overrides main index name, optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
    mergeSettings: false, // optional, defaults to false.  See notes on mergeSettings below
  },
];

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Agility CMS Gatsby Starter",
  },
  plugins: [
    `gatsby-plugin-netlify`,
   `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      //the name of the plugin
      resolve: "@agility/gatsby-source-agilitycms",
      //the options for our plugin
      options: {
        //your Agility Content Fetch API Guid
        guid: agilityConfig.guid,
        //your Agility Content Fetch API Key
        apiKey: agilityConfig.apiKey,
        //set this to true if you are using the preview API Key
        isPreview: agilityConfig.isPreview,
        //set this to true to see expanded traces in the build logs
        debug: false,
        //the languages you want to source content for
        languages: [
          {
            // The name of the language code
            name: "English",
            // The actual language code set in Agility CMS
            code: "en-us",
            // The name to be used in the URL path that represents the current language
            path: "en",
          },
        ],
        // The channels you want to include
        channels: [
          {
            // The reference name for the website channel as it is defined in Agility CMS
            referenceName: "website",
          },
        ],
        //the page template that will be used to render Agility CMS pages
        masterPageTemplate: "./src/AgilityPage.jsx",
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
        concurrentQueries: false, // default: true
        skipIndexing: false, // default: false, useful for e.g. preview deploys or local development
        continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
      },
    },
  ],
}
