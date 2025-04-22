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

        <div className="links_group flex gap-[20px] ">
          <LinksGroup />
        </div>

        <div className="nav-btn-grp">
          <LanguageSelector onChange={handleChange} />
          {checkUser ? (
            <Btn txt="Profile" btn_styles=' rounded ' iconImg={<FaArrowRight />} />
          ) : (
            <Btn btn_styles=' rounded-[20px] flex gap-[10px] bg- ' iconImg={<FaArrowRight />} txt="Login" />
          )}
        </div>
      </div>
    </div>
  );
}

function LinksGroup({ close_func }) {
  return (
    <>
      <TextTranslater have_route={true} route_link={"/"} txt="homePage" />

      <TextTranslater have_route={true} route_link={"/"} txt="economica" />

      <TextTranslater have_route={true} route_link={"/"} txt="council" />

      <TextTranslater have_route={true} route_link={"/"} txt="contact" />
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
