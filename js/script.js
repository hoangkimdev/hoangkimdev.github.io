function openNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function closeNav(){
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
}
function openAbo() {
    var x = document.getElementById("body");
    x.className = "body abo";
}
function openEdu() {
    var x = document.getElementById("body");
    x.className = "body edu";
}
function openExp() {
    var x = document.getElementById("body");
    x.className = "body exp";
}
function openPro() {
    var x = document.getElementById("body");
    x.className = "body pro";
}
function openSki() {
    var x = document.getElementById("body");
    x.className = "body ski";
}
function openCon() {
    var x = document.getElementById("body");
    x.className = "body con";
}