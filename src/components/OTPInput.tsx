import { useRef, useState } from "react";

const OTP_LENGTH = 4;

export default function OTPInput() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Handle change
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // Clear current
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move back
        inputsRef.current[index - 1]?.focus();

        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .slice(0, OTP_LENGTH)
      .split("");

    if (!pastedData.every((char) => /^\d$/.test(char))) return;

    const newOtp = [...otp];

    pastedData.forEach((char, i) => {
      newOtp[i] = char;
      inputsRef.current[i]?.focus();
    });

    setOtp(newOtp);
  };

  return (
    <div className="flex justify-center gap-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {inputsRef.current[index] = el}}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          autoFocus={index === 0}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className={`
            w-14 h-14 text-center text-xl font-semibold
            rounded-lg border-2 outline-none
            transition-all
            ${
              digit
                ? "border-primary bg-blue-50"
                : "border-gray-300"
            }
            focus:border-primary
          `}
        />
      ))}
    </div>
  );
}
