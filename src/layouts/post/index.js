import React from "react"
import {graphql, Link} from "gatsby"
import {MDXProvider} from '@mdx-js/react'

const shortcodes = {Link} //provide components that you're going to use in MDX file

export default function PostLayout({data, children}) {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </>
  )
}

export const query = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
            }
        }
    }
`