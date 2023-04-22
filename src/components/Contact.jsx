import { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValues.firstName &&
      formValues.lastName &&
      formValues.email &&
      formValues.phone &&
      formValues.message
    ) {
      alert("Thank You! We will contact you as fast as possible!");
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center py-[45px]" id="contact">
      <h2 className="text-grayBlue text-4xl font-bold pb-[45px]">
        Get in Touch
      </h2>
      <p className="max-w-[700px] text-center text-grayBlue-70 sm:text-base text-sm font-medium px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint
        aut, eius tempore dolorem amet quod modi, dicta, temporibus saepe itaque
        labore!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center sm:w-[670px] w-[350px] sm:gap-y-8 gap-4 py-6"
      >
        <div className="flex w-full sm:flex-row flex-col mx-auto items-center justify-evenly">
          <div className="flex flex-col sm:w-1/2 w-[90%] sm:mr-[30px] mb-4">
            {/* <label htmlFor="firstName">First Name</label> */}
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="px-7 py-5 rounded-full outline-none"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col sm:w-1/2 w-[90%]">
            {/* <label htmlFor="lastName">Last Name</label> */}
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="px-7 py-5 rounded-full outline-none"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex w-full sm:flex-row flex-col mx-auto items-center justify-evenly">
          <div className="flex flex-col sm:w-1/2 w-[90%] sm:mr-[30px] mb-4">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="px-7 py-5 rounded-full outline-none"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col sm:w-1/2 w-[90%]">
            {/* <label htmlFor="phone">Phone Number</label> */}
            <input
              type="phone"
              id="phone"
              placeholder="Phone Number"
              className="px-7 py-5 rounded-full outline-none"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="sm:w-full w-[90%]">
          <input
            type="text"
            id="mess"
            placeholder="Your Message"
            className="px-7 py-5 rounded-full outline-none w-full"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
        </div>
        <button className="py-4 px-8 bg-blue-700 rounded-full text-white font-bold">
          Send Request
        </button>
      </form>
    </div>
  );
};

export default Contact;
