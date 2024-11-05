"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import { MdArrowOutward } from "react-icons/md";

type EmailFormType = {
  name: string;
  phone: string;
  email: string;
  subject: string;
};
type FormErrorsType = Partial<Record<keyof EmailFormType, string>>;

const BookAnAppointment = () => {
  const [emailForm, setEmailForm] = useState<EmailFormType>({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrorsType>({});

  const validate = (values: EmailFormType): FormErrorsType => {
    const errors: FormErrorsType = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.subject) {
      errors.subject = "Subject is required!";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_8n2c08r",
        "template_l80dw67",
        emailForm,
        "892_ctuJSgLrPDjJ7"
      )
        .then((response) => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              subject: "",
            });
          });
        })
        .catch((err) => {
          console.log("err", err);
          Swal.fire({
            icon: "error",
            text: "Something went wrong!",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              subject: "",
            });
            setLoading(false);
          });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 text-black">
      <h1 className="text-2xl font-bold leading-tight text-center">
        Book an appointment today
      </h1>
      <div className="mt-8">
        <form className="">
          <div className="flex flex-col md:flex-row  justify-between items-center gap-4">
            <div className="w-full">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-ring-primary w-full p-2.5  "
                placeholder="Your Name"
                name="name"
                value={emailForm.name}
                onChange={(e) =>
                  setEmailForm({ ...emailForm, name: e.target.value })
                }
                required
              />
              <span className="text-red-500">{formErrors.name}</span>
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={emailForm.email}
                onChange={(e) =>
                  setEmailForm({ ...emailForm, email: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-ring-primary w-full p-2.5 "
                placeholder="email"
                required
              />
              <span className="text-red-500">{formErrors.email}</span>
            </div>
            <div className="w-full">
              <input
                type="text"
                name="phone"
                value={emailForm.phone}
                onChange={(e) =>
                  setEmailForm({ ...emailForm, phone: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-ring-primary w-full p-2.5 "
                placeholder="Phone Number"
                required
              />
              <span className="text-red-500">{formErrors.phone}</span>
            </div>
            <div className="w-full">
              <input
                type="text"
                name="subject"
                value={emailForm.subject}
                onChange={(e) =>
                  setEmailForm({ ...emailForm, subject: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-ring-primary w-full p-2.5 "
                placeholder="Your Subject"
                required
              />
              <span className="text-red-500">{formErrors.subject}</span>
            </div>
            {loading ? (
              <button
                type="submit"
                className="text-white bg-secondary   font-medium  text-base w-full rounded  cursor-pointer px-5 py-2 xl:py-4 text-center flex items-center justify-center gap-x-2 "
              >
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                Sending...
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => handleSubmit}
                className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-sm text-sm sm:w-auto px-10 py-[12px] text-center min-w-fit"
              >
                Book Now
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAnAppointment;
