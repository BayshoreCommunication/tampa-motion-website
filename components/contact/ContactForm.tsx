import React from "react";

const ContactForm = ({ className }: { className?: string }) => {
  return (
    <form
      action=""
      className={
        "inline-grid grid-flow-row auto-rows-min grid-cols-1 lg:grid-cols-2 gap-4 2xl:gap-8 2xl:px-10 text-black " +
        className
      }
    >
      <h3 className="font-oxanium text-2xl lg:col-span-2  2xl:text-4xl lg:text-3xl font-bold">
        Get in Touch
      </h3>

      <input
        type="text"
        className="border bg-white  border-black p-2 rounded-lg"
        placeholder="Name"
      />
      <input
        type="eamil"
        className="border bg-white  border-black p-2 rounded-lg"
        placeholder="Email"
      />
      <input
        type="number"
        className="border bg-white  border-black p-2 rounded-lg"
        placeholder="Phone"
      />
      <input
        type="text"
        className="border bg-white  border-black p-2 rounded-lg"
        placeholder="Write your message"
      />
      <textarea
        className="border bg-white border-black p-2 rounded-lg lg:col-span-2"
        placeholder="Subject"
        cols={2}
        rows={5}
      />
      <button className="px-10 py-2 bg-secondary text-white rounded-lg">
        Make An Apponment
      </button>
    </form>
  );
};

export default ContactForm;
