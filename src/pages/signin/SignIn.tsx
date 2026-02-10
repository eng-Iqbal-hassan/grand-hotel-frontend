import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FaGoogle } from "react-icons/fa6";

export default function SignIn() {
  return (
    <div>
      <h4>Let’s Sign you in</h4>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <Input label="Email Address" id="email-address" inputType="email" />
      <Input label="Password" id="password" inputType="password" />
      <p>Forgot Password</p>
      <Button btnText="Sign In" />
      <p>Don’t have an account? <Link to="/sign-up">Sign Up</Link></p>
      <div>
        <p>Or Sign In with</p>
        <button>Google <FaGoogle /></button>
      </div>
      <p>By signing up you agree to our Terms and Conditions of Use</p>
    </div>
  )
}
