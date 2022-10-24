console.clear()

var copyButton=document.getElementById("coppyB");
var copyValue=document.getElementById("copy");
var para1= document.getElementById("para1");
copyButton.addEventListener('click',function(){

    navigator.clipboard.writeText(copyValue.value);
    para1.classList.add("style");
    para1.innerHTML=" text is succesfully copied";
    setTimeout(() => {
       
        para1.innerHTML="";
        para1.classList.remove("style");
    }, 1000);
})




var cutButton=document.getElementById("cutB");
var cutValue=document.getElementById("cut");
var para2= document.getElementById("para2");
cutButton.addEventListener('click',function(){

    navigator.clipboard.writeText(cutValue.value);
    cutValue.value=''
    para2.classList.add("style");
    para2.innerHTML=" text is succesfully cut";
    setTimeout(() => {
       
        para2.innerHTML="";
        para2.classList.remove("style");
    }, 1000);
})



var pasteButton=document.getElementById("pasteB");
var pasteV=document.getElementById("paste");
var para3= document.getElementById("para3");
pasteButton.addEventListener('click',function(){
          pasteV.value='';
    navigator.clipboard.readText()
    .then(function(text){
        pasteV.value=text;
    })
    
    para3.classList.add("style");
    para3.innerHTML=" text is succesfully pasted";
    setTimeout(() => {
       
        para3.innerHTML="";
        para3.classList.remove("style");
    }, 1000);
})
