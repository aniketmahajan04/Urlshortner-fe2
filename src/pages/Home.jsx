import { motion } from "framer-motion";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import Content from "../components/Content";

export default function Home(){
    const nextSectionRef = useRef(null);

    const handleScroll = () => {
        nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return(
        <div className="flex-col justify-center items-center min-h-screen w-full">
            <Navbar />
            <div className="
                        flex flex-col
                        justify-center 
                        items-center 
                        w-full h-[calc(100vh-4rem)]
                        bg-gray-100
                        text-center 
                        px-4">
               
                <motion.h1 
                        initial={{ opacity:0, y:20, scale:0.9 }}
                        animate={{ opacity:1, y:0, scale: 1 }}
                        transition={{ duration:0.8, ease: "easeOut" }}
                        className="text-5xl 
                                font-extrabold 
                                bg-gradient-to-r 
                                from-blue-600 
                                to-purple-600 
                                text-transparent 
                                bg-clip-text
                                drop-shadow-md
                                ">
                                    Shorten Links, Expand Possibilities
                </motion.h1>
                <motion.h2
                        initial={{ opacity:0, y:20, scale:0.9 }}
                        animate={{ opacity:1, y:0, scale:1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                         className="text-2xl 
                               mt-3 mb-3 
                               text-gray-700
                               ">
                                    Nike.url makes sharing effortless & fast.
                </motion.h2>
                
                <motion.div
                    initial={{ opacity:0, y:10 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration:1, delay:0.6 }}
                >
                    <Button 
                        text="Get Started" 
                        variant="outlined" 
                        onClick={handleScroll}
                    />
                </motion.div>
            </div>

            
                <div ref={nextSectionRef}
                    className="w-full min-h-[100vh] bg-gray-100 flex flex-col items-center justify-center p-6"
                >
                    <Content />
                </div>
        </div>
    );
}