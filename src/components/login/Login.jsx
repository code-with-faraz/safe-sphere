import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    function login(){
        fetch("http://localhost:5050/auth/login",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
            })
            
            .then(response => response.json())
            .then(data => {
              if(data.token)
              {
                localStorage.setItem("token",data.token);
                localStorage.setItem("id",data.uid)
                navigate("/");
                toast.success('Logged in')
              }
              else{
                toast.error('Invalid Credentials')
              }
            })
            .catch(error => console.error(error))
        }
      

    const[avatar, setAvatar] = useState({
        file:null,
        url:""
    });

const handleAvatar = e => {
    if(e.target.files[0]){
    setAvatar({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
    })
  }
}

const handleLogin = e => {
    e.preventDefault()
}

  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password" name="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} />
                <button  onClick={()=>login()} >Sign in</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an account</h2>
            <form>
                <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="Username" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login