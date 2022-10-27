import * as React from 'react'
import Header from '../header'
import Main from '../main'

export default function Site({children}) {
  return (
    <>
      <Header/>
      <Main>{children}</Main>
    </>
  )
}