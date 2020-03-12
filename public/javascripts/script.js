// Set the Access Token
var accessToken = 'cce761cf79c0ff6bd426c573f0f7e7da61b3873c46f9d878d770c05fa6398d8a';
// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token=' + accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        if (data.length > 0) {
            $.each(data.reverse(), function(i, val) {
                $('#shots').prepend(
                    '<div class="grid-item"><a class="shot" target="_blank" href="' + val.html_url + '" title="' + val.title + '"><div class="shot-title">' + val.title + '</div><img src="' + val.images.hidpi + '"/></div></a>'
                )
            })
        } else {
            $('#shots').append('<p>No shots yet!</p>');
        }
    }
});

$('#to-project-button').click(function(e) {
    e.preventDefault();
    $('.nav a[href="#works"]').tab('show');
});

function openNav() {
    if (document.getElementById("mySidebar").style.width == "64vw") {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("myOverlay").style.visibility = "hidden";
        document.getElementById("myOverlay").style.opacity = "0";
    } else {
        document.getElementById("mySidebar").style.width = "64vw";
        document.getElementById("myOverlay").style.visibility = "visible";
        document.getElementById("myOverlay").style.opacity = "1"
    }
};

var currentHref = window.location.href
if (currentHref.includes('projects')) {
    document.getElementById("projects").classList.add("active");
    document.getElementById("projects").removeAttribute("href");
    document.getElementById("sidenav-projects").classList.add("active");
    document.getElementById("sidenav-projects").removeAttribute("href");
} else if (currentHref.includes('about')) {
    document.getElementById("about").classList.add("active");
    document.getElementById("about").removeAttribute("href");
    document.getElementById("sidenav-about").classList.add("active");
    document.getElementById("sidenav-about").removeAttribute("href");
} else if (currentHref.includes('contact')) {
    document.getElementById("contact").classList.add("active");
    document.getElementById("contact").removeAttribute("href");
    document.getElementById("sidenav-contact").classList.add("active");
    document.getElementById("sidenav-contact").removeAttribute("href");
} else {
    document.getElementById("home").classList.add("active");
    document.getElementById("home").removeAttribute("href");
    document.getElementById("sidenav-home").classList.add("active");
    document.getElementById("sidenav-home").removeAttribute("href");
}

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
});