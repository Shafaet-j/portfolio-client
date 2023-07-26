import { Swiper, SwiperSlide } from "swiper/react";
import Fade from 'react-reveal/Fade';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

// import "./styles.css";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandTailwind,
  TbBrandBootstrap,
} from "react-icons/tb";

const MySkills = () => {
  return (
    <section className="py-20 tumi relative">
      <span className=" card-bg px-6 py-1 rounded-2xl font-bold gradient-text">
        Technology
      </span>
      <h1 className="text-2xl lg:text-5xl font-bold mb-10 mt-5">
        Technology <br /> I Know
      </h1>

      <div className=" container mx-auto px-4">
        <Swiper
          slidesPerView={1}
          freeMode={true}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <Fade left>
          <SwiperSlide>
            <div className=" skill-bg px-8 py-8 rounded-xl relative group w-64 m-24 cursor-pointer mx-auto">
              <h2 className=" text-3xl font-bold text-white">React js</h2>
              <p className=" text-left mt-5">
                Experienced in React, I develop interactive and dynamic user
                interfaces.
              </p>
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#622ffe] to-[#b695ff] absolute -top-[5.5rem] flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-500 transform-gpu left-1/2 -translate-x-1/2">
                <FaReact size={60} color="white" className="lg:text-4xl" />
              </div>
            </div>
          </SwiperSlide>
          </Fade>
          <SwiperSlide>
            <div className=" skill-bg px-8 py-8 rounded-xl relative group w-64 m-24 cursor-pointer mx-auto">
              <h2 className=" text-3xl font-bold text-white">Js</h2>
              <p className=" text-left mt-5">
                From frontend to backend, I leverage JavaScript's versatility to
                handle data manipulation, and interact with APIs..
              </p>
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#622ffe] to-[#b695ff] absolute -top-[5.5rem] flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-500 transform-gpu left-1/2 -translate-x-1/2">
                <TbBrandJavascript size={60} color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" skill-bg px-8 py-8 rounded-xl relative group w-64 m-24 cursor-pointer mx-auto">
              <h2 className=" text-3xl font-bold text-white">Nodejs</h2>
              <p className=" text-left mt-5">
                Skilled in Node.js, I build scalable and server-side
                applications
              </p>
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#622ffe] to-[#b695ff] absolute -top-[5.5rem] flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-500 transform-gpu left-1/2 -translate-x-1/2">
                <FaNodeJs size={60} color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" skill-bg px-8 py-8 rounded-xl relative group w-64 m-24 cursor-pointer mx-auto">
              <h2 className=" text-3xl font-bold text-white">Tailwind</h2>
              <p className=" text-left mt-5">
                Proficient in Tailwind CSS, I create customized and responsive
                user interfaces efficiently.
              </p>
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#622ffe] to-[#b695ff] absolute -top-[5.5rem] flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-500 transform-gpu left-1/2 -translate-x-1/2">
                <TbBrandTailwind size={60} color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" skill-bg px-8 py-8 rounded-xl relative group w-64 m-24 cursor-pointer mx-auto">
              <h2 className=" text-3xl font-bold text-white">MongoDb</h2>
              <p className=" text-left mt-5">
                MongoDB allows me to store, retrieve, and manipulate data
                efficiently.
              </p>
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#622ffe] to-[#b695ff] absolute -top-[5.5rem] flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-500 transform-gpu left-1/2 -translate-x-1/2">
                <TbBrandMongodb size={60} color="white" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" skill-bg px-8 py-8 rounded-xl relative group w-64 m-24 cursor-pointer mx-auto">
              <h2 className=" text-3xl font-bold text-white">Bootstrap</h2>
              <p className=" text-left mt-5">
                Skilled in Bootstrap, I develop modern and visually appealing
                websites
              </p>
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#622ffe] to-[#b695ff] absolute -top-[5.5rem] flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-500 transform-gpu left-1/2 -translate-x-1/2">
                <TbBrandBootstrap size={60} color="white" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MySkills;
