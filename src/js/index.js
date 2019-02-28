import {TweenMax} from "gsap/TweenMax";
const koopa = document.querySelector('#koopa');
const timeLine = new TimelineMax();

 timeLine.to(koopa, 2,
    {
        backgroundPosition: '5830px',
        ease: SteppedEase.config(22),
        repeat: 3

})
