document.getElementById("all").onclick=function(){
    location.href="tasker.html";
}
document.getElementById("done").onclick=function(){
    location.href="done.html";
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

var logout=document.getElementById("logout");
logout.onclick=function(){
    location.href="index.html";
}

var onone=document.getElementById("onone");
var ontwo=document.getElementById("ontwo");
var onthree=document.getElementById("onthree");

var exone=document.getElementById("exone");
var extwo=document.getElementById("extwo");
var exthree=document.getElementById("exthree");


onone.style.display="none";
ontwo.style.display="none";
onthree.style.display="none";

document.getElementById("radioone").onclick=function(){
    if(onone.style.display==="none"){
        onone.style.display="block";
        exone.style.textDecoration="line-through";
        exone.style.color="rgb(183, 182, 182)";

        
        var transfer=document.getElementById("task1");
        localStorage.setItem("transfer", JSON.stringify(transfer.outerHTML));
        transfer.remove();
    }
    else if(onone.style.display==="block"){
        onone.style.display="none";
        exone.style.textDecoration="none";
        exone.style.color="black";
    }
}

document.getElementById("radiotwo").onclick=function(){
    if(ontwo.style.display==="none"){
        ontwo.style.display="block";
        extwo.style.textDecoration="line-through";
        extwo.style.color="rgb(183, 182, 182)";
    }
    else if(ontwo.style.display==="block"){
        ontwo.style.display="none";
        extwo.style.textDecoration="none";
        extwo.style.color="black";
    }
}

document.getElementById("radiothree").onclick=function(){
    if(onthree.style.display==="none"){
        onthree.style.display="block";
        exthree.style.textDecoration="line-through";
        exthree.style.color="rgb(183, 182, 182)";
    }
    else if(onthree.style.display==="block"){
        onthree.style.display="none";
        exthree.style.textDecoration="none";
        exthree.style.color="black";
    }
}

// delete popup1
var cancelbut1=document.getElementById("cancelbut1");
var deletebut1=document.getElementById("deletebut1");
var del1=document.getElementById("trash1");

del1.onclick=function(){
    document.getElementById("popup1").style.display="block";
}

cancelbut1.onclick=function(){
    document.getElementById("popup1").style.display="none";
}

deletebut1.onclick=function(){
    document.getElementById("task1").remove();
}
// delete popup1

// delete popup2
var cancelbut2=document.getElementById("cancelbut2");
var deletebut2=document.getElementById("deletebut2");
var del2=document.getElementById("trash2");

del2.onclick=function(){
    document.getElementById("popup2").style.display="block";
}

cancelbut2.onclick=function(){
    document.getElementById("popup2").style.display="none";
}

deletebut2.onclick=function(){
    document.getElementById("task2").remove();
}
// delete popup2

// delete popup3
var cancelbut3=document.getElementById("cancelbut3");
var deletebut3=document.getElementById("deletebut3");
var del3=document.getElementById("trash3");

del3.onclick=function(){
    document.getElementById("popup3").style.display="block";
}

cancelbut3.onclick=function(){
    document.getElementById("popup3").style.display="none";
}

deletebut3.onclick=function(){
    document.getElementById("task3").remove();
}
// delete popup3

