import Button from "../components/Button";
import Input from "../components/Input";


export default function Signup(){
    return <div>
                <div>
                    <h5>Sign-up</h5>
                    <Input type="text" placeholder="Email" />
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password"/>
                    <div>
                        <Button text="Singup" variant="primary"/>
                    </div>
                </div>
            </div>
}