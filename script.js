let inputBox=document.getElementById("inputBox")
let btns=document.querySelectorAll("button");
let clr=document.getElementById("clr");
let del=document.getElementById("del");
let result=document.getElementById("result");

const operator=['+', '-', '*', '/', '%'];
btns.forEach(btn =>{
    if(btn.id !== "result" && btn.id !=="del" && btn.id !=="clr"){
        btn.addEventListener("click", function(){
            let char=btn.textContent;
            let lastChar=inputBox.value.slice(-1); 

            if(inputBox.value === "error" || inputBox.value==="Infinity"){
                inputBox.value="";
            }

            if(inputBox.value === "error" || inputBox.value === "Infinity"){
                if(operator.includes(char)){
                    return;
                }
                 inputBox.value = "";
                }
               if(inputBox.value === "" && (char=== "*" || char==="/" || char==="%")){
                    return;
            }
            if(operator.includes(btn.textContent) && operator.includes(lastChar)){
                inputBox.value=inputBox.value.slice(0, -1) + char;
                return;
            }


            if(char === "."){
                let lastOpIndex = -1;
                operator.forEach(op => {
                    let idx = inputBox.value.lastIndexOf(op);
                    if(idx > lastOpIndex) lastOpIndex = idx;
                });
                let lastNumber = inputBox.value.slice(lastOpIndex + 1);

                if(lastNumber.includes(".")){
                    return;
                }
                if(lastNumber === ""){ 
                    char = "0."; 
                }
            }

            inputBox.value += char;
        });
    }
});




result.addEventListener("click", function(){
    try{
        let val=eval(inputBox.value);
        if(!isFinite(val)){
            inputBox.value="Infinity";
        }
        else{
            inputBox.value=val;
        }
    }
    catch{
        inputBox.value="error";
    }
});

clr.addEventListener("click", function(){
    inputBox.value="";
});
del.addEventListener("click", function(){
    if(inputBox.value==="error" || inputBox.value==="Infinity"){
        inputBox.value="";
    }
    else{
    inputBox.value=inputBox.value.slice(0, -1);
    }
});
