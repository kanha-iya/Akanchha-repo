let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let str = '';

buttonsArray.forEach(btn => {
    
    btn.addEventListener('click',(e) => {

        if(e.target.innerHTML=='DEL'){
            str = str.substring(0, str.length-1);
            display.value = str;
        }
        else if(e.target.innerHTML=='C'){
            str = '';
            display.value = str;
        }

        else if(e.target.innerHTML=='='){
            str = eval(str);
            display.value = str;
        }

        else{
            str += e.target.innerHTML;
            display.value = str;
        }
        
    });
});