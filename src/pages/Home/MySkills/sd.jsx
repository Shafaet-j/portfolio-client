import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript, TbBrandMongodb, TbBrandTailwind, TbBrandBootstrap } from "react-icons/tb";

const MySkills = () => {
  return (
    <section className="my-20">
      <span className="card-bg px-6 py-1 rounded-2xl font-bold gradient-text">
        Technology
      </span>
      <h1 className="text-5xl font-bold mb-10 mt-5">
        Technology <br /> I Know
      </h1>

      <div className="container mx-auto">
        <Swiper
          slidesPerView={4}
          freeMode={true}
          spaceBetween={170}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {[{ title: "React js", icon: <FaReact size={60} color="white" />, description: "Experienced in React, I develop interactive and dynamic user interfaces." },
          { title: "Js", icon: <TbBrandJavascript size={60} color="white" />, description: "From frontend to backend, I leverage JavaScript's versatility to handle data manipulation and interact with APIs." },
          { title: "Nodejs", icon: <FaNodeJs size={60} color="white" />, description: "Skilled in Node.js, I build scalable and server-side applications." },
          { title: "Tailwind", icon: <TbBrandTailwind size={60} color="white" />, description: "Proficient in Tailwind CSS, I create customized and responsive user interfaces efficiently." },
          { title: "MongoDb", icon: <TbBrandMongodb size={60} color="white" />, description: "MongoDB allows me to store, retrieve, and manipulate data efficiently." },
          { title: "Bootstrap", icon: <TbBrandBootstrap size={60} color="white" />, description: "Skilled in Bootstrap, I develop modern and visually appealing websites." }].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="skill-bg px-8 py-8 rounded-xl relative group w-64 m-24 cursor-pointer">
                <h2 className="text-3xl font-bold text-white">{item.title}</h2>
                <p className="text-left mt-5">{item.description}</p>
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#622ffe] to-[#b695ff] absolute -top-[5.5rem] flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-500 transform-gpu left-1/2 -translate-x-1/2">
                  {item.icon}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MySkills;
