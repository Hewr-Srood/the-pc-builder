import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";

const navItems = [
  { name: "Build", path: "#" },
  { name: "Pre-Builds", path: "#" },
  { name: "Accessories", path: "#" },
  { name: "About us", path: "#" },
];

const parts = [
  { name: "Motherboard", path: "#" },
  { name: "CPU", path: "#" },
  { name: "GPU", path: "#" },
  { name: "RAM", path: "#" },
  { name: "PSU", path: "#" },
  { name: "Fan", path: "#" },
  { name: "Hard", path: "#" },
  { name: "Cooler", path: "#" },
];
export default function () {
  const [Open, SetOpen] = useState(false);
  const toggleCollapse = () => {
    SetOpen(!Open);
  };
  return (
    <Router>
      <MDBNavbar color="grey darken-4" dark={true} expand="md">
        <MDBNavbarBrand>
          <strong className="texty-demo">
            <Texty duration={450} delay={250}>
              The PC builder
            </Texty>
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={Open} navbar>
          <MDBNavbarNav right className="mr-5">
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className=" mx-2" nav caret>
                  <span>Parts</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  {parts.map((part,index) => (
                    <MDBDropdownItem key={index} href="#!">{part.name}</MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            {navItems.map((item,index) => (
              <MDBNavItem key={index}>
                <motion.div
                  className="navlink rounded mx-2 "
                  initial={{ background: "transparent" }}
                  whileHover={{ scale: 1.05, background: "#434343" }}
                  whileTap={{ scale: 0.9, background: "red" }}
                >
                  <MDBNavLink to="#!">{item.name}</MDBNavLink>
                </motion.div>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
  );
}
