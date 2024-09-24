import React, { useState } from "react";
import lineImg from "./imagesofContac/line-3.svg";
import { code } from "./phoneCode"; // Assuming the dial codes are imported correctly

const ContactForm = () => {
  // State to hold the selected country code
  const [selectedCode, setSelectedCode] = useState("+91"); // Default to +91 (India)
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [verifyTarget, setVerifyTarget] = useState("");

  // Handle the selection of dial code
  const handleCodeChange = (e) => {
    setSelectedCode(e.target.value);
  };

  // Function to open OTP modal
  const openOtpModal = (target) => {
    setVerifyTarget(target);
    setShowOtpModal(true);
  };

  // Function to verify OTP
  const verifyOtp = () => {
    if (verifyTarget === "email") {
      setIsEmailVerified(true);
    } else if (verifyTarget === "phone") {
      setIsPhoneVerified(true);
    }
    setShowOtpModal(false); // Close the modal
  };

  return (
    <div className="flex w-full m-4 p-1">
      <div className="flex flex-col w-full gap-1">
        <div className="flex justify-center">
          <h1 className="text-[#1F2070] text-xl font-extrabold">Contact Us</h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da58bdfab67d41919c53616c45c08aad33ec415dbe3d16ad63adf9e9ddf2546d?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae"
            alt="Contact illustration"
            className="h-[70px]"
          />
          <div className="text-[8px] text-[#186FE6]">
            <p>You can Reach Us anytime</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* Other form fields */}
          <div className="flex gap-2">
            <div className="flex gap-1 rounded-md items-center bg-[#D3E8FD]">
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f5cfc9fbcfab0e840ccb6c0a01cf0cb2a97c1568a2bd4ab55629e6c14822abd?placeholderIfAbsent=true&apiKey=81a235f4136c4623b32cac0bf8e8b9ae"
                  alt="phone icons"
                  className="h-[15px]"
                />
              </div>
              <div>
                <img src={lineImg} />
              </div>
              <div className="relative">
                {/* Dial Code Dropdown */}
                <select
                  value={selectedCode}
                  onChange={handleCodeChange}
                  className="bg-transparent text-sm border-none focus:outline-none"
                >
                  {code.map((item) => (
                    <option key={item.code} value={item.dial_code}>
                      {item.dial_code} {item.flag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="bg-[#D3E8FD] rounded-md pl-1">
              <input
                type="text"
                className="w-full bg-transparent placeholder-[#1F2070] focus:outline-none"
                placeholder="Phone no"
              />
            </div>
          </div>

          {/* Verify phone button */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => openOtpModal("phone")}
              className={`${
                isPhoneVerified
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-blue-500"
              } text-white py-1 px-4 rounded`}
              disabled={isPhoneVerified}
            >
              {isPhoneVerified ? "Verified" : "Verify Phone"}
            </button>
          </div>

          {/* Verify email button */}
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={() => openOtpModal("email")}
              className={`${
                isEmailVerified
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-blue-500"
              } text-white py-1 px-4 rounded`}
              disabled={isEmailVerified}
            >
              {isEmailVerified ? "Verified" : "Verify Email"}
            </button>
          </div>
        </div>

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full mb-4 focus:outline-none"
                placeholder="Enter OTP"
              />
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white py-1 px-4 rounded mr-2"
                  onClick={verifyOtp}
                >
                  Submit
                </button>
                <button
                  className="bg-gray-500 text-white py-1 px-4 rounded"
                  onClick={() => setShowOtpModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
