import { NavLink } from "react-router-dom";
import { PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
    to: string;
    className?: string;
}

function Button( { to, className = "", children }: PropsWithChildren<ButtonProps>) {
  return (
    <NavLink to={to} className={`${styles.button} ${className}`}>{children}</NavLink>
  )
}

export default Button