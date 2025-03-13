import Button from "./Button";
import Input from "./Input";


export default function Content() {
    return <>
        <div className="
            w-full min-h-[50vh]
            flex
            justify-center
            items-center
        ">
           <Input placeholder="Enter the URL" type="text" outlined="border-blue-500"/>
           <Button variant="outlined" text="generate"  onClick={() => alert("clicked")}/>
        </div>
        <div className="
            bg-amber-700
            w-full min-h-[50vh]
        ">
            //Table to see Links
        </div>
    </>
}