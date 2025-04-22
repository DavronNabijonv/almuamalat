import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa6";

export default function Btn({ txt, click_func, btn_styles, iconImg }) {
  const { t } = useTranslation();
  return (
    <div onClick={click_func} className={btn_styles}>
      {t(txt)} {iconImg}
    </div>
  );
}
