import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const User = JSON.parse(localStorage.getItem("User"));

        if (User && email === User.email && password === User.password) {
            alert("Login Succesfully");
            navigate('/app')
        }
        else {
            alert("Invalid Username Or password")
        }
    }

    return (
        <>
            <div className="container-xxl" id="log-cont">

                <div className="container" id="logForm-cont">
                    <h1 className="text-center" style={{ color: "white", marginTop: "25px" }}>Trendy Chaps</h1>
                    <h6 className="text-center " style={{ color: "white", marginTop: "7px" }}>Login your Account</h6>
                    <form  onSubmit={handleLogin} id="log-form">

                        <label style={{ color: "white", marginTop: "10px", fontSize: "1.2rem" }}>E-mail</label>

                        <input type="email" placeholder="Enter  your E-mail" onChange={(e) => setEmail(e.target.value)} required />

                        <label style={{ color: "white", marginTop: "10px", fontSize: "1.2rem" }}>password</label>

                        <input type="password" placeholder="Enter  your Password" onChange={(e) => setPassword(e.target.value)} required />


                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                            <button id="login-btn" type="submit" className="text-center"  >Login in</button>
                        </div>

                    </form>

                    <p className="text-center " style={{ color: "white", marginTop: "10px" }}>Don't have an Account  <Link className="text-decoration-none text-black" style={{ position: "relative", top: "1px", left: "1px" }} to="/Register">Sign Up</Link></p>


                </div>

            </div>

        </>
    )
}

export default Login
