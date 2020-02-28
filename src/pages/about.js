import React from "react"
import Layout from "../components/layout"
import ProfilePic from "../components/profile.jpg"
import aboutstyles from "../styles/about.scss"
 const AboutPage = () => {
    return (
        <div>
            <Layout>
        <body className={aboutstyles.body}>
            <div className="Resume">   
                <div className="personalInfo">
            <section className="pic">
            <img src={ProfilePic} alt="Dave Waters" title="David Waters" width="70%" height="70%"/>
        </section>
        <h2>CONTACT INFO</h2>
         <hr/>
          <p><b>Address:</b><br/>253 Dagenham Road<br/>
                Rush Green<br/>
                Romford<br/>
                RM7 0TR</p>
                <p><b>E-mail:</b> <a href="mailto:dwaters525@googlemail.com">dwaters525@googlemail.com</a></p>
          <p><b>Mobile:</b> +44 XXXX XXX XXX</p> 

          <h2> PROFILE </h2>
          <hr/>
          <p>A keen and highly motivated individual with a range of problem solving and fault finding skills developed acrossed an engineering and military background. With a recent history of extended travel and a newly achieved qualification in web development, looking to pursue a new career in the web services industry.</p> 
     
    
       <h2>MISC INFO</h2>
          <hr/>
          <ul>
          <li>Full clean Driving license category B and C.</li>
          <li>Enjoys staying fit and leading an active lifestyle.</li>
          <li>Enthusiast of adventurous activities; including snowboarding, skiing and hiking.</li>
          <li>Interested in Travel, foreign culture and a wide variety of Music.</li>
        </ul>
        </div>

        <div className="EdExp">
        <h2> EDUCATION</h2>
          <hr/>
          <ul>
            <li>Diploma in Web Development <em>Open Classrooms</em></li>
            <li>Engineering Maintenance(electronic) NVQ Lvl 3       <em>British Army</em></li>
            <li>Advanced Apprenticeship in Engineering <em>British Army</em></li>
            <li> 3 A-Levels <em>Robert Clack School</em></li>
            <li> 9 GCSEs <em>Robert Clack School</em></li>
          </ul>

          <h2> EMPLOYMENT HISTORY </h2>
            <hr/>
         
          <h3>Sept 2018- Present<br/> Amazon LCY2 Tilbury, Essex</h3>
          <p><b>FC Associate</b> <br/>Worked in Pack Single Medium, packing customer items into boxes, as well as other indirect tasks such as; SLAM Operator- an automated system which checks the size and weight of packages and assigns delivery labels, investigating packages which the SLAM system finds issues with, as well as restocking of stations and re-allocation of assets around the facility.</p>
         
         
            <h3>Mar 2017-Feb 2018<br/> Tradestaff New Zealand</h3>
          <p><b>Manual Labourer</b><br/>General labouring tasks, from using hand and power tools to assist in the construction of a Salvation Army Hope centre in Wellington, as well as driving trucks and Rollers, and the use of hand tools to help build roads and landslide defences in Queenstown.</p>
     
    
            <h3>Oct 2016-Jan 2017<br/> AVL UK LTD</h3>
          <p><b>Commissioning Engineer</b><br/>Commissioned automated engine testbeds, full wiring checks of the test cell, integrating emission benches, fuel consumption devices as well as other test devices. Commissioning dynameters and testing their control and reactions whilst connected to a customers engine. Liasing with the customer to implement specific requirements for their engine testbeds.</p>
  
  
          <h3>Nov 2010- May 2015<br/> AVL UK LTD</h3>
          <p><b>Service Engineer</b><br/>Responsible for maintaining and calibrating a variety of equipment used in the research and development of powertrain systems within the automotive industry. Commissioned emission instruments, fuel measurement devices and combustion analysis equipment, as well as integration of the devices into an automated testbed software platform. Maintained equipment calibration register for all equipment on site. Carried out repairs on powertrain testbeds; electrical and software faults. Repaired and maintained dynamometers and their 3phase power cabinets. Controlled on site stock levels of spare parts and maintenance items. Diagnosed and rectified a multitude of computer hardware, software and networking issues.</p>
         
          
            <h3>May 2009- July 2010 <br/>British Army, Royal Electrical & Mechanical Engineers</h3>
          <p><b>Electronics Technician Team Leader</b><br/> Responsible for processing faulty equipment from other units within the British Army. Created relevant documentation and liaised with the units for collection of the repaired item. Controlled monthly inventory checks for a team of 30 men. This included toolbox checks, calibrated equipment, documentation and technical publications. Accountable for three multi-million pound repair facilities and the respected vehicles they were mounted on. Coordinated a three man repair section supporting the Army’s tank regiments on training exercises. Supervised the training and career progression of inexperienced junior technicians/soldiers</p>
          
          
          <h3>May 2005- May 2009<br/> British Army, Royal Electrical & Mechanical Engineers</h3>
          <p><b>Electronics Technician</b><br/>Responsible for securing and storing sensitive documents and equipment. Vehicle commander in convoys of the removal of assets from Iraq. Worked at short notice and in arduous conditions throughout the day and night. Repaired and rejuvenated life saving and battle winning equipment in an overseas operational environment, under strict engineering hygiene. Operated a General Purpose Digital Testing and Diagnostics Facility, repairing a multitude of equipments including: telecommunication devices and weapon systems for the British Army’s main battle winning assets. Carried out the maintenance of an aging fleet of vehicles, using both mechanical knowledge and electrical skills. Provided cable repair support to other sections within the company.</p>
        </div>
        </div>
        </body>
            </Layout>
            
         </div>
        
        
          

          
     
       
            
        
        
    )
}

export default AboutPage