import React from "react";

const BookAnAppointment = () => {
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
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-ring-primary w-full p-2.5  "
                placeholder="name"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-ring-primary w-full p-2.5 "
                placeholder="email"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-ring-primary w-full p-2.5 "
                placeholder="phone"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary focus:border-ring-primary w-full p-2.5 "
                placeholder="select"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-sm text-sm sm:w-auto px-10 py-[12px] text-center min-w-fit"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAnAppointment;
