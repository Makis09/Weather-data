"use strict";
import HomePage from "./view/pages/homepage.js";
import Navbar from "./view/components/navbar.js";
import Footer from "./view/components/footer.js";

const initialize = async () => {

  const header = document.getElementById("header_container");
  const content = document.getElementById("main-container");
  const footer = document.getElementById("footer_container");

  header.innerHTML = await Navbar.render();
  footer.innerHTML = await Footer.render();
  content.innerHTML = await HomePage.render();
  await HomePage.after_render();
};

window.addEventListener("load", initialize);
