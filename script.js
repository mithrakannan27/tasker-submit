var myinput = document.getElementById("myinput").value;
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var message=document.getElementById("message");

// myinput.onkeyup=function(){
//     var lowercase=[q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m];
//     if(myinput.value.match(lowercase)){
//         letter.classList.remove("invalid");
//         letter.classList.add("valid");
//     }
//     else{
//         letter.classList.remove("valid");
//         letter.classList.add("invalid");
//     }
// }
// myinput.onkeyup=function(){
//     var uppercase=[Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M];
//     if(myinput.value.match(uppercase)){
//         capital.classList.remove("invalid");
//         capital.classList.add("valid");
//     }
//     else{
//         capital.classList.remove("valid");
//         capital.classList.add("invalid");
//     }
// }

// myinput.onkeyup=function(){
//     var number=[0,1,2,3,4,5,6,7,8,9];
//     if(myinput.value.match(number)){
//         number.classList.remove("invalid");
//         number.classList.add("valid");
//     }
//     else{
//         number.classList.remove("valid");
//         number.classList.add("invalid");
//     }
// }

// myinput.onkeyup=function(){
//     if(myinput.value.length >= 8){
//         length.classList.remove("invalid");
//         length.classList.add("valid");
//     }
//     else{
//         length.classList.remove("valid");
//         length.classList.add("invalid");
//     }
// }


// password validation


// function validatePassword(myinput) {
//     let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,}$/;
//     return regex.test(password);
// }

document.getElementById("signin").onclick=function(){
// if (validatePassword(myinput)) {
    location.href="tasker.html";
// } else {
//     document.getElementById("invalid").textContent="Password is not valid";
//     document.getElementById("invalid").style.color="red";
// }
}


// password validation


