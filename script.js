let hr=document.querySelector("#hours");
let min=document.querySelector("#minits");
let sec=document.querySelector("#seconds");
setInterval(()=>{
    let currenttime=new Date();
    let h=currenttime.getHours();
    let m=currenttime.getMinutes();
    let s=currenttime.getSeconds();
    let hou=30*h+m/2;
    let mini=6*m;
    let se=6*s;
    hr.style.transform=`rotate(${hou}deg)`;
    min.style.transform=`rotate(${mini}deg)`;
    sec.style.transform=`rotate(${se}deg)`;
},1000);