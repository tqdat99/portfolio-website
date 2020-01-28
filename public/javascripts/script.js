window.onload = function() {

    setTimeout(function() {

        // reference to <head>
        var head = document.getElementsByTagName('head')[0];

        // // a new CSS
        // var css = document.createElement('link');
        // css.type = "text/css";
        // css.rel = "stylesheet";
        // css.href = "stylesheet";

        // // a new JS
        // var js = document.createElement("script");
        // js.type = "text/javascript";
        // js.src = "http://domain.tld/preload.js";

        // preload JS and CSS
        // head.appendChild(css);
        // head.appendChild(js);

        // preload image
        new Image().src = "/images/project-1.jpg";
        new Image().src = "/images/project-2.jpg";
        new Image().src = "/images/hero.png";
        new Image().src = "/images/about.png";

    }, 1000);
}

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
}
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