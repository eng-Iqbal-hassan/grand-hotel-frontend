import Button from "../../components/Button";
import Input from "../../components/Input";

export default function NewPassword() {
    return (
        <div>
            <h4>Create a <br/>New Password</h4>
            <p>Enter your new password</p>
            <Input label="New Password" id="new-password" inputType="password" />
            <Input label="Confirm Password" id="confirm-password" inputType="password" />
            <Button btnText="Next" />
        </div>
    )
}
