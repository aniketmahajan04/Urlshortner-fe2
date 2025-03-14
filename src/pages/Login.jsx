import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";


export default function Login(){

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function login() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  }

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex justify-center items-center">
          <div className="bg-white p-8 border border-gray-200 shadow-xl min-w-80 rounded-2xl flex flex-col items-center w-96">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Login</h2>
            
            <div className="w-full space-y-4">
              <Input ref={emailRef} type="email" placeholder="Email" extraclasses="w-full"/>
              <Input ref={passwordRef} type="password" placeholder="Password" extraclasses="w-full"/>
            </div>
            
            <div className="w-full flex justify-center items-center pt-6">
              <Button text="Login" variant="login" />
            </div>
          </div>
        </div>
  );
}