import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FaEyeSlash, FaGoogle } from "react-icons/fa6";

export default function SignUp() {
  return (
    <div>
      <h4>Create Account</h4>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <Input label="Full Name" id="name" inputType="text" />
      <Input label="Email" id="email" inputType="email" />
      <Input label="Password" id="password" inputType="password" />
      <FaEyeSlash />
      <Button btnText="Create An Account" />
      <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
      <div>
        <p>Or Sign In with</p>
        <button>Google <FaGoogle /></button>
      </div>
      <p>By signing up you agree to our Terms and Conditions of Use</p>
    </div>
  )
}
