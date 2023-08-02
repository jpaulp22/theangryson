$(function(){
    let loader = $("#loader");
    let mainNav = $("#main-nav");
    let secondNav = $("#second-nav");
    let worldBtn = $("#secondnavbtn");
    let backBtn = $("#backbtn");

    //loading screen gone
    loader.on('animationend webkitAnimationEnd', function(e){
        loader.css('visibility', 'hidden');
    });

    worldBtn.click(function(){
        mainNav.removeClass("animate__animated animate__fadeInLeft");
        secondNav.removeClass("animate__animated animate__fadeOutRight");
        mainNav.addClass('animate__animated animate__fadeOutLeft');
        secondNav.addClass('animate__animated animate__fadeInRight');
        secondNav.css('display', 'flex');
        mainNav.css('display', 'none');
    })

    backBtn.click(function(){
        mainNav.removeClass("animate__animated animate__fadeOutLeft");
        secondNav.removeClass("animate__animated animate__fadeInRight");
        secondNav.addClass("animate__animated animate__fadeOutRight");
        mainNav.addClass("animate__animated animate__fadeInLeft");
        mainNav.css('display', 'flex');
        secondNav.css('display', 'none');
    })

    $(".nav-item a:not(#miniMenu)").click(function(e){
        e.preventDefault();
        linkLocation = this.href;
        $("body").addClass("animate__animated animate__fadeOut");
        $("body").on('animationend webkitAnimationEnd', function(e){
            window.location = linkLocation;
        });
    })
})
