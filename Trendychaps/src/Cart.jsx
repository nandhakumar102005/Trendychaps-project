import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showpopup,setShowpopup] = useState(false);

  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(Items);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const numericPrice = Number(item.price.replace("₹", ""));
      return total + numericPrice * item.qty;
    }, 0);
  };


  const handleDelivery =(e)=>{
    e.preventDefault()
    alert("Order Placed Successfully")
    setCartItems([]);
    localStorage.removeItem('cart')
    e.target.reset()


  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Shopping Cart</h2>

      <div className="row g-4">
        {/* Left Side: Constant Cart Box */}
        <div className="col-lg-8">
          <div className="card shadow-lg p-4 border-0 rounded-4" style={{ minHeight: "400px" }}>
            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <h5 className="text-muted">Your cart is empty. <Link to="/app" className="text-decoration-none">Start shopping!</Link></h5>
              </div>
            ) : (
              <div>
                {cartItems.map((item, index) => {
                  const numericPrice = Number(item.price.replace("₹", ""));
                  const itemTotal = numericPrice * item.qty;

                  return (
                    <div key={index} className="d-flex align-items-center justify-content-between border-bottom  py-3">
                      <div className="d-flex align-items-center gap-3 ">
                       
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="rounded shadow-sm" 
                          style={{ width: "85px", height: "85px", objectFit: "cover" }} 
                        />
                        <div>
                          <h6 className="mb-1 fw-bold">{item.name}</h6>
                          <p className="mb-1 text-muted small">Size: <strong>{item.size}</strong> | Qty: <strong>{item.qty}</strong></p>
                          <p className="mb-0 text-muted small">Price: {item.price} each</p>
                        </div>
                      </div>
                      
                      <div className="text-end ">
                        <h6 className="text-success fw-bold mb-2">₹{itemTotal}</h6>
                        <button 
                          className="btn btn-danger btn-sm px-2 py-1"
                          style={{ fontSize: "12px" }}
                          onClick={() => handleRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Order Summary Box */}
        <div className="col-lg-4">
          <div className="card shadow-lg p-4 border-0 rounded-4">
            <h4 className="mb-3 fw-bold">Order Summary</h4>
            <hr />
            <div className="d-flex justify-content-between mb-2 text-muted">
              <span>Subtotal:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Tax (5%):</span>
              <span>₹0.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4">
              <strong className="fs-5">Total:</strong>
              <strong className="text-primary fs-5">₹{calculateTotal()}</strong>
            </div>
            <button 
              className="btn btn-dark w-100 rounded-pill py-2"
              onClick={() => alert("Enter Your Delivery details to Confirm Order")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>




            <div className="container deli-det mt-5 fw-bold shadow-lg " id="d-container">
              <h3 className="fw-bold">Delivery Details</h3>
              <form onSubmit={handleDelivery} className="d-flex flex-column justify-content-center">
                <label style={{marginLeft:"10px",marginTop:"10px"}}  >Name</label>
                <input type="text" placeholder="Enter your Name " className="d-input" required></input>

                 <label style={{marginLeft:"10px",marginTop:"10px"}} >Mobile Number</label>
                <input type="number" placeholder="Enter your Mobile Number " className="d-input" required></input>

                 <label style={{marginLeft:"10px",marginTop:"10px"}} >Address</label>
                <textarea name="" id="" className="d-input" placeholder="Enter Your Address" required></textarea>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                            <button id="deli-btn" type="submit" className="text-center bg-black text-white">Place Order</button>
                        </div>
              </form>

              </div>



             
           




      </div>
    </div>
  );
}

export default Cart;




















