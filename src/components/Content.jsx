import { useState, useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import BACKEND_URL from "../config/config";


export default function Content() {
    const generateRef = useRef(); 
    const [links, setLinks] = useState([]);

    async function generate() {
        const longLink = generateRef.current?.value;

        if(!longLink){
            alert("Please enter a URL");
            return;
        }

        try{

            const response = await axios.post(`${BACKEND_URL}/link/generate`, {
                longLink : longLink
            },{
                withCredentials: true
                });
                alert(response.data.msg);
                setLinks([...links, {original: longLink, short: response.data.shortLink}])
        } catch(error){
            alert(error.response?.data?.message || "An error occurred while generating the link.");
            console.log(error);
        }
    }

    return <>
        <div className="
             min-h-[50vh],
             w-full
            flex flex-col
            md:flex-row
            gap-4 py-6
            justify-center
            items-center
            bg-grey-100
        ">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl">
           <Input
                ref={generateRef} 
                placeholder="Enter the URL" 
                type="text" 
                extraclasses="px-8 
                w-full 
                border-blue-500
                h-12
                rounded-lg
                "/>
           <Button variant="outlined" text="generate" 
                    extraclasses="
                        w-40
                        h-12
                        font-bold
                        rounded-lg
                        transition"
                        onClick={generate}/>
              </div>
        </div>
        <div className="
           bg-gray-100
            w-full min-h-[50vh]
            flex justify-center
            items-center
        ">
            <div className="bg-gray-100
                w-full min-h-[50vh]
                flex justify-center items-center p-6">
                <div className="w-full max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Links</h2>
                    {links.length > 0 ? (
                        <table className="w-full border border-blue-500 shadow-md">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border border-blue-500">Original Link</th>
                                    <th className="py-2 px-2 border border-blue-500">Shortened Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {links.map((link, index) => {
                                    <tr key={index} className="text-center border border-blue-500">
                                        <td className="py-2 px-4 border border-blue-500">{link.original}</td>
                                        <td className="py-2 px-4 border">
                                            <a href={link.original} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                                {link.short}
                                            </a>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <p>No links generated yet. Enter a URL to generate one!</p>
                    )}
                </div>
            </div>
        </div>
    </>
}