import * as React from "react"
import {Seo} from '../../components/seo'

export default function BlogPage(){
  return (
    <>
      <Seo
        title={"Blog Page"}
        description={"All blogposts are listed here"}
        path={"post"}
      />
      <h1>This is Blog page</h1>
    </>

  )
}