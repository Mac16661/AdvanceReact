import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import Button,{ SalesButton } from "../Components/Button.js";

function Header({ title, darkMode }) {

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </div>

      {title && <h2>{title}</h2>}

      <div className="header_right">
        {/* TODO: Our own custom designed button with styled componenets */}
        <Button darkMode={darkMode}>Login</Button>
        <Button>Register</Button>
        <SalesButton darkMode={darkMode} size={"large"}>Buy Now</SalesButton>
      </div>

      <div className="header_right--mobile">
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
