import * as React from "react"
import Breadcrumb from '../../components/breadcrumb'

export default function MainLayout({children}) {
  const url = new URL(window.location.href)
  const matchPathname = /\/\w+\/\w+.*/g
  return (
    <main>
      {
        /*
        * The regex "matchPathname" matches path names of the format /parent/child/, /parent/child/grandchild and so on
        * Hence the path "/post/recipe" is matched. But "/post/" is not matched
        * */
        matchPathname.test(url.pathname) && <Breadcrumb pathname={url.pathname}/>
      }
      {children}
    </main>
  )
}
