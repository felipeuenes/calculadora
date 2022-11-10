


function insert(num){

    let numero = document.getElementById('display').innerHTML; 

    document.getElementById('display').innerHTML = numero + num;

}

function del(){
    document.getElementById('display').innerHTML = "";

}

function back(){
    let resultado = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    
    let resultado = document.getElementById("display").innerHTML;
    if(resultado){
        document.getElementById("display").innerHTML = eval(resultado);
    }
}