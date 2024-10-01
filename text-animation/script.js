function breakTheText(){
    var h1 = document.querySelector('h1')
    var h1Text = h1.textContent
    var splitedText = h1Text.split("")
    var text = ""
    var halfValue=splitedText.length/2
    splitedText.forEach(function(elem,index){
        if (index < halfValue){
            text += `<span class="firstRender">${elem}</span>`
        }
        else{
            text += `<span class="secondRender">${elem}</span>`
        }
    })
    console.log("Text is : ",text);
    h1.innerHTML = text
}
breakTheText()

// To stagger element in reverse add stagger:-0.15
gsap.from(".firstRender",{
    y:80,
    duration:1,
    delay:0.5,
    stagger:0.15,
    opacity:0,
    ease: "back.out(2)",
})
gsap.from(".secondRender",{
    y:80,
    duration:1,
    delay:0.5,
    stagger:-0.15,
    opacity:0,
    ease: "back.out(2)",
})
