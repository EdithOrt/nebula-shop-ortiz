import React from "react";
import { Link, NavLink } from "react-router-dom";

export function SimpleButton({ text, onClick, disabled }) {
  return (
    <button
      className="simple-button"
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export function LinkButton({ text, to, disabled }) {
  return (
    <Link className="link-button" to={to} disabled={disabled}>
      <p className="link-button__text">{text}</p>
    </Link>
  );
}

export function NavLinkButton({ text, to, disabled }) {
  return (
    <NavLink className="nav-link-button" to={to} disabled={disabled}>
      <p className="nav-link-button__text">{text}</p>
    </NavLink>
  );
}
