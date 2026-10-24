import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


function Register() {

    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setCpassword] = useState()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const User = {
            email,
            password,
            cpassword,

        }

        if (password === cpassword) {
            localStorage.setItem("User", JSON.stringify(User));
            alert("Register Succesfully");
            navigate('/Login')

        } else {
            alert("Password Mismatch")
        }


    }


    return (
        <>
            <div className="container-xxl" id="Reg-cont">

                <div className="container" id="regForm-cont">
                    <h1 className="text-center" style={{ color: "white", marginTop: "25px" }}>Trendy Chaps</h1>
                    <h6 className="text-center " style={{ color: "white", marginTop: "7px" }}>Create your Account</h6>
                    <form  onSubmit={handleRegister} id="Reg-form">

                        <label style={{ color: "white", marginTop: "10px", fontSize: "1.2rem" }}>Name</label>

                        <input type="text" placeholder="Enter  your Name"  required />

                        <label style={{ color: "white", marginTop: "10px", fontSize: "1.2rem" }}>E-mail</label>

                        <input type="email" placeholder="Enter  your E-mail" onChange={(e) => setEmail(e.target.value)}  required />

                        <label style={{ color: "white", marginTop: "10px", fontSize: "1.2rem" }}>password</label>

                        <input type="password" placeholder="Enter  your Password" onChange={(e) => setpassword(e.target.value)} required />
                      
                        <label style={{ color: "white", marginTop: "10px", fontSize: "1.2rem" }}>Confirm Password</label>

                        <input type="password" placeholder="Confirm Your Password" onChange={(e) => setCpassword(e.target.value)} required />

                          
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                            <button id="signin-btn" type="submit"  className="text-center">Sign in</button>
                        </div>

                    </form>

                    <p className="text-center " style={{ color: "white", marginTop: "10px" }}>Already have an Account <Link className="text-decoration-none text-black  align-items-center" style={{ position: "relative", top: "1px", left: "1px" }} to="/Login">Sign in</Link></p>


                </div>

            </div>

        </>
    )
}

export default Register