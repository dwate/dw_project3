import React from "react"
import Layout from "../components/layout"
import contactstyles from "../styles/contact.scss"

 const ContactPage = () => {
    return (
        <div>
            <Layout>
            <body className={contactstyles.body}>
               <div className="coninfo">
                <h2>CONTACT INFO</h2>
         <p><b>Address:</b><br/>253 Dagenham Road
              <br/> Rush Green
              <br/> Romford
              <br/> RM7 0TR</p>
               <p><b>E-mail:</b><a href="mailto:dwaters525@googlemail.com">dwaters525@googlemail.com</a></p>
         <p><b>Mobile:</b>+44 7846 983 356</p> 
         </div>
         </body>
            </Layout>
            
        </div>
    )
}

export default ContactPage