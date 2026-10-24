import About from "./About"

function Contact() {

  const handleMessage=(e)=>{
    e.preventDefault();
    console.log(" Thank You ,  Your Message has Received ")
    alert("Thank You ,  Your Message has  Received")
    e.target.reset()
    
  }

    return (
        <>
            <div id="c-container" className="container-xxl " style={{ display: "flex", flexDirection: "column", border: "2px grey solid" }}>
                <h1 style={{ marginTop: "10px", textAlign: "center", fontWeight: "bold" }}>Send  a Message!!</h1>
                <p className="text-center" id="c-para" >Feel free to Say Everything and Ask Questions </p>
                
                <form onSubmit={handleMessage} className="container-sm " style={{ display: "flex", flexDirection: "column", }} >
                
                    <input className="c-input" type="Text" placeholder="Enter Your Name" required></input>
                
                    <input className="c-input" type="Text" placeholder="Subject" required></input>
                
                    <textarea className="c-input"  placeholder="Message" required></textarea>
                    
                <div style={{display:"flex", justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                <button id="c-btn"  type="submit" className="text-center">Send Message</button>
                </div>
                
                </form>
            </div>

            <About/>

        </>
    )
}

export default Contact