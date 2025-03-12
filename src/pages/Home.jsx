import Button from "../components/Button";
import Navbar from "../components/Navbar"

export default function Home(){
    return(
        <div className="flex-col justify-center items-center min-h-screen w-full">
            <Navbar />
            <div className="
                        flex flex-col
                        justify-center 
                        items-center 
                        w-full h-[calc(100vh-4rem)]
                        bg-white
                        text-white 
                        text-center 
                        px-4">
               
                <h1 className="text-5xl 
                                font-extrabold 
                                bg-gradient-to-r 
                                from-blue-600 
                                to-purple-600 
                                text-transparent 
                                bg-clip-text
                                ">
                                    Shorten Links, Expand Possibilities
                </h1>
                <h2 className="text-2xl 
                               mt-3 mb-3 
                               text-gray-700
                               ">
                                    Nike.url makes sharing effortless & fast.
                </h2>
                
                <Button 
                    text="Get Started" 
                    variant="outlined" 
                   />
            </div>
        </div>
    );
}