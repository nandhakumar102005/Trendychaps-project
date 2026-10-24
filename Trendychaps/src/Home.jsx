import Herosec from "./Herosec";
import Navbar from "./Navbar";
import Itemsshow from "./Itemsshow";
import Productlist from "./Productlist";
import About from "./About";


function Home(){
    return(
        <>
        <Navbar/>
        {/* <Herosec/> */}
        <br />
        <Productlist/>
        <br></br>
        <About/>
        </>
    )
}

export default Home;