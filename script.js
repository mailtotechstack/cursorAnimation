const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
const image = document.querySelector("#image");

main.addEventListener("mousemove", (e)=>{
    gsap.to(cursor, {
        x: e.x,
        y: e.y
    });
});

image.addEventListener("mouseenter", (e)=>{
    gsap.to(cursor, {
        innerText: "More View",
        scale: 4,
        x: e.x,
        y: e.y,
        backgroundColor: "rgba(255, 255, 255, 0.5)"
    });
});

image.addEventListener("mouseleave", (e)=>{
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 1)"
    })
})

