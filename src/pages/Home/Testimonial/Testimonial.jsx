import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className=" container mx-auto skill-bg px-10 py-10 rounded-2xl">
      <span className=" card-bg px-6 py-1 rounded-2xl gradient-text font-bold">
        Testimonial
      </span>
      <h1 className="lg:text-5xl text-2xl font-bold mb-10 mt-5">
        What People Say <br /> About Me
      </h1>

      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" flex items-center justify-center mb-5">
              <FaQuoteRight size={50} />
            </div>
            <p className=" lg:text-lg text-white mb-5 font-sans">
              "Working with Shafaet has been an absolute pleasure. Their
              expertise in web development, particularly in React, JavaScript,
              Node.js, <br /> and MongoDB, has been instrumental in bringing our
              project to life. Their ability to create interactive and visually
              appealing <br /> user interfaces with React has greatly enhanced
              the overall user experience. Their proficiency in JavaScript and
              Node.js has allowed us to build a robust <br /> and efficient
              backend that seamlessly integrates with our frontend.
              Additionally, their expertise in MongoDB <br /> ensured that our
              data-driven applications were designed and implemented smoothly.
              Shafaet is a talented and dedicated <br /> developer who
              consistently delivers high-quality results. I highly recommend
              their services!"
            </p>
            <img
              className="inline-block object-cover h-14 w-14 rounded-full ring-2 ring-white mb-5"
              src="https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363_960_720.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold text-white mb-5">Taha</h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center mb-5">
              <FaQuoteRight size={50} />
            </div>
            <p className=" lg:text-lg text-white mb-5 font-sans">
              "Working with Shafaet has been an absolute pleasure. Their
              expertise in web development, particularly in React, JavaScript,
              Node.js, <br /> and MongoDB, has been instrumental in bringing our
              project to life. Their ability to create interactive and visually
              appealing <br /> user interfaces with React has greatly enhanced
              the overall user experience. Their proficiency in JavaScript and
              Node.js has allowed us to build a robust <br /> and efficient
              backend that seamlessly integrates with our frontend.
              Additionally, their expertise in MongoDB <br /> ensured that our
              data-driven applications were designed and implemented smoothly.
              Shafaet is a talented and dedicated <br /> developer who
              consistently delivers high-quality results. I highly recommend
              their services!"
            </p>
            <img
              className="inline-block object-cover h-14 w-14 rounded-full ring-2 ring-white mb-5"
              src="https://cdn.pixabay.com/photo/2016/11/20/09/15/people-1842334_960_720.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold text-white mb-5">Taha</h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center mb-5">
              <FaQuoteRight size={50} />
            </div>
            <p className="lg:text-lg text-white mb-5 font-sans">
              "Working with Shafaet has been an absolute pleasure. Their
              expertise in web development, particularly in React, JavaScript,
              Node.js, <br /> and MongoDB, has been instrumental in bringing our
              project to life. Their ability to create interactive and visually
              appealing <br /> user interfaces with React has greatly enhanced
              the overall user experience. Their proficiency in JavaScript and
              Node.js has allowed us to build a robust <br /> and efficient
              backend that seamlessly integrates with our frontend.
              Additionally, their expertise in MongoDB <br /> ensured that our
              data-driven applications were designed and implemented smoothly.
              Shafaet is a talented and dedicated <br /> developer who
              consistently delivers high-quality results. I highly recommend
              their services!"
            </p>
            <img
              className="inline-block object-cover h-14 w-14 rounded-full ring-2 ring-white mb-5"
              src="https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363_960_720.jpg"
              alt=""
            />
            <h3 className=" text-xl font-bold text-white mb-5">Taha</h3>
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
};

export default Testimonial;
