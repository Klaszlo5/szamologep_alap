window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.getElementsByClassName(elem);
}
function Q(elem) {
    return document.querySelectorAll(elem);
}
function init() {
    for (let index = 0; index < 10; index++) {
        var nums = document.querySelectorAll(".szamok ")[0];
        nums.innerHTML += "<button id='"+index+"'>"+index+"</button>";
    }
    for (let index = 0; index < 10; index++) {
        ID(index).addEventListener("click", szamol);
    }
    muvJel();
}

function clic(elem) {
    elem.addEventListener("click", clic);
}
function reset() {
    $("kijelzo")[0].innerHTML="";
}
function muvJel() {
    ID("osszeadas").addEventListener("click", muveletiJel);
    ID("kivonas").addEventListener("click", muveletiJel);
    ID("szorzas").addEventListener("click", muveletiJel);
    ID("osztas").addEventListener("click", muveletiJel);
    ID("egyenlo").addEventListener("click", muveletiJel);
    ID("torles").addEventListener("click", reset)
}
function muveletiJel(event){ 
    if (event.target.innerHTML=="+") {
        $("kijelzo")[0].innerHTML+="+";
    }else if(event.target.innerHTML=="-"){
        $("kijelzo")[0].innerHTML+="-";
    }else if(event.target.innerHTML=="*"){
        $("kijelzo")[0].innerHTML+="*";
    }else if(event.target.innerHTML=="%"){
        $("kijelzo")[0].innerHTML+="%";
    }else if(event.target.innerHTML=="="){
        $("kijelzo")[0].innerHTML+="=";
    }else if(event.target.innerHTML=="C"){
        $("kijelzo")[0].innerHTML+="C";
    }
}
function szamol(event){
    if (event.target.innerHTML==0) {
                $("kijelzo")[0].innerHTML+="0";
    }else if(event.target.innerHTML==1){
                $("kijelzo")[0].innerHTML+="1";
    }else if(event.target.innerHTML==2){
                $("kijelzo")[0].innerHTML+="2";
    }else if(event.target.innerHTML==3){
                $("kijelzo")[0].innerHTML+="3";
    }else if(event.target.innerHTML==4){
                $("kijelzo")[0].innerHTML+="4";
    }else if(event.target.innerHTML==5){
                $("kijelzo")[0].innerHTML+="5";
    }else if(event.target.innerHTML==6){
                $("kijelzo")[0].innerHTML+="6";
    }else if(event.target.innerHTML==7){
                $("kijelzo")[0].innerHTML+="7";
    }else if(event.target.innerHTML==8){
                $("kijelzo")[0].innerHTML+="8";
    }else if(event.target.innerHTML==9){
                $("kijelzo")[0].innerHTML+="9";
    }
}
