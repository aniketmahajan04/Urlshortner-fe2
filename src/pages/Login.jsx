import Button from "../components/Button";
import Input from "../components/Input";


export default function Login(){
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex justify-center items-center">
          <div className="bg-white p-8 border shadow-lg min-w-80 rounded-2xl flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Login</h2>
            
            <div className="w-full space-y-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </div>
            
            <div className="w-full flex justify-center pt-6">
              <Button text="Login" variant="primary" className="w-full" />
            </div>
          </div>
        </div>
  );
}