"use strict";

let mobile_menue_icon = document.getElementsByClassName("mobile_menue_icon")[0];
let mobile_menue = document.getElementsByClassName("mobile_menue")[0];
mobile_menue.classList.add("hidden");
mobile_menue_icon.addEventListener("click", function () {
    mobile_menue.classList.toggle("hidden");
})