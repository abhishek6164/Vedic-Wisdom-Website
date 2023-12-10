function ReadMoreLess() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var iMoreLess = document.getElementById("iMoreLess");
    var lblText = document.getElementById("lblText");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        iMoreLess.className = "fa fa-chevron-circle-right";
        lblText.innerHTML = "";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        iMoreLess.className = "fa fa-chevron-circle-down";
        lblText.innerHTML = "";
        moreText.style.display = "inline";
    }
}


//  second 
function ReadMoreLess2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var iMoreLess = document.getElementById("iMoreLess2");
    var lblText = document.getElementById("lblText2");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        iMoreLess.className = "fa fa-chevron-circle-right";
        lblText.innerHTML = "";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        iMoreLess.className = "fa fa-chevron-circle-down";
        lblText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

// third 

function ReadMoreLess3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var iMoreLess = document.getElementById("iMoreLess3");
    var lblText = document.getElementById("lblText3");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        iMoreLess.className = "fa fa-chevron-circle-right";
        lblText.innerHTML = "";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        iMoreLess.className = "fa fa-chevron-circle-down";
        lblText.innerHTML = "";
        moreText.style.display = "inline";
    }
}
  