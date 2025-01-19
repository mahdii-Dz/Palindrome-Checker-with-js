let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');

btn.onclick = function(){
    let revtext = txt.value.trim();
    let revtext2 = revtext.split('').reverse().join('');
    if(revtext === ""){
        return;
    }
    if(revtext.toLowerCase() == revtext2.toLowerCase()){
        box1.classList.remove('hide');
        box2.classList.add('hide');
    }
    else{
        box2.classList.remove('hide');
        box1.classList.add('hide');
    }
    txt.value = "";
}

