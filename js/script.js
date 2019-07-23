let toggleNavStatus = false;

let toggleNav = function () {
    let get = document.querySelector(".box-2");
    if (toggleNavStatus === false) {
        get.style.display="flex";
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        get.style.display="none";
        toggleNavStatus = false;
    }

};