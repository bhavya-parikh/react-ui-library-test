import React from "react";
import buttonCss from "./Button.module.css";
function Button({ size, color, content }) {
  const buttonClasses = `${buttonCss.button} ${buttonCss[size]}`;
  return <button className={buttonClasses}>{content}</button>;
}

export default Button;
