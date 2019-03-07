import {TweenMax} from "gsap/TweenMax";
const koopa = document.querySelector('#koopa');
const timeLine = new TimelineMax();

 timeLine.to(koopa, 2,
    {
        backgroundPosition: '5830px',
        ease: SteppedEase.config(22),
        force3D: true,
        rotationZ: 0.01,
        repeat: 3
})
