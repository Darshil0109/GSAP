window.addEventListener("wheel",function(event){
    if (event.deltaY > 0){
        gsap.to(".slide",{
            transform:'translateX(-200%)',
            duration:4,
            repeat:-1,
            ease:"none",
        })
        gsap.to(".slide img",{
            rotate:0
        })
    }else{
        gsap.to(".slide",{
            transform:'translateX(0%)',
            duration:4,
            repeat:-1,
            ease:"none",
        })
        gsap.to(".slide img",{
            rotate:180
        })
    }
    
})
