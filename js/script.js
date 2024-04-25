//ini script js

let isReverse= true;
function reverse()  {
    let cTof = document.getElementById("c-to-f");
    let fToc = document.getElementById("f-to-c");

    if (isReverse) {
        console.log(isReverse);
        fToc.style.display = "block";
        cTof.style.display = "none";
        isReverse = false;
    } else {
        console.log(isReverse);
        cTof.style.display = "block";
        fToc.style.display = "none";
        isReverse = true;
    }
}


