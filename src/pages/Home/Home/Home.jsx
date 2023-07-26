import React from "react";
import Banner from "../Banner/Banner";
import WhatIDo from "../WhatIDo/WhatIDo";
import MySkills from "../MySkills/MySkills";
import Testimonial from "../Testimonial/Testimonial";
import GetInTouch from "../GetInTouch/GetInTouch";
import About2 from "../About/About2";

const Home = () => {
  return (
    <>
      <div className="ami relative tumi">
        <Banner></Banner>
      </div>
      <div className="">
        <WhatIDo></WhatIDo>
      </div>
      <div className="">
        <MySkills></MySkills>
      </div>
      <div className="">
        <Testimonial></Testimonial>
      </div>
      <div className=" ami relative">
        <GetInTouch></GetInTouch>
      </div>
    </>
  );
};

export default Home;
