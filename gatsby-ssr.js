import {Site} from './src/layouts'
import './src/global.css'

export const wrapPageElement = ({element,props}) => (
  <Site {...props}>{element}</Site>
)
