import Home from "./assets/home.png"
import About from "./assets/About.png"
import contact from "./assets/contact.png"
import Cart from "./assets/Cart.png"
import { Link, } from "react-router-dom"


function Navbar(){

    const CloseMenu =()=>{
        const navMenu = document.querySelector(".navbar-collapse");
        if(navMenu && navMenu.classList.contains('show')){
            navMenu.classList.remove('show')
        }
    }    
    
    return(
        <>
        <nav className="navbar navbar-expand-md py-3" id="nav-container">
            <div className="container-xxl d-flex justify-content-between align-items-center">
                
            
                <a href="#" className="text-decoration-none">
                    <h2 id="Hero-Heading" className="mb-0">TRENDY CHAPS</h2>
                </a>

            
                <div className="d-flex align-items-center d-md-none gap-3">
                    <Link to="/app/cart" onClick={CloseMenu} className="text-decoration-none text-dark d-flex flex-column align-items-center"> 
                        <img id="img" src={Cart} alt="Cart" />
                        <p id="nav-p" className="mb-0" style={{ fontSize: '10px' }}>CART</p>
                    </Link> 

                    <button className="navbar-toggler btn btn-bg-dark m-0 shadow-none" type="button" data-bs-target="#Links" data-bs-toggle="collapse" aria-controls="Links" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                
                <div id="Links" className="collapse navbar-collapse  justify-content-md-center" >
                    <div className="navbar-nav align-items-center gap-4 gap-lg-5 pt-3 pt-md-0 mx-md-auto" id="nav">
                       
                        <div className="nav-item">
                          <Link to="/app" onClick={CloseMenu}  > <div className=" text-dark d-flex flex-column align-items-center" style={{cursor:"pointer",}}>
                                <img id="img" src={Home} alt="Home"/>
                                <p id="nav-p" className="fw-bold mb-0">HOME</p>
                            </div></Link>
                        </div>

                        <div className="nav-item">
                     <a href="#About-show">   <div className="d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                                <img id="img" src={About} alt="About Us" />
                                <p id="nav-p" className="fw-bold mb-0">ABOUT US</p>
                            </div></a>
                        </div>

                        <div className="nav-item">
                         <Link to="/app/Contact">   <div className="d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                                <img id="img" src={contact} alt="Contact Us" />
                                <p id="nav-p" className="fw-bold mb-0">CONTACT US</p>
                            </div></Link>
                        </div>

                        <div className="nav-item d-none d-md-block">
                            <Link to="/app/cart" onClick={CloseMenu}  className="text-decoration-none text-dark d-flex flex-column align-items-center"> 
                                <img id="img" src={Cart} alt="Cart" />
                                <p id="nav-p" className="mb-0">CART</p>
                            </Link>  
                        </div>
                       
                    </div>
                </div>

            </div>
        </nav>
        </>
    )
}

export default Navbar;