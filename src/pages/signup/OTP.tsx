import Button from "../../components/Button";
import OTPInput from "../../components/OTPInput";

export default function OTP() {
  return (
    <div>
      <h4>Enter OTP</h4>
      <p>We have just sent you 4 digit code via your email example@gmail.com</p>
      <OTPInput />
      <Button btnText="Create An Account" />
      <p>Didn’t receive code? <span>Resend Code</span></p>
    </div>
  )
}
