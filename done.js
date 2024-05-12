document.getElementById("all").onclick=function(){
    location.href="tasker.html";
}
document.getElementById("notdone").onclick=function(){
    location.href="notdone.html";
}
var logout=document.getElementById("logout");
logout.onclick=function(){
    location.href="index.html";
}
// lists
var settings=document.getElementById("settings");
var list=document.getElementById("list");

list.style.visibility="hidden";
settings.style.position="absolute";
settings.style.top="300px";

var catogries=document.getElementById("catogries");
catogries.onclick=function(){
    list.style.visibility="visible";
    catogries.style.visibility="hidden";
    settings.style.position="absolute";
    settings.style.top="450px";
    list.style.position="absolute";
    list.style.top="250px";
}

var lists=document.getElementById("p");
lists.onclick=function(){
    list.style.visibility="hidden";
    catogries.style.visibility="visible";
    settings.style.position="absolute";
    settings.style.top="300px";
}
// lists over

var transferedItem = localStorage.getItem("transfer");
document.getElementById("target1").innerHTML = transferedItem;