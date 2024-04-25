//ini script js

let isReverse= false;
function reverse(); {
    let cToF = document.getElementById("c-to-f");
    let fToC = document.getElementById("f-to-c");

    if (isReverse) {
        console.log(isReverse);
        fToC.style.display = "block";
        cToF.style.display = "none";
    } else {
        console.log(isReverse)
        cToF.style.display = "none";
        fToC.style.display = "block";
    }
}