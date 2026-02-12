import Button from "../../components/Button";
import Input from "../../components/Input";

export default function ForgetPassword() {
    return (
        <div>
            <h4>Forgot Password</h4>
            <p>Recover your account password</p>
            <Input label="E-mail" id="email" inputType="email" />
            <Button btnText="Next" />
        </div>
    )
}
