let img = document.getElementById("img");
let imgArray = [
    "poster1.png",
    "poster2.png",
    "poster3.png",
    "poster4.png",
    "poster5.png",
];
let imgIndex = 0;

function slideShow() {
    img.setAttribute("src", imgArray[imgIndex])
    imgIndex++;

    if(imgIndex >= imgArray.length) {
        imgIndex = 0;
    }
}

setInterval(slideShow, 1000);