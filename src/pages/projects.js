import React from "react"
import Layout from "../components/layout"
import projectstyles from "../styles/projects.scss"
import Example from "../components/Example.png"
 const ProjectsPage = () => {
    return (
        <div>
            
            <Layout>
               <body className={projectstyles.body}>
            <div className="proInfo">
                <h1>Projects</h1>
                <div className="project">
                    <img className="ExImg" src={Example} alt="Example" title="Project Coming Soon" width="20%" height="20%"/>
                    <div className="ProCont">
                        <h3>Project 1</h3>
                        <p id="para">Full description- Coming Soon.</p>
                    </div>
                    <div className="linkTo"><a href="https://github.com">Github Repo</a> <br/> 
                    <a href="https://app.netlify.com">Netlify Link</a>
                    </div>
                </div>
            
            <div className="project">
            <img className="ExImg" src={Example} alt="Example" title="Project Coming Soon" width="20%" height="20%"/>
            <div className="ProCont">
                <h3>Project 2</h3>
                <p id="para">Full description- Coming Soon.</p>
                </div>
                 <div className="linkTo"><a href="https://github.com">Github Repo</a> <br/> <a href="https://app.netlify.com">Netlify Link</a>
                 </div>
            </div>
            
            <div className="project">
                    <img  className="ExImg" src={Example} alt="Example" title="Project Coming Soon" width="20%" height="20%"/>
                    <div className="ProCont">
                        <h3>Project 3</h3>
                        <p id="para">Full description- Coming Soon.</p>
                    </div>
                    <div className="linkTo"><a href="https://github.com">Github Repo</a> <br/> 
                    <a href="https://app.netlify.com">Netlify Link</a>
                    </div>
                </div>
           
            
           </div>
           </body>
           
            </Layout>
        
        </div>
    )
}

export default ProjectsPage