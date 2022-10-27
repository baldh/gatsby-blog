import * as React from "react"
import {Link} from 'gatsby'
import {breadcrumb} from "./breadcrumb.module.css"
import 'remixicon/fonts/remixicon.css'

export default function Breadcrumb({path}) {
  const locations = path.split("/").filter(c=>c!=="")
  const locationPaths = locations.map((_,index)=>
    locations.slice(0,index+1).join("/")
  )
  return (
    <nav aria-label={"Breadcrumb"} className={breadcrumb}>

      <ul>
        {locations.map((location,index)=>(
          <li>
            {
              (index === locations.length-1)?
                location:
                (
                  <>
                    <Link to={`/${locationPaths[index]}`}>{location}</Link>
                    <i className={"ri-arrow-right-s-line"}></i>
                  </>
                )
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}