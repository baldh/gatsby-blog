import * as React from "react"
import {Link} from 'gatsby'
import {nanoid} from 'nanoid'
import {data} from "../../utils"
import {navMenu} from './header.module.css'

const navMenuItems = data.navMenuItems

const HeaderNav = () => (
  <nav>
    <ul className={navMenu}>
      {navMenuItems.map(navMenuItem => (
        <li key={nanoid(6)}>
          <Link to={navMenuItem.link}>{navMenuItem.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default HeaderNav