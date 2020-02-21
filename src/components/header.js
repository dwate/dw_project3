import React from "react"
import {Link} from "gatsby"
/*import "../styles/header.module.scss" */
import headerstyles from "../styles/header.module.scss"
const Header = () => {
    return (
        <header className={headerstyles.header}>
            <h1>
                <Link className={headerstyles.title} to="/">
                    Dave Waters
                </Link>
            </h1>
            <nav>
                <ul className={headerstyles.navList}>
            <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to ="/">Home</Link></li>
            <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to ="/about">About Me</Link></li>
           <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to ="/projects">My Projects</Link></li>
           <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to ="/contact">Contact Me</Link></li>
            </ul>
            </nav>

        </header>
    )
}

export default Header