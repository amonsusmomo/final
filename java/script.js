const acceptCookiesButton = document.getElementById('accept-cookies');
const footer = document.querySelector('footer');

acceptCookiesButton.addEventListener('click', function() {
    footer.classList.add('accepted-cookies');
});
alert("hi"); 

var visitorName = prompt("What's your name : ")
var isCoolWithIt = confirm("Are you ok with us installing a virus on your PC  ; )?")