import React, { useState } from "react";

const ContactForm = () => {
  const modules = ["CRM", "ECOM", "PAYROLL", "ACCOUNT"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedModule: "ACCOUNT", // Default to 'ACCOUNT'
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle radio button change
  const handleModuleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedModule: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to API
    console.log("Form submitted:", formData);

    fetch('/Os/api/contact/sendContact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => console.log("Response DATA",data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-[500px] py-2 bg-white md:rounded-lg mx-10 px-2 lg:pl-20 h-[460px] max-lg:h-[80vh] lg:mr-0 max-lg:w-[750px] max-md:px-5 max-sm:px-0 max-md:gap-4 rounded-2xl lg:rounded-[100px_0px_0px_100px] max-sm:py-0"
    >
      <div className="flex flex-col flex-1 w-full gap-2 mt-3 max-lg:gap-4 max-sm:mt-0 max-sm:gap-1">
        <div>
          <p className="font-bold text-4xl text-center tracking-normal text-violet-950 w-full md:text-4xl">
            Contact Us
          </p>
          <p className="text-sm text-center tracking-normal text-blue-600 w-full">
            You can Reach Us anytime
          </p>
        </div>

        {/* Name Input */}
        <div className="flex flex-col gap-1 justify-between w-full max-lg:gap-4">
          <div className="flex gap-2 px-3.5 py-1 w-full text-lg font-sm tracking-tight whitespace-normal bg-blue-100 rounded-xl text-violet-950 max-md:max-w-full">
            <input
              className="w-full rounded-xl bg-transparent"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div className="flex gap-2 px-3.5 py-1 w-full text-lg font-sm tracking-tight whitespace-nowrap bg-blue-100 rounded-xl text-violet-950 max-md:max-w-full">
            <input
              className="w-full rounded-xl bg-transparent"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Input */}
          <div className="flex gap-4 mt-1 w-full font-medium tracking-tight rounded-none text-violet-950">
            <div className="grow p-1 bg-blue-100 rounded-xl w-fit md:pr-5">
              <input
                type="text"
                className="w-full bg-transparent"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="p-2">
            <input
              placeholder="How can we help?"
              className="px-3.5 w-full h-full text-xl font-medium tracking-tight bg-blue-100 rounded-xl text-violet-950"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {/* Radio Buttons for Modules */}
          <div className="flex flex-col gap-2">
            <p className="font-medium text-violet-950">Select a Module:</p>
            {modules.map((module) => (
              <label key={module} className="flex items-center gap-2">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-violet-950" // Tailwind styling for visibility
                  value={module}
                  checked={formData.selectedModule === module}
                  onChange={handleModuleChange}
                />
                <span className="text-violet-950">{module}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center self-center w-full">
          <button
            type="submit"
            className="mx-auto self-stretch p-2 w-1/2 text-sm tracking-tighter leading-none text-center text-white whitespace-nowrap rounded-xl shadow-xl bg-violet-950 max-lg:text-lg"
          >
            Contact
          </button>
        </div>

        <div className="flex flex-col px-0.5 w-full text-base rounded-none mb-2 max-lg:gap-4 max-lg:mt-5">
          <p className="flex-auto text-center text-red-400">
            By contacting us, you agree to our Terms of Services and Privacy
            Policy.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className=" text-violet-800">
              Terms of Services
            </a>
            <a href="#" className=" text-violet-800">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
