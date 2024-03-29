import { useDispatch, useSelector } from "react-redux";
import personImg from "../assets/musaSayar.jpg";
import { IoMdMail } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import Cv from "/MusaSayarCv.pdf";
import { FaArrowDown } from "react-icons/fa";

import FormModal from "./FormModal.jsx";
import { sendFormMail } from "../redux/portfolioSlice.jsx";

const Person = () => {


  const { sendFormModal } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch()



  
  
  return (
    <div className="relative">
      <div className="flex items-center justify-center   p-[2rem] bg-[#e2e8f0] ">
        <div className=" md:grid  grid-cols-4  gap-4   max-w-7xl">
          <div className="col-span-3 flex items-center justify-center flex-col  p-4 text-center">
            {/*<h1 className="text-[#1e293b] font-bold text-4xl">Junior Front-End Developer</h1>*/}
            <h2 className="text-[#334155] font-bold text-3xl">Musa Sayar</h2>

            {/*<p className="flex items-center text-gray-50"> <FaPhone className="mr-2"  size={24}/> <span>5399132765</span> </p>*/}
            <p className="text-xs sm:text-sm text-[#475569] p-2 sm:p-5 text-start indent-4 italic text-wrap leading-4 sm:leading-6 font-semibold">
              I graduated from Istanbul Yeni Yüzyıl University, International
              Trade and Logistics department in 2021. During my undergraduate
              education, I did a summer internship at Gelişim Logistics. During
              my undergraduate education, I did an article research on the
              effect of social media advertisements on consumers and a project
              research on the factors affecting bank loan volumes. After
              graduating, I started to develop myself in the software area. I
              learned Html, Css, Javascript, Bootstrap, React, Redux-Toolkit,
              Jquery, NodeJS, Sass, Scss, Git and Github and Sql programming
              languages.
            </p>
            <div className="flex items-center justify-center wrap mt-3 space-x-4 group">
              <a href="https://github.com/musayar9 " target="_blank">
                <BsGithub
                  className="hover:text-gray-800 duration-200 ease-out hover:scale-150"
                  title={"https://github.com/musayar9"}
                  size={26}
                />
              </a>
              <a href="https://www.linkedin.com/in/musasayar/" target="_blank ">
                <TfiLinkedin
                  className="text-[rgb(10,102,194)] hover:text-blue-800  duration-200 ease-out hover:scale-150"
                  title={"https://www.linkedin.com/in/musasayar/"}
                  size={26}
                />
              </a>
              <a href="https://medium.com/@musasayar67" target="_blank">
                <BsMedium
                  className="text-orange-600 hover:text-orange-700  duration-200 ease-out hover:scale-150"
                  title="https://medium.com/@musasayar67"
                  size={26}
                />
              </a>
            </div>
            <button
              className="group"
              onClick={() => dispatch(sendFormMail(true))}
            >
              <p
                className="flex items-center text-[#334155] text-md sm:text-lg md:text-xl font-bold mt-2  group-hover:text-gray-800 group-hover:scale-110 transition duration-200 ease-in"
                title="Send Mail"
              >
                <IoMdMail className="mr-2" size={24} />
                <span>musasayar67@gmail.com</span>
              </p>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className=" hidden md:flex  w-56 h-56  bg-teal-600 border-4 border-gray-50 rounded-full drop-shadow-xl">
              <img
                className="rounded-full  w-[100%] h-[100%] "
                src={personImg}
              />
            </div>

            <div className=" md:mt-8 ">
              <a
                href={Cv}
                download
                className=" w-fit flex items-center px-4 py-2 bg-gray-400 font-semibold text-white  rounded-md  shadow-2xl drop-shadow-xl hover:translate-y-1 hover:bg-gray-500 duration-200 ease-in"
              >
                Cv Download <FaArrowDown className="hidden" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {sendFormModal && <FormModal />}
    </div>
  );
};

export default Person;
