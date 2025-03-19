import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate();
    return(
        <header className="w-full
                            bg-blue-500
                            h-16
                            flex
                            justify-around
                            items-center
                            px-[100px]">
            <div>
                <h6 className="text-white text-lg font-bold ml-4">Nike</h6>
            </div>
            <div className="ml-auto flex space-x-6">
                <Button text="Signup" variant="primary" onClick={() => navigate("/signup")}></Button>
                <Button text="Login" variant="primary" onClick={() => navigate("/login")}></Button>
            </div>
        </header>
    )
}
