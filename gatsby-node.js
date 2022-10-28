const path = require("path")
const postLayout = path.resolve(`./src/layouts/post/index.js`)

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  const result = await graphql(`
   query{
      allFile {
        nodes {
          name
          absolutePath
        }
      }
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
   }
 `)

  if(result.errors) {
    reporter.panicOnBuild(`Error loading MDX result`, result.errors)
  }

  //Create blog post pages
  const posts = result.data.allMdx.nodes
  const files = result.data.allFiles.nodes
  const getFilename = (files, path) => (
    files.filter(file=> file.absolutePath === path)[0].name
  )

  //we are calling `createPage` for each result
  posts.forEach(node=> {
    createPage({
      //In case "slug" is not provided in the .mdx file, we will execute `getFilename`.
      //`getFilename` will match "contentFilePath" of the .mdx file
      //with all .mdx file's "absolutePath" and return the filename
      path: node.frontmatter.slug ?? getFilename(files, node.internal.contentFilePath),
      component: `${postLayout}?__contentFilePath=${node.internal.contentFilePath}`,
      //we can use the values in this context in our page layout component
      context: {id: node.id}
    })
  })
}
