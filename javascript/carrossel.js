let radio = document.querySelector('.manual_but');
let cont = 1;
console.log(radio);

document.getElementById('botao1').checked = true;

setInterval(() =>{
    proximaImg()
},4000);

function proximaImg(){
    cont++;
    let anterior;
    anterior = cont-1;

    if (cont>3) {
        cont = 1;
    }
    
    document.getElementById('botao'+anterior).checked = false;
    document.getElementById('botao'+cont).checked = true;
}