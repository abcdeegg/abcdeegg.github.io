let bx=document.getElementById('basic_x');
let btn_1=document.getElementById('btn_1');

let bxn=0;
btn_1.onclick=function(){
    bxn+=1;
    bx.textContent=bxn;
    localStorage.setItem("bxn",bxn);
}