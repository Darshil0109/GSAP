var path = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`


var string = document.querySelector("#string")


// string.addEventListener("mouseenter",function(dets){
//     console.log("Entered");
// })
// string.addEventListener("mouseleave",function(){
//     console.log("Left");
// })
string.addEventListener("mousemove",function(event){
    path = `M 10 100 Q ${event.x} ${event.y} 990 100`
    
    gsap.to("svg path",{
        attr:{ d:path },
        duration:0.2,
        ease:"power1.out"
    })
})
string.addEventListener("mouseleave",function(event){
    gsap.to("svg path",{
        attr:{ d:finalPath },
        duration:2,
        ease:"elastic.out(1,0.2)"
    })
})