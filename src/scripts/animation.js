export function animation() {

    var controller = new ScrollMagic.Controller();


    var tweenBrancheUp = new TimelineMax();
    tweenBrancheUp.add(
        TweenMax.to(".branche", 1, {y:"-150px",force3D: true})
    )
    tweenBrancheUp.add(
        TweenMax.to(".txt-branche", 1, {opacity:"1",force3D: true})
    )


    var tweenBrancheDown = new TimelineMax();
    tweenBrancheDown.add(
        TweenMax.to(".branche", 1, {y:"0px",force3D: true})
    )
    tweenBrancheDown.add(
        TweenMax.to(".txt-branche", 1, {opacity:"0",force3D: true})
    )


    var brancheUp = new ScrollMagic.Scene({
        triggerElement: ".brancheUp", 
        duration: 500, 
        tweenChanges: false, 
        offset: 500})
        .setTween(tweenBrancheUp).addTo(controller).addIndicators();

    var brancheDown = new ScrollMagic.Scene({
        triggerElement: ".brancheDown", 
        duration: 500, 
        tweenChanges: false, 
        offset: 500})
        .setTween(tweenBrancheDown).addTo(controller).addIndicators();





    var tweenAppareilUp = new TimelineMax();
    tweenAppareilUp.add(
        TweenMax.to(".appareil_photo", 1, {y:"-100px",x:"-20px",force3D: true})
    )
    tweenAppareilUp.add(
        TweenMax.to(".txt-appareil", 1, {opacity:"1",force3D: true})
    )


    var tweenAppareilDown = new TimelineMax();
    tweenAppareilDown.add(
        TweenMax.to(".appareil_photo", 1, {y:"0px",x:"0",force3D: true})
    )
    tweenAppareilDown.add(
        TweenMax.to(".txt-appareil", 1, {opacity:"0",force3D: true})
    )


    var appareilUp = new ScrollMagic.Scene({
        triggerElement: ".appareilUp", 
        duration: 500, 
        tweenChanges: false, 
        offset: 500})
        .setTween(tweenAppareilUp).addTo(controller).addIndicators();

    var appareilDown = new ScrollMagic.Scene({
        triggerElement: ".appareilDown", 
        duration: 500, 
        tweenChanges: false, 
        offset: 500})
        .setTween(tweenAppareilDown).addTo(controller).addIndicators();
    
    
    
    
    
    
    var tweenInterrupteurUp = new TimelineMax();
    tweenInterrupteurUp.add(
        TweenMax.to(".interrupteur", 1, {y:"-80px",x:"50px",force3D: true})
    )
    tweenInterrupteurUp.add(
        TweenMax.to(".txt-interrupteur", 1, {opacity:"1",force3D: true})
    )


    var tweenInterrupteurDown = new TimelineMax();
    tweenInterrupteurDown.add(
        TweenMax.to(".interrupteur", 1, {y:"0px",x:"0px",force3D: true})
    )
    tweenInterrupteurDown.add(
        TweenMax.to(".txt-interrupteur", 1, {opacity:"0",force3D: true})
    )


    var interrupteurUp = new ScrollMagic.Scene({
        triggerElement: ".interrupteurUp", 
        duration: 400, 
        tweenChanges: false, 
        offset: 500})
        .setTween(tweenInterrupteurUp).addTo(controller).addIndicators();

    var interrupteurDown = new ScrollMagic.Scene({
        triggerElement: ".interrupteurDown", 
        duration: 400, 
        tweenChanges: false, 
        offset: 500})
        .setTween(tweenInterrupteurDown).addTo(controller).addIndicators();
}
