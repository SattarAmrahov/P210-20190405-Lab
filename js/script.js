"use strict";

let btn = document.querySelector("#buttons");
let ulElement = document.querySelector("ul");
btn.addEventListener("click", function () {
    let myInput = document.querySelector(".myinput");
    let newLiElement = document.createElement("li");

    newLiElement.classList.add("list-group-item", "mt-2");

    let newIconElement = document.createElement("i");
    newIconElement.classList.add("fas", "fa-times", "mr-3");

    newLiElement.appendChild(newIconElement);
    newLiElement.appendChild(document.createTextNode(myInput.value));

    newLiElement.addEventListener("click", function () {
        let icon = this.querySelector(".fas");
        icon.classList.toggle("fa-check");
        icon.classList.toggle("fa-times");
    });

    ulElement.appendChild(newLiElement);

});