import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../assets/pro.png";
import {FaUserAstronaut} from "react-icons/fa";
const Header = () => {
  return (
    <ReactNavbar
    burgerColor="white"
    burgerColorHover="red"
    logo={logo}
    logoWidth="15vmax" 
    navColor1="rgb(255, 229, 180)" 
    navColor2="#E3001E" 
    logoHoverSize="10px" 
    logoHoverColor="rgb(147,100,226)" 
    link1Text="Home" 
    link2Text="Facebook" 
    link3Text="Contact" 
    link4Text="WeightLose" 
    link1Url="/" 
    link2Url="/projects" 
    link3Url="/contact" 
    link4Url="/weights" 
    link1Size="2vmax" 
    link1Color="white" 
    nav1justifyContent="flex-start" 
    nav2justifyContent="flex-end" 
    nav3justifyContent="flex-start" 
    nav4justifyContent="flex-start" 
    link1ColorHover="#8F00FF" 
    link1Margin="1.7vmax" 
    profileIconUrl="/account" 
    profileIcon={true}
    ProfileIconElement={FaUserAstronaut}
    profileIconColor="white"
    profileIconColorHover="#8F00FF"
    />
  );
};

export default Header;