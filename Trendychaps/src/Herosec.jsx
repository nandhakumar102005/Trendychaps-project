import { useState } from "react";
function Herosec({searchquery,setSearchquery}){

    
    return(
        <>
        <div className="container-xxxl" style={{marginTop:"55px"}} >
        <div id="herobg">
            <h1 id="herotitle">TRENDY CHAPS</h1>
            <h5 id="herop">Menswear Collections built for Comfort,Confidence and Everyday Style.</h5>
           <a href="#Products-show"> <button id="herobtn">Shop Now</button></a>
           
            </div>      
             <marquee id="marquee" >Elevate your Style with us!!</marquee>
             </div>

             <div id="search-container">
                <input type="search"  placeholder="Explore the latest drop!!"   id="searchbox"
                
                value={searchquery} onChange={(e)=>setSearchquery(e.target.value)}></input>
             </div>
             
        </>
    )
}

export default Herosec;