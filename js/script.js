$(function() {

    $(document).scroll( function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled' , $(this).scrollTop() > $nav.height());
    });
});

var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.left = "-360px";
menu.onclick = function(){
    if(items.style.left == "-360px"){
        items.style.left = "0";
    }
    else{
        items.style.left = "-360px";
    }
}


var phoneNumber = "+905511681241";
var encodedPhoneNumber = encodeURIComponent(phoneNumber);

var whatsappLink = "https://api.whatsapp.com/send?phone=" + encodedPhoneNumber;

// Function to open WhatsApp link
function openWhatsAppLink() {
    var linkElement = document.getElementById("whatsappLink");
    linkElement.href = whatsappLink;
    linkElement.click();
}
// script.js (continued)
var buttonElement = document.querySelector(".cta button");
buttonElement.addEventListener("click", openWhatsAppLink);



// Smooth scrolling for navigation links
$(document).ready(function () {
    $(".menu-items a").on("click", function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $("html, body").animate(
            {
                scrollTop: target.offset().top - $(".nav").outerHeight(),
            },
            100 // Adjust the duration here (in milliseconds)
        );
    });
});


