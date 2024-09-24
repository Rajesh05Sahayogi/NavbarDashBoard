import React, { useState } from "react";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { BiSolidBusiness } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    userSize: "",
    email: "",
    phoneNo: "",
    description: "",
    ecom: false, // Individual properties for each module
    payroll: false,
    crm: false,
    account: true, // ACCOUNT is always selected by default
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle checkbox change for modules
  const handleModuleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked, // Update the specific module's state
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to API
    console.log("Form submitted:", formData);

    fetch("/Os/api/contact/sendContact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // Send the form data including individual module properties
    })
      .then((response) => response.json())
      .then((data) => console.log("Response DATA", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex mt-10 sm:mt-1 flex-col items-center justify-center w-full lg:w-[500px] p-3 lg:p-20 bg-transparent lg:bg-white h-[460px] rounded-4xl lg:rounded-[100px_0px_0px_100px]">
      <form
        onSubmit={handleSubmit}
        className="h-full flex items-center justify-center w-full"
      >
        <div className="w-full bg-white p-1 rounded-lg md:p-2 md:mt-14 lg:mt-1">
          <div className="mb-1 text-center">
            <h1 className="text-xl sm:text-5xl lg:text-xl font-bold text-gray-800">
              Contact Us
            </h1>
            <p className="text-xs sm:text-2xl lg:text-xs text-gray-600">
              You can reach us any time
            </p>
          </div>

          <div className="space-y-4 lg:space-y-1">
            {/* Name Input */}
            <div className="flex items-center gap-2 border px-2 rounded-lg bg-[#cce9fd]">
              <div className="text-[#252b77]">
                <RiContactsFill className="text-sm sm:text-5xl lg:text-xl" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-1 lg:h-3 h-full sm:h-16 text-sm sm:text-4xl lg:text-sm border-gray-300 bg-transparent text-black focus:outline-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Business Name Input */}
            <div className="flex items-center gap-2 border px-2  rounded-lg bg-[#cce9fd]">
              <div className="text-[#252b77]">
                <BiSolidBusiness className="text-sm sm:text-5xl lg:text-xl" />
              </div>
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                className="w-full px-1 lg:h-3 h-full sm:h-16 text-sm sm:text-4xl lg:text-sm border-gray-300 bg-transparent text-black focus:outline-none"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>

            {/* User Size Input */}
            <div className="flex items-center gap-2 border px-2 rounded-lg bg-[#cce9fd]">
              <div className="text-[#252b77]">
                <FaUsers className="text-sm sm:text-5xl lg:text-xl" />
              </div>
              <input
                type="text"
                name="userSize"
                placeholder="User Size"
                className="w-full px-1 lg:h-3 h-full sm:h-16 text-sm sm:text-4xl lg:text-sm border-gray-300 bg-transparent text-black focus:outline-none"
                value={formData.userSize}
                onChange={handleChange}
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center gap-2 border px-2  rounded-lg bg-[#cce9fd]">
              <div className="text-[#252b77]">
                <MdEmail className="text-sm sm:text-5xl lg:text-xl" />
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full px-1 lg:h-3 h-full sm:h-16 text-sm sm:text-4xl lg:text-sm border-gray-300 bg-transparent text-black focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone Number Input */}
            <div className="flex items-center gap-2 border px-2 py-2 rounded-lg bg-[#cce9fd]">
              <div className="text-[#252b77]">
                <FaPhone className="text-sm sm:text-5xl lg:text-xl" />
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row w-full">
                <div className="w-16 rounded px-2">
                  <input
                    type="text"
                    name="phoneNo"
                    placeholder="+91"
                    readOnly
                    className="w-full px-1 lg:h-5 h-full sm:h-16 text-sm sm:text-4xl lg:text-sm text-black border-gray-300 bg-transparent focus:outline-none"
                  />
                </div>
                <div className="w-full rounded px-4">
                  <input
                    type="text"
                    name="phoneNo"
                    placeholder="Phone no"
                    className="w-full lg:h-5 h-full sm:h-16 text-sm sm:text-4xl lg:text-sm border-gray-300 bg-transparent text-black focus:outline-none"
                    value={formData.phoneNo}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <textarea
              name="description"
              placeholder="How can we help?"
              className="overflow-y-auto w-full px-1 text-black text-sm lg:h-16 sm:h-36 sm:text-3xl lg:text-lg border border-gray-300 rounded-md focus:outline-none flex-grow-0 flex-shrink-0 min-h-[64px] resize-none"
              value={formData.description}
              onChange={handleChange}
            />

            {/* Checkbox Buttons for Modules */}
            <div className="flex flex-col gap-1 mt-1 text-[10px]">
              <p className="font-xs text-gray-800">Select Module(s):</p>
              <div className="flex gap-2">
                <label className="flex flex-wrap gap-1">
                  <input
                    type="checkbox"
                    name="ecom"
                    checked={formData.ecom}
                    onChange={handleModuleChange}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="text-gray-800">ECOM</span>
                </label>
                <label className="flex flex-wrap gap-1">
                  <input
                    type="checkbox"
                    name="payroll"
                    checked={formData.payroll}
                    onChange={handleModuleChange}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="text-gray-800">PAYROLL</span>
                </label>
                <label className="flex flex-wrap gap-1">
                  <input
                    type="checkbox"
                    name="crm"
                    checked={formData.crm}
                    onChange={handleModuleChange}
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="text-gray-800">CRM</span>
                </label>
                <label className="flex flex-wrap gap-1">
                  <input
                    type="checkbox"
                    name="account"
                    checked={formData.account}
                    disabled
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="text-gray-800">ACCOUNT</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 lg:mt-0 w-full py-2 px-4 text-sm lg:h-8 sm:h-16 sm:text-3xl lg:text-lg font-semibold text-white bg-[#172554] rounded-md hover:bg-[#0d164e] focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
