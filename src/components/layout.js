import React from "react"
import "../styles/index.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import layoutstyles from "../styles/layout.module.scss"
const Layout = (props) => {
    return (
        <div className={layoutstyles.container}>
            <div className={layoutstyles.content}>
            <Header />
             {props.children}
            
             </div>
            <Footer />

        </div>
    )
}

export default Layout