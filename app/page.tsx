import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-start items-center w-full min-h-screen bg-[#e8f0fd]">
      {/* Left Sidebar */}
      <div className="hidden lg:flex flex-col justify-center items-start w-full lg:w-[24%] pt-[10px] pr-[14px] pb-[10px] pl-[14px] mt-[10px] mb-[10px] ml-[10px]">
        {/* OnlineMed Logo */}
        <h1 className="text-[20px] font-bold leading-[27px] text-left text-[#111827] font-['Satoshi']">
          OnlineMed
        </h1>
        {/* Money Back Guarantee */}
        <div className="flex flex-row justify-start items-center w-full mt-[52px]">
          <Image
            src="/images/img_approved_bold_626800f7_svg.svg"
            alt="Approved"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
          <span className="text-[14px] font-bold leading-[19px] text-left text-[#2563eb] font-['Satoshi'] ml-[24px]">
            Money Back Guarantee
          </span>
        </div>
        {/* Main Heading */}
        <h2 className="text-[32px] font-bold leading-[48px] text-left font-['Satoshi'] mt-[20px]">
          <span className="text-[#111827]">Your </span>
          <span className="text-[#2563eb]">Work Note is Minutes Away</span>
        </h2>
        {/* Description */}
        <p className="text-[16px] font-normal leading-[24px] text-left text-[#111827] font-['Satoshi'] mt-[16px]">
          Note: Due to capacity we are currently only able to provide a limited number of notes per day. To see if you qualify please fill out the following short survey!
        </p>
        {/* Customer Testimonial */}
        <div className="flex flex-col gap-[10px] justify-center items-start w-full mt-[410px] pt-[18px] pr-[14px] pb-[18px] pl-[14px] bg-[#fffefe99] rounded-[12px]">
          {/* Customer Info */}
          <div className="flex flex-row gap-[12px] justify-start items-center w-full">
            <div className="w-[40px] h-[40px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] bg-[#fab02028] rounded-[20px] flex items-center justify-center">
              <span className="text-[16px] font-bold leading-[22px] text-center text-[#fab020] font-['Satoshi']">
                NP
              </span>
            </div>
            <div className="flex flex-col justify-start items-start flex-1">
              <span className="text-[16px] font-bold leading-[22px] text-left text-[#111827] font-['Satoshi']">
                Nick P.
              </span>
              <span className="text-[12px] font-normal leading-[17px] text-left text-[#4b5563] font-['Satoshi']">
                Student • New York
              </span>
            </div>
          </div>
          {/* Rating and Date */}
          <div className="flex flex-row justify-between items-center w-full">
            <Image
              src="/images/img_trustpilot_stars.svg"
              alt="5 star rating"
              width={102}
              height={18}
              className="w-[102px] h-[18px]"
            />
            <span className="text-[12px] font-normal leading-[17px] text-left text-[#4b5563] font-['Satoshi']">
              1 week ago
            </span>
          </div>
          {/* Review Text */}
          <p className="text-[14px] font-normal leading-[20px] text-left text-[#111827] font-['Satoshi']">
            Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.
          </p>
        </div>
        {/* Progress Indicators */}
        <div className="flex flex-row justify-start items-center w-full mt-[24px]">
          <div className="w-[10px] h-[10px] bg-[#2563eb] rounded-[5px]"></div>
          <div className="w-[10px] h-[10px] bg-[#2562ea4c] rounded-[5px] ml-[8px]"></div>
          <div className="w-[10px] h-[10px] bg-[#2562ea4c] rounded-[5px] ml-[8px]"></div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col justify-center items-start w-full lg:w-[76%] pt-[20px] sm:pt-[100px] lg:pt-[250px] pr-[20px] sm:pr-[40px] lg:pr-[56px] pb-[20px] sm:pb-[100px] lg:pb-[250px] pl-[20px] sm:pl-[40px] lg:pl-[200px] mr-0 lg:mr-[10px] bg-[#ffffff] rounded-none lg:rounded-[24px]">
        {/* Step Indicator */}
        <div className="text-[20px] font-bold leading-[27px] text-left font-['Satoshi'] mb-[8px]">
          <span className="text-[#2563eb]">Step 3</span>
          <span className="text-[#4b556399]">/9</span>
        </div>
        {/* Main Question */}
        <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[32px] sm:leading-[38px] lg:leading-[44px] text-center lg:text-left text-[#0d0d12] font-['Satoshi'] mb-[8px]">
          What is your email?
        </h1>
        {/* Subtitle */}
        <p className="text-[16px] font-normal leading-[22px] text-left text-[#353849] font-['Satoshi'] mb-[24px]">
          This is where we send the note
        </p>
        {/* Email Display Section */}
        <div className="flex flex-col gap-[24px] justify-start items-center w-full sm:w-[90%] lg:w-[82%] mb-[24px]">
          {/* Email Display */}
          <div className="flex flex-row justify-center items-center w-full pt-[12px] pr-[12px] pb-[12px] pl-[12px] bg-[#e8f0fd]">
            <div className="flex flex-row justify-start items-center flex-1">
              <span className="text-[16px] font-normal leading-[22px] text-left text-[#2563eb] font-['Satoshi']">
                Email
              </span>
              <span className="text-[16px] font-bold leading-[22px] text-left bg-gradient-to-r from-[#2563eb] via-[#c2d5ff] to-[#143885] bg-clip-text text-transparent font-['Satoshi'] ml-[22px]">
                justin2013@gmail.com
              </span>
            </div>
            <button
              onClick={handleChange}
              className="text-[14px] font-medium leading-[19px] text-center underline text-[#353849] font-['Satoshi'] hover:text-[#2563eb] transition-colors duration-200"
            >
              Change
            </button>
          </div>
          {/* Verification Section */}
          <div className="flex flex-col gap-[24px] justify-start items-center w-full pt-[24px] pr-[24px] pb-[24px] pl-[24px] border border-solid border-[#dfe1e6] rounded-[8px]">
            {/* Verification Instructions */}
            <div className="flex flex-col gap-[4px] justify-start items-start w-full">
              <h3 className="text-[16px] font-bold leading-[22px] text-center text-[#0d0d12] font-['Satoshi']">
                Enter verification code
              </h3>
              <p className="text-[16px] font-normal leading-[22px] text-left font-['Satoshi']">
                <span className="text-[#353849]">Enter the code sent to </span>
                <span className="text-[#353849] font-medium">justin2013@gmail.com to </span>
                <span className="text-[#353849]">use your saved information.</span>
              </p>
            </div>
            {/* Verification Code Input and Resend */}
            <div className="flex flex-col gap-[24px] justify-start items-center w-full">
              {/* Code Input */}
              <VerificationCodeInput
                value={verificationCode}
                onChange={handleCodeChange}
                onComplete={handleCodeComplete}
              />
              {/* Resend Code */}
              <div className="flex flex-row justify-start items-center w-full">
                <span className="text-[14px] font-normal leading-[19px] text-left text-[#4b556399] font-['Satoshi']">
                  Did not receive a code?
                </span>
                <button
                  onClick={handleSendAgain}
                  disabled={isResending}
                  className="text-[14px] font-bold leading-[19px] text-center text-[#3971ed] font-['Satoshi'] ml-[8px] hover:underline transition-all duration-200 disabled:opacity-50"
                >
                  {isResending ? 'Sending...' : 'Send again'}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[90%] lg:w-[82%] gap-[16px] sm:gap-0 mt-[24px] mb-[28px]">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex flex-row justify-start items-center w-full sm:w-auto hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/images/img_arrow_left.svg"
              alt="Back arrow"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
            <span className="text-[16px] font-bold leading-[22px] text-left text-[#2563eb] font-['Satoshi'] ml-[24px]">
              Back
            </span>
          </button>
          {/* Next Button */}
          <Button
            onClick={handleNext}
            disabled={verificationCode.length !== 4}
            className="w-full sm:w-auto text-[18px] font-bold leading-[25px] text-left text-[#ffffff] font-['Satoshi'] pt-[10px] pr-[34px] pb-[10px] pl-[34px] bg-[#4b556399] rounded-[8px] hover:bg-[#4b5563] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
