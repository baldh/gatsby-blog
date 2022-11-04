const wrapESMPlugin = name =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name)
      const plugin = mod.default(opts)
      return plugin(...args)
    }
  }

module.exports = {
  siteMetadata: {
    siteUrl: "https://yourdomain.tld",
    title: "Your website title",
    description: "A brief description about your website",
    image: "https://source.unsplash.com/YFzPw-Ph1Hw" //image thumbnail for the site
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    /*
    * The following set of plugins are used to create blogposts from .mdx files in /posts folder
    * */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          rehypePlugins: [wrapESMPlugin('rehype-slug')]
        }
        //gatsbyRemarkPlugins: [ `gatsby-remark-autolink-headers` ],
      },
    }
  ]
}