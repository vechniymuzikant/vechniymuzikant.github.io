var btn = document.querySelector('.hamburger')

btn.onclick = function() {
    var element = document.querySelector('nav');
    console.log(element.classList.length);
    if(element.classList.length > 0)
    {
        element.classList.remove('active');
    }
    else {
        element.classList.add('active');
    }
};

window.addEventListener("scroll", function () {
    var scroll = this.scrollY;
    var element = document.querySelector('nav');
    if(window.screen.availWidth > 1200)
    {
        element.classList.remove('active');
    }
});

const span = document.querySelector("span");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

