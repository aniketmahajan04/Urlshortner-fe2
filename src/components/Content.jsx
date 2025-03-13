import Button from "./Button";
import Input from "./Input";


export default function Content() {
    return <div>
        <div>
           <Input placeholder="Enter the URL" type="text" />
           <Button variant="outlined" text="generate"  onClick={() => alert("clicked")}/>
        </div>
        {/* <div>
            //Table to see Links
        </div> */}
    </div>
}