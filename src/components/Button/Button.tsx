import { NavLink } from "react-router-dom";
import { PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
    to: string;
    className?: string;
    external?: boolean;
}

function Button( { to, className = "", external = false, children }: PropsWithChildren<ButtonProps>) {
  if (external)
  {
    return (
      <a href={to} className={`${styles.button} ${className}`} target="_blank">{children}</a>
    )
  }
  return (
    <NavLink to={to} className={`${styles.button} ${className}`}>{children}</NavLink>
  )
}

export default Button