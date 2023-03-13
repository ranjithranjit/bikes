const tl = gsap.timeline({defaults:{ease: "elastic"}});

tl.to(".loader", {duration: 3, y:"200%", ease:"power"},"+=1.5");

function project(){
    gsap.to(".project", {duration:3, x:"0%", ease:"bounce"});
}
function reproject(){
    gsap.to(".project", {duration:3, x:"-200%", ease:"bounce"});
    

}

function clicks(){
    alert("Your Entry Has been grnated....")
}