import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function TextTranslater({
  have_ancor = false,
  ancor_link,
  have_route = false,
  route_link,
  route_active_styles,
  route_click_func,
  txt,
  txt_styles,
}) {
  const { t } = useTranslation();
  return have_ancor ? (
    <a href={ancor_link}>
      <div className={txt_styles}>{t(txt)}</div>
    </a>
  ) : have_route ? (
    <NavLink
      to={route_link}
      onClick={route_click_func}
      className={({ isActive }) => ` ${txt_styles} ${isActive?route_active_styles:''} ` }
    >
      <div className={``}>{t(txt)}</div>
    </NavLink>
  ) : (
    <div className={txt_styles}>{t(txt)}</div>
  );
}
