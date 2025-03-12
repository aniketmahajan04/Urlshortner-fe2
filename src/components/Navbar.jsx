import Button from "./Button";


export default function Navbar(){
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
                <Button text="Sign-up" variant="primary"></Button>
                <Button text="Login" variant="primary"></Button>
            </div>
        </header>
    )
}