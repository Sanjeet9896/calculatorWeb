let inputBox=document.getElementById("inputBox")
let btns=document.querySelectorAll("button");
let clr=document.getElementById("clr");
let del=document.getElementById("del");
let result=document.getElementById("result");
btns.forEach(btn =>{
    if(btn.id !== "result" && btn.id !=="del" && btn.id !=="clr"){
        btn.addEventListener("click", function(){
            inputBox.value += btn.textContent;
        });
    }
});
result.addEventListener("click", function(){
    try{
        inputBox.value=eval(inputBox.value);
    }
    catch{
        inputBox.value="error";
    }
});
clr.addEventListener("click", function(){
    inputBox.value="";
});
del.addEventListener("click", function(){
    inputBox.value=inputBox.value.slice(0, -1);
});