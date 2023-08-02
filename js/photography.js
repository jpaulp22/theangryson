$(function(){
    //buttons container
    let selections = $(".selection-menu");

    //buttons
    let travelBtn = $(".travel");
    let eventsBtn = $(".events");
    let privateBtn = $(".private");

    //gallery containers
    let travelGal = $(".travel-gal");
    let eventGal = $(".events-gal");
    let privateGal = $(".private-gal");

    //back button
    let backBtn = $(".backbtn");

    galleryGenerator(travelGal, 'travel', 26);
    galleryGenerator(eventGal, 'events', 16);
    galleryGenerator(privateGal, 'private', 7);

    travelBtn.click(function(){
        galleryTransitionIn(travelGal, selections);
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top - 50
        });
    })

    eventsBtn.click(function(){
        galleryTransitionIn(eventGal, selections);
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top - 50
        });
    })

    privateBtn.click(function(){
        galleryTransitionIn(privateGal, selections);
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top - 50
        });
    })

    backBtn.click(function(){
        backAnimation($(this).parents(':eq(1)'), selections);
    })

    lightbox.option({
        'disableScrolling' : true,
        'wrapAround' : true,
    });

    //generates gallery
    function galleryGenerator(galleryContainer, folderName, imgNumber){

        let dir = "assets/photography/" + folderName + "/";
        let i = 0;
        while(i < imgNumber){
            if(galleryContainer.hasClass("travel-gal")){
                galleryContainer.append(
                '<div class="col-11 col-md-6 col-lg-4 pb-3"><a href="' + dir + i + '.jpg" data-lightbox="travel-gallery"><img class="img-fluid" src="' + dir + i + '.jpg"></a></div>'
                );
                i++;
            }
            else if(galleryContainer.hasClass("events-gal")){
                galleryContainer.append(
                '<div class="col-11 col-md-6 col-lg-4 pb-3"><a href="' + dir + i + '.jpg" data-lightbox="events-gallery"><img class="img-fluid" src="' + dir + i + '.jpg"></a></div>'
                );
                i++;
            }
            else{
                galleryContainer.append(
                '<div class="col-11 col-md-6 col-lg-4 pb-3"><a href="' + dir + i + '.jpg" data-lightbox="private-gallery"><img class="img-fluid" src="' + dir + i + '.jpg"></a></div>'
                );
                i++;
            }
        };
    }

    //transition to gallery
    function galleryTransitionIn(galleryContainer, prevContainer){
        prevContainer.removeClass('animate__animated animate__fadeIn');
        galleryContainer.removeClass('animate__animated animate__fadeOut');
        prevContainer.addClass('animate__animated animate__fadeOut');
        galleryContainer.addClass('animate__animated animate__fadeIn');
        galleryContainer.css('display', 'flex');
        prevContainer.css('display', 'none');
        galleryContainer.on("animationend webkitAnimationEnd", function(e){
            galleryContainer.removeClass('animate__animated animate__fadeIn');
            prevContainer.removeClass('animate__animated animate__fadeOut');
        })
    }

    //back button animation, animate from container, animate to container
    function backAnimation(galleryContainer, animateToContainer){
        animateToContainer.removeClass('animate__animated animate__fadeOut');
        galleryContainer.removeClass('animate__animated animate__fadeIn');
        galleryContainer.addClass('animate__animated animate__fadeOut');
        animateToContainer.addClass('animate__animated animate__fadeIn');
        animateToContainer.css('display', 'flex');
        galleryContainer.css('display', 'none');
        animateToContainer.on('animationend webkitAnimationEnd', function(e){
            galleryContainer.removeClass('animate__animated animate__fadeOut');
            animateToContainer.removeClass('animate__animated animate__fadeIn');
        })
    }
})
