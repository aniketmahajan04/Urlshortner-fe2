import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BACKEND_URL from "../config/config";


export default function Signup(){

    const emailRef = useRef();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    async function signup(){
      const email = emailRef.current?.value;
      const username = userNameRef.current?.value;
      const password = passwordRef.current?.value;

      if(!username || !email || !password){
        alert("All fields are required")
        return;
      }

      try{
        const response = await axios.post(`${BACKEND_URL}/user/signup`, {
          name: username,
          email: email,
          password: password
        })

        navigate("/login");

      }catch(error){
        console.error("Signup Error:", error.response?.data || error.message);
        alert(error.response?.data?.message || "An error occurred during signup.");
      }
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex justify-center items-center">
          <div className="bg-white p-8 border shadow-lg min-w-80 rounded-2xl flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create an Account</h2>
            
            <div className="w-full space-y-4">
              <Input ref={emailRef} type="email" placeholder="Email" extraclasses="w-full"/>
              <Input ref={userNameRef} type="text" placeholder="Username" extraclasses="w-full"/>
              <Input ref={passwordRef} type="password" placeholder="Password" extraclasses="w-full"/>
            </div>
            
            <div className="w-full flex justify-center pt-6">
              <Button text="Signup" variant="login" 
              onClick={signup}/>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Already have an account? <a href="/login" className="text-blue-500 font-medium">Log in</a>
            </p>
          </div>
        </div>
  );
}