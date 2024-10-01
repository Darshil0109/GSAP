// index.html
// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     // backgroundColor:'blue',
//     // borderRadius:"50%",
//     // repeat:2, //it will run 2 times as repeat 1 if repeat 2 then 3 times and repeat -1 infinite
//     // yoyo:true,  //for making box come back then go again then come back until repeat
// })
// index2.html
gsap.from("h1",{
    y:30,
    opacity:0,
    duration:1,
    delay:1,
    // stagger:1 // stagger 1 will animate first h1 as first second h1 as second and last h1 as last
    stagger:-1 // stagger -1 will animate first h1 as last second h1 as second and last h1 as first

})


var tl=gsap.timeline()

tl.to("#box1",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1,
})
tl.to("#box2",{
    x:1500,
    duration:1.5,
})
tl.to("#box3",{
    x:1500,
    duration:1.5,
})