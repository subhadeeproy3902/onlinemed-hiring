import { ChevronLeft, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function EmailStep() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0); // 0: initial, 1: slide up, 2: input transform, 3: expand down, 4: show verification
  const [otp, setOtp] = useState(["", "", "", ""]);
  const containerRef = useRef<HTMLDivElement>(null);
  const verificationRef = useRef<HTMLDivElement>(null);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSubmit = () => {
    if (!email || isLoading) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAnimationPhase(1); // Start first animation (slide up)
    }, 2000);
  };

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if a digit was entered
    if (value && index < 3) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleReset = () => {
    setAnimationPhase(0);
    setOtp(["", "", "", ""]);
  };

  useEffect(() => {
    if (animationPhase === 1) {
      const timer = setTimeout(() => setAnimationPhase(2), 500);
      return () => clearTimeout(timer);
    }
    if (animationPhase === 2) {
      const timer = setTimeout(() => setAnimationPhase(3), 500);
      return () => clearTimeout(timer);
    }
    if (animationPhase === 3) {
      // After container expands, show verification
      const timer = setTimeout(() => setAnimationPhase(4), 300);
      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  return (
    <div className="w-full max-w-xl mx-auto py-10 relative">
      <div
        ref={containerRef}
        className={`transition-all duration-500 ease-in-out ${
          animationPhase >= 1 ? "-translate-y-10" : ""
        }`}
      >
        <div className="mb-6">
          <p className="text-xl font-bold text-primary">
            Step 3<span className="text-gray-400">/9</span>
          </p>
          <h1 className="text-3xl font-bold text-foreground mt-2">
            What is your email?
          </h1>
          <p className="text-gray-500 mt-4">This is where we send the note</p>
        </div>

        <div
          className={`relative ${
            animationPhase >= 2 &&
            "border px-4 border-b-0 rounded-t-md bg-blue-100/60"
          }`}
        >
          <span
            className={`absolute left-3 top-1/2 z-10 -translate-y-1/2 text-primary transition-all duration-300 ${
              animationPhase >= 2
                ? "opacity-100 translate-x-2"
                : "opacity-0 -translate-x-4"
            }`}
          >
            Email
          </span>

          <div
            className={`relative transition-all duration-300 ${
              animationPhase >= 2 ? "pl-16 border-0" : "bg-white"
            } border rounded-md ${
              animationPhase >= 2 ? "border-gray-200" : "border-blue-300"
            } ${
              animationPhase >= 3 && animationPhase < 4 ? "rounded-b-none" : ""
            }`}
          >
            {animationPhase >= 2 ? (
              <div className="w-full py-2 px-4">
                <span className="bg-linear-to-r bg-[length:200%_200%] animate-bg-pan font-bold from-primary to-blue-800 via-secondary bg-clip-text text-transparent">
                  {email}
                </span>
              </div>
            ) : (
              <input
                type="email"
                autoFocus={animationPhase < 3}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                disabled={isLoading || animationPhase > 0}
                className={`w-full py-2 rounded-md px-4 border-0 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-primary bg-transparent transition-all duration-300 ${
                  animationPhase >= 0
                    ? "font-medium text-gray-800 border-0"
                    : ""
                }`}
                placeholder={animationPhase >= 2 ? "" : "Enter your email"}
              />
            )}

            {animationPhase >= 2 && (
              <button
                className={`absolute right-3 underline decoration-dotted top-1/2 -translate-y-1/2 text-foreground leading-20 transition-opacity duration-300 text-sm ${
                  animationPhase >= 2 ? "opacity-100" : "opacity-0"
                } cursor-pointer hover:text-gray-600`}
                onClick={handleReset}
              >
                Change
              </button>
            )}

            {isLoading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="loader animate-spin" />
              </div>
            )}
          </div>
        </div>

        <div
          ref={verificationRef}
          className={`overflow-hidden transition-all duration-500 ${
            animationPhase >= 3
              ? "max-h-[500px] border border-t-0 border-gray-200 rounded-b-md"
              : "max-h-0 border-transparent"
          }`}
        >
          <div
            className={`p-6 space-y-4 transition-all duration-300 ${
              animationPhase >= 4
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-foreground text-md font-bold">Enter verification code</p>
            <p className="text-sm font-light">
              Enter the code sent to {" "}<span className="font-normal">{email}</span>{" "} to use your saved information.
            </p>
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  ref={(el) => { otpInputRefs.current[index] = el; }}
                  type="text"
                  maxLength={1}
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => {
                    // Handle backspace to move to previous input
                    if (e.key === "Backspace" && !otp[index] && index > 0) {
                      otpInputRefs.current[index - 1]?.focus();
                    }
                  }}
                  className="w-12 h-12 rounded-lg text-center text-xl border focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-primary"
                />
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Didn&apos;t receive a code?{" "}
              <span className="cursor-pointer text-primary font-bold">Send again</span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex justify-between items-center mt-6 transition-all duration-500"
      >
        <button
          className="flex items-center text-primary text-sm font-bold hover:underline"
          disabled={isLoading}
          onClick={handleReset}
        >
          <ChevronLeft className="mr-1" size={18} />
          Back
        </button>
        <button
          className={`px-6 py-2 rounded-md font-medium text-white ${
            email && !isLoading && animationPhase < 1
              ? "bg-primary hover:bg-primary/90"
              : "bg-gray-400 cursor-not-allowed"
          } transition-colors`}
          onClick={handleSubmit}
          disabled={!email || isLoading || animationPhase > 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}