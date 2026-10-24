import { useState } from "react"

function Product(props){

  const [selectedSize,setSelectedSize] = useState('s')
  const [selectedQty,setSelectedQty] = useState(1)

   const HandleAddToCart = ()=>{
    const CartItem ={
      id:props.id,
      name:props.name,
      price:props.price,
      img:props.img,
      size:selectedSize,
      qty:selectedQty
    }

    console.log("Added to cart",CartItem);

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = [...existingCart,CartItem];
    localStorage.setItem('cart',JSON.stringify(updatedCart))

    alert(`${props.name} Added to Cart`)
   }
    return(
        <>
          <div id="Products-show" className="col-6 col-md-4 col-lg-3 mt-4 fadeup-animation" >

            <div  className="card h-100 text-center">

              <div className="img-container">
                <img  className="card-img-top   custom-card-img" src={props.img} alt="" />
              </div>
              

              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h3 className="card-text">{props.name}</h3>
                
                <div className="select-Qty" style={{display:"flex",justifyContent:"space-evenly"}} >
                <select value={selectedSize} onChange={(e)=>setSelectedSize(e.target.value)} style={{width:"30%", border:"1px solid grey", borderRadius:"7px" }}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <input type="Number" min="1" value={selectedQty} onChange={(e)=>setSelectedQty(Number(e.target.value))} placeholder="QTY" style={{width:"30%",height:"100%" ,border:"1px solid grey", borderRadius:"7px"}}></input>
                </div>

                <h4 className="card-text mt-2" >{props.price}</h4>

                <button className="mt-2  btn btn-dark " id="cart-btn" onClick={HandleAddToCart}>Add to Cart</button>

              </div>

            </div>

          </div>

       


        
        </>
    )
}

export default Product