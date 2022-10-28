import * as React from "react"
import {Layout} from './src/layouts'
import './src/global.css'

export const wrapPageElement = ({element,props}) => (
  <Layout {...props}>{element}</Layout>
)
