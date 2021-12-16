window.addEventListener('load', function(e){
    
    mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
    }));
})