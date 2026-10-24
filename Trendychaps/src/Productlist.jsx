import { useEffect,} from "react";
import Product from "./Product"
import { useState } from "react";
import Herosec from "./Herosec";
import Itemsshow from "./Itemsshow";

function Productlist() {

   const [products,setProducts] = useState(null)
   const [searchquery,setSearchquery] = useState("")   

    useEffect(()=>{
        //  fetch("http://localhost:3000/Products")
        //  fetch(`http://${window.location.hostname}:3000/Products`)
        fetch("https://raw.githubusercontent.com/nandhakumar102005/Trendy-chaps/refs/heads/main/ProductData.json")
        .then((response)=>{
            if(response.ok){
            console.log("API Fetched Sucessfully")
            return response.json()
            }
        })
        .then((data)=>{
            setProducts(data)
        })
        .catch((error)=>{
            console.log("error Fetching Product")
        })
    },[]);

    if(!products||products.length==0){
        return(
            <>
            <h2 className="text-center " style={{color:"gray"}} >Loading Products...</h2>
            </>
        )

    }

    const filteredProducts = products.filter((prod)=> prod.name && prod.name.toLowerCase().includes(searchquery.toLowerCase()))
   

    const Productslist = filteredProducts.map((prod)=> 
    <Product key={prod.id} name ={prod.name} img={prod.img} price={"₹"+prod.price} id={prod.id}/>)
    
    return (
        <>
        <Herosec searchquery={searchquery} setSearchquery={setSearchquery}/>
         <div className="container">
            <Itemsshow/>

        <div className="row  g-4 " style={{justifyContent:"space-around"}}>
        {Productslist}

         </div>

      </div>


        </>
    )
}

export default Productlist;

// npx json-server -- data/ProductData.json --port 3000 -- s./data