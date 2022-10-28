import * as React from 'react'
import {Seo} from '../../components/seo'
import HeaderLayout from '../header'
import MainLayout from '../main'

export default function SiteLayout({children}) {
  return (
    <>
      <Seo/>
      <HeaderLayout/>
      <MainLayout>{children}</MainLayout>
    </>
  )
}