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

window.onscroll = function () {  
    var element = document.querySelector('nav');
    element.classList.remove('active');
}; 