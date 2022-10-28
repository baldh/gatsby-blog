import * as React from "react"
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import HeaderNav from './headerNav'
import {header, headerContent, siteIcon} from './header.module.css'

const HeaderLayout = () => (
  <header className={header}>
    <div className={headerContent}>
      <Link to={"/"}>
        <StaticImage
          src={"../../assets/images/logo.png"}
          alt={"Site Icon"}
          className={siteIcon}
        />
      </Link>
      <HeaderNav/>
    </div>
  </header>
)

export default HeaderLayout