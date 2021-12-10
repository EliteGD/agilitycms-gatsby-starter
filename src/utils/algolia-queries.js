

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
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // overrides main index name, optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
    mergeSettings: false, // optional, defaults to false.  See notes on mergeSettings below
  },
];

module.exports = queries