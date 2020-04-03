var homeContainer = document.getElementById('homeContainer');
var animItem = bodymovin.loadAnimation({
    wrapper: homeContainer,
    animType: 'svg',
    loop: true,
    path: 'images/home.json'
});
var mailContainer = document.getElementById('mailContainer');
var animItem = bodymovin.loadAnimation({
    wrapper: mailContainer,
    animType: 'svg',
    loop: true,
    path: 'images/mail.json'
});

// Set the Access Token
var dribbble_accessToken = 'cce761cf79c0ff6bd426c573f0f7e7da61b3873c46f9d878d770c05fa6398d8a';
// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token=' + dribbble_accessToken,
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

var vimeo_accessToken = 'a168061f8ab7853ba08e736d369b7814';
$.ajax({
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Accept", "application/vnd.vimeo.*+json;version=3.4")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.setRequestHeader("Authorization", "Bearer " + vimeo_accessToken)
    },
    url: 'https://api.vimeo.com/users/92838272/videos/?fields=link,name,pictures',
    type: 'GET',
    success: function(data) {
        videos = data.data;
        if (videos.length > 0) {
            $.each(videos.reverse(), function(i, val) {
                $('#videos').prepend(
                    '<div class="grid-item-video"><a class="shot" target="_blank" href="' + val.link + '" title="' + val.name + '"><div class="shot-title">' + val.name + '</div><img src="' + val.pictures.sizes[5].link + '"/></div></a>'
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

// $('#mySidebarOptions li a').click(function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: 0 }, 0);
// });

var btn = $('#back-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 0);
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

// var $grid = $('.grid').isotope({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     masonry: {
//         columnWidth: '.grid-sizer'
//     }
// });

var currentHref = window.location.href
if (currentHref.includes('works')) {
    document.getElementById("works").classList.add("active");
    //document.getElementById("works").removeAttribute("href");
    document.getElementById("sidenav-works").classList.add("active");
    //document.getElementById("sidenav-works").removeAttribute("href");
} else if (currentHref.includes('about')) {
    document.getElementById("about").classList.add("active");
    //document.getElementById("about").removeAttribute("href");
    document.getElementById("sidenav-about").classList.add("active");
    //document.getElementById("sidenav-about").removeAttribute("href");
} else if (currentHref.includes('contact')) {
    document.getElementById("contact").classList.add("active");
    //document.getElementById("contact").removeAttribute("href");
    document.getElementById("sidenav-contact").classList.add("active");
    //document.getElementById("sidenav-contact").removeAttribute("href");
} else {
    document.getElementById("home").classList.add("active");
    //document.getElementById("home").removeAttribute("href");
    document.getElementById("sidenav-home").classList.add("active");
    //document.getElementById("sidenav-home").removeAttribute("href");
}

// layout Isotope after each image loads
// $grid.imagesLoaded().progress(function() {
//     $grid.isotope('layout');
// });