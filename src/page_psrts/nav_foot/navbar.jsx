import React, { useContext } from "react";
import { useState } from "react";
import "../../App.css";
import { useTranslation } from "react-i18next";
import TextTranslater from "../../components/textTranslater";
import { CheckUser } from "../../App";
import Btn from "../../components/btn";

// images and logos
import logo from "../../assets/logo.jpg";
import uzFlag from "../../assets/uz.png";
import enFlag from "../../assets/en.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Navbar() {
  const { checkUser } = useContext(CheckUser);
  const [togle, setTogle] = useState(false);

  // change togle navbar for phone type
  const changeTogler = () => {
    setTogle(!togle);
  };

  // change language
  const { i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="navbar fixed z-[1000] w-[100%] top-[0] ">
      <div className="container flex justify-between items-center shadow-lg shadow-gray-200 ">
        <img
          src={logo}
          className=" w-[200px] "
          loading="lazy"
          alt="logo image"
        />

        <div className=" lg:flex hidden links_group gap-[20px] max-xl:gap-[10px] max-xl:text-[15px] ">
          <LinksGroup />
        </div>

        <div className="nav-btn-grp flex gap-[20px] items-center ">
          <LanguageSelector onChange={handleChange} />


          {/* togle button icon */}
          <div
            className={"lg:hidden inline right-0 w-[2rem]  "}
            onClick={changeTogler}
          >
            <div
              className={` ${
                togle
                  ? " transform -rotate-[45deg] -translate-x-[10px] translate-y-[5px] "
                  : "  "
              } m-[0.5rem] w-[1.5rem] h-[0.12rem] bg-orange-600 duration-[0.4s]`}
            ></div>
            <div
              className={` ${
                togle ? "opacity-[0]" : "opacity-[1]"
              } m-[0.5rem] w-[0.8rem] h-[0.12rem] bg-orange-600 duration-[0.4s]`}
            ></div>
            <div
              className={` ${
                togle
                  ? "transform rotate-[45deg] -translate-x-[10px] -translate-y-[15px]"
                  : ""
              } m-[0.5rem] w-[1.5rem] h-[0.12rem] bg-orange-600 duration-[0.4s]`}
            ></div>
          </div>
          {/* togle button icon */}


          {/* navigation link for responsive */}
          <div
            className={`lg:hidden flex flex-col sm:justify-start justify-center sm:items-start items-center gap-[15px] absolute duration-[0.4s] ${
              togle
                ? "transform translate-x-[0%] z-[22222] "
                : "transform translate-x-[100%]"
            } top-[66px] bg-white text-[18px] right-0 sm:w-[60%] w-[100%] h-[100vh] p-[15px] `}
          >
            <LinksGroup
              close_func={() => {
                setTogle(false);
              }}
            />
          </div>
          {/* navigation link for responsive */}

          {checkUser ? (
            <Btn
              txt="Profile"
              btn_styles=" rounded "
              iconImg={<FaArrowRight />}
            />
          ) : (
            <Btn
              btn_styles=" rounded-[20px] flex gap-[10px] bg-orange-600 px-[10px] pb-[4px] pt-[2px] text-[16px] text-white flex gap-[10px] items-center "
              iconImg={<FaArrowRight />}
              txt="Login"
            />
          )}
        </div>
      </div>
      {/* overflow */}
      <div
        className={`absolute ${
          togle ? "flex" : "hidden"
        } w-[100%] h-[100vh] z-[999] top-0 bottom-0 left-0 `}
        onClick={() => setTogle(false)}
      ></div>
      {/* overflow */}
    </div>
  );
}

function LinksGroup({ close_func }) {
  return (
    <>
      <TextTranslater
        have_route={true}
        txt_styles=" text-teal-950 font-[600]  hover:text-orange-600 "
        route_link={"/"}
        route_active_styles={'text-orange-600'}
        txt="homePage"
        route_click_func={close_func}
      />

      <TextTranslater
        have_route={true}
        txt_styles=" text-teal-950 font-[600] hover:text-orange-600 "
        route_active_styles={'text-orange-600'}
        route_link={"/"}
        txt="services"
        route_click_func={close_func}
      />

      <DropDown />

      <TextTranslater
        have_route={true}
        route_active_styles={'text-orange-600'}
        txt_styles=" text-teal-950 font-[600] hover:text-orange-600 "
        route_link={"/"}
        txt="economica"
        route_click_func={close_func}
      />

      <TextTranslater
        have_route={true}
        txt_styles=" text-teal-950 font-[600] hover:text-orange-600 "
        route_link={"/"}
        txt="council"
        route_active_styles={'text-orange-600'}
        route_click_func={close_func}
      />

      <TextTranslater
        have_route={true}
        txt_styles=" text-teal-950 font-[600] hover:text-orange-600 "
        route_link={"/"}
        txt="contact"
        route_active_styles={'text-orange-600'}
        route_click_func={close_func}
      />
    </>
  );
}

const languages = [
  { code: "uz", label: "Uzbek", flag: uzFlag },
  { code: "en", label: "English", flag: enFlag },
];

function LanguageSelector({ onChange }) {
  const [open, setOpen] = useState(false);
  const [imgFlag, setImgFlag] = useState(uzFlag);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-white shadow-md flex items-center gap-2"
      >
        <img src={imgFlag} alt="flag" className="w-6 h-6" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                onChange(lang.code);
                setImgFlag(lang.flag);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-2 py-2 hover:bg-gray-200 cursor-pointer"
            >
              <img
                src={lang.flag}
                alt={`${lang.label} flag`}
                className="w-5 h-5"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DropDown() {
  const studyProgram = [
    {
      name: "program1",
      items: ["csaa", "cpss", "cipa", "cpfas", "csa", "cse"],
    },
    {
      name: "program2",
      items: ["program2-title"],
    },
    {
      name: "program3",
      items: ["program3-title"],
    },
  ];

  return (
    <div className="dropDownGrp relative group inline-block  ">
      <button className="dropDownBtn">
        <TextTranslater
          txt_styles="text-teal-950 font-[600]  hover:text-orange-600  "
          txt="programms"
        />
      </button>

      <div className="dropGrp-hide absolute hidden group-hover:flex flex-col gap-[15px] shadow-lg bg-white p-[10px] top-[100%] left-0 w-[230px] z-10">
        {studyProgram.map((tools, index) => (
          <div key={index} className={`relative group ${tools.name} `}>
            <TextTranslater
              txt={tools.name}
              txt_styles="hover:text-orange-600 cursor-pointer"
            />

            {/* Submenu */}
            <div
              className={` ${tools.name}-grp absolute flex-col gap-[10px] top-0 left-full min-w-[200px] max-h-[500px] overflow-y-auto bg-white shadow-lg p-[10px] z-20`}
            >
              {tools.items.map((item, i) => (
                <TextTranslater
                  key={i}
                  txt={item}
                  txt_styles="hover:text-orange-600 cursor-pointer"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
