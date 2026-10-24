import { Link } from "react-router-dom"
function About(){
    return(
        <>

        <div className="container-xxl fw-400 rounded p-4 " id="About-show" >
            <h3  className="text-center elevate" style={{fontSize1:"1.3rem"}}>Elevate Your Style with US</h3>
            
            <h3  id="shipping" className="text-center mt-3" style={{fontSize1:"1.3rem", borderBottom:"1px solid whitesmoke"}}>SHIPPING ALL OVER TAMILNADU</h3>

            <div  className="container foot d-flex justify-content-between mt-4">

                <div className="f-items mt-2 ">
                    <h5>Trendychaps</h5>
                    <p>Your one-stop destination for trendy fashion</p>
                </div>

                <div className="f-items mt-2">
                    <h5>Contact</h5>
                    <p>Phone: <b>+91 9360507063</b></p>
                    
                </div>

                 <div className="f-items mt-2">
                <h5>Get Touch in Social-media</h5>
                <p><a style={{textDecoration:"none", color:"white"}} href="https://www.instagram.com/trendy_chaps_/">Instagram </a></p>
                </div>
            </div>
         
        </div>

       
        
        </>
    )
}
export default About