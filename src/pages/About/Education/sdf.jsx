import React from "react";

const Education = () => {
  return (
    <section className=" container mx-auto my-10 ">
      <span className=" card-bg px-6 py-1 rounded-2xl font-bold gradient-text">
        Education
      </span>
      <h2 className=" text-4xl font-bold  mb-10 mt-5">
        Education & <span className=" text-primary">Experience</span>
      </h2>

      <div
        className=" text-left space-y-5 edu relative pl-5 pb-14 group "
        data-aos="fade-up"
      >
        <span className=" group-hover:text-primary duration-300 font-medium">
          2022 - 2023
        </span>
        <h2 className=" text-2xl font-semibold">
          <span className=" text-primary">MERN</span> Stack Development
        </h2>
        <p>Programming Hero</p>
      </div>
      <div
        className=" text-left space-y-5 edu relative pl-5 pb-14 group "
        data-aos="fade-up"
      >
        <span className=" group-hover:text-primary duration-300 font-medium">
          2021 - 2022
        </span>
        <h2 className=" text-2xl font-semibold">
          Front end <span className=" text-primary">Wordpress</span> Development
        </h2>
        <p>Coders Foundation</p>
      </div>
      <div
        className=" text-left space-y-5 edu relative pl-5 pb-14 group "
        data-aos="fade-up"
      >
        <span className=" group-hover:text-primary duration-300 font-medium">
          2020 - 2021
        </span>
        <h2 className=" text-2xl font-semibold">
          Graphics design & <span className=" text-primary">Animation</span>
        </h2>
        <p>IDB BISEW</p>
      </div>
      <div
        className=" text-left space-y-5 edu relative pl-5 pb-5 group"
        data-aos="fade-up"
      >
        <span className=" group-hover:text-primary duration-300 font-medium">
          2014 - 2019
        </span>
        <h2 className=" text-2xl font-semibold">Economics</h2>
        <p>National University</p>
      </div>
    </section>
  );
};

export default Education;
