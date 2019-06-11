import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1024px;
  color: white;
  font-size: 0.9rem;
  height: 44px;
  padding: 0 25px;
`;

const AppleLogo = styled.div`
  background-image: url("./assets/images/apple-logo.svg");
`;

const NavWrapper = props => {
  return (
    <NavBar>
      <Link to="/">
        <img
          src="https://www.apple.com/ac/globalnav/4/en_US//images/globalnav/apple/image_large.svg"
          alt=""
        />
      </Link>

      {props.navLinks.map(link => {
        return (
          <NavLink to="/mac">
            <Nav key={link.id} link={link} />
          </NavLink>
        );
      })}
      <img
        src="https://www.apple.com/ac/globalnav/4/en_US//images/globalnav/search/image_large.svg"
        alt=""
      />
      <img
        src="https://www.apple.com/ac/globalnav/4/en_US//images/globalnav/bag/image_large.svg"
        alt=""
      />
    </NavBar>
  );
};

export default NavWrapper;