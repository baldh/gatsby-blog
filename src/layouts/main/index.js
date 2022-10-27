import * as React from "react"
import Breadcrumb from '../../components/breadcrumb'

export default function Main({children}) {
  return (
    <main>
      <Breadcrumb path={"/blog/recipe/vegan/apple-pie"}/>
      {children}
    </main>
  )
}