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
    * The following set of plugins are used to transform .mdx files in "/post" directory
    * */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    `gatsby-plugin-mdx`
  ]
}