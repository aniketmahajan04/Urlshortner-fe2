import Button from "../components/Button";
import Input from "../components/Input";


export default function Signup(){
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex justify-center items-center">
          <div className="bg-white p-8 border shadow-lg min-w-80 rounded-2xl flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Create an Account</h2>
            
            <div className="w-full space-y-4">
              <Input type="email" placeholder="Email" full="w-full"/>
              <Input type="text" placeholder="Username" full="w-full"/>
              <Input type="password" placeholder="Password" full="w-full"/>
            </div>
            
            <div className="w-full flex justify-center pt-6">
              <Button text="Signup" variant="primary" />
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Already have an account? <a href="/login" className="text-blue-500 font-medium">Log in</a>
            </p>
          </div>
        </div>
  );
}