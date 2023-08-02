$(function(){
    let navContainer = $(".navigation-holder");
    let footerContainer = $(".footer-holder");

    navContainer.load("nav");
    footerContainer.load("footer");

    $(".button-style").click(function(e){
        e.preventDefault();
        linkLocation = this.href;
        $("body").addClass("animate__animated animate__fadeOut");
        $("body").on('animationend webkitAnimationEnd', function(e){
            window.location = linkLocation;
        });
    });

    window.addEventListener("pageshow", (event) => {
    const historyTraversal =
        event.persisted ||
        (typeof window.performance != "undefined" &&
        window.performance.navigation.type === 2);

    if (historyTraversal) {
        window.location.reload();
    }
    });
})
