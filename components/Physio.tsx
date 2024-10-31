import Image from "next/image";
import React from "react";

const Physio = () => {
  return (
    <section className="h-fit bg-background2 inline-grid grid-flow-row grid-cols-4 auto-rows-min px-10 w-full md:px-20 2xl:px-52 xl:place-content-start">
      <h1 className="col-span-4 w-1/2 bg-background2 pt-5 text-3xl  font-baskerville font-thin text-textSecondary m-auto md:text-5xl xl:text-7xl xl:col-span-2 justify-self-start md:w-full md:text-center xl:w-full xl:pr-52 xl:text-left ">
        Physio At Your Service
      </h1>
      <div className=" col-span-4 xl:col-span-2 xl:col-start-1 xl:pr-64 xl:text-left  bg-background2 text-center  py-2 text-textSecondary  font-sans">
        We empower you to move freely and live fully. Our expert
        physiotherapists use personalized treatment plans to help you recover
        from injury, manage pain, and enhance mobility. Whether you're healing
        from surgery or looking to prevent future issues, we&apos;re here to
        support every step of your journey to better health.
        <br />
        <div className="  bg-background2 text-center font-semibold text-black xl:pt-3 font-sans xl:text-left md:py-4">
          Move better. Feel better. Live better.
        </div>
      </div>

      <div className="col-span-2 relative xl:col-span-1 xl:row-start-1 xl:col-start-3  xl:row-span-4">
        {/* <Image
          src={"/bone.png"}
          alt="logo"
          width={270}
          height={604}
          className="col-span-2 h-[276px] max-w-[270px]  max-h-[694px] w-full  m-auto "
        /> */}

        <Image
          src={"/bone.png"}
          alt="logo"
          width={270}
          height={604}
          className="col-span-2 h-[276px] w-[147px]  max-h-[694px] max-w-[416px] object-scale-down m-auto "
        />
        <div className="flex flex-row justify-center items-center text-primary absolute -top-5 -right-14 translate-y-20 ">
          <span className="w-5 h-5 rounded-full border-4 border-white bg-primary"></span>
          <span className="w-10 h-[1px] bg-primary"></span>
          <span className="font-bold">&nbsp;Back Pain</span>
        </div>
        <div className="flex flex-row justify-center items-center text-primary absolute bottom-32 -left-12 translate-y-20 ">
          <span className="font-bold w-2/6">Lower Back Pain</span>
          <span className="w-4 h-[1px] bg-primary"></span>
          <span className="w-5 h-5 rounded-full border-4 border-white bg-primary"></span>
        </div>
      </div>
      <Image
        src={"/doctor.png"}
        alt="logo"
        width={416}
        height={694}
        className="col-span-2 h-[276px] w-[147px]  max-h-[594px] max-w-[316px] object-cover m-auto xl:col-span-1 xl:row-start-1 xl:col-start-4 xl:row-span-4"
      />

      <div className="col-span-4 h-36 w-fit bg-[#ceecfb] rounded-t-3xl grid grid-cols-2 px-1 mt-8 mr-5">
        <Image
          src="/satisfiedCustomer.png"
          alt="logo"
          width={164}
          height={178}
          className="-translate-y-8 "
        />
        <div className="place-self-center ">
          <div className="flex -space-x-4 rtl:space-x-reverse ">
            {[1, 2, 3, 4].map((item) => (
              <Image
                className="w-10 h-10 border-2 border-white rounded-full "
                src="/avatar.avif"
                alt=""
                width={50}
                height={50}
                key={item}
              />
            ))}
            <div className="text-4xl font-bold text-textSecondary translate-x-6 font-baskerville">
              18k
            </div>
          </div>
          <div className="text-xl font-thin text-textSecondary font-baskerville pt-2">
            Saisfied Customers
          </div>
        </div>
      </div>
      <article className="col-span-4 w-full bg-white rounded-r-3xl rounded-b-3xl grid grid-flow-row grid-cols-1 p-5 h-fit z-10">
        <div className="w-full h-fit text-xl text-textSecondary text-center font-baskerville pb-4 xl:text-3xl">
          Book an appointment today
        </div>
        <form
          action=""
          method="post"
          className="w-full px-2 pt-2 flex flex-col items-stretch  text-black gap-4 xl:flex-row justify-center "
        >
          <input
            type="text"
            className="border border-black p-2 "
            placeholder="Name"
          />
          <input
            type="eamil"
            className="border border-black p-2 "
            placeholder="Email"
          />
          <input
            type="number"
            className="border border-black p-2"
            placeholder="Phone"
          />
          <input
            type="text"
            className="border border-black p-2 "
            placeholder="Select"
          />
          <button className="px-10 py-2 bg-primary text-white font-sans">
            Book Now
          </button>
        </form>
      </article>
      <section className="col-span-4 flex h-fit flex-col gap-4 justify-between items-center translate-y-12 -mt-8 xl:flex-row xl:justify-around xl:pt-8">
        <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-xl h-full p-[1px]">
          <div className="w-80 p-1 h-full rounded-xl bg-white flex flex-col justify-center items-center border-transparent border  py-4">
            <Image
              src="/healthCare.png"
              alt="healthCare"
              width={40}
              height={40}
              className="pb-3"
            />

            <div className="text-xl font-bold text-textSecondary font-baskerville">
              Health Guarantee
            </div>
            <div className="font-sans text-textSecondary text-center pt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-xl h-full p-[1px]">
          <div className="w-80 h-full rounded-xl bg-gradient-to-b from-[#0aa3e8] to-[#34e1d8] flex flex-col justify-center items-center  py-4">
            <Image
              src="/trustedClinic.png"
              alt="healthCare"
              width={40}
              height={40}
              className="pb-3"
            />

            <div className="text-xl font-bold text-textSecondary font-baskerville">
              Trusted Clinic
            </div>
            <div className="font-sans text-textSecondary text-center pt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#0aa3e8] to-[#34e1d8] rounded-xl h-full p-[1px]">
          <div className="w-80 h-full rounded-xl bg-white flex flex-col justify-center items-center py-4">
            <Image
              src="/expertTherapist.png"
              alt="healthCare"
              width={40}
              height={40}
              className="pb-3"
            />

            <div className="text-xl font-bold text-textSecondary font-baskerville">
              Expert Therapist
            </div>
            <div className="font-sans text-textSecondary text-center pt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Physio;
