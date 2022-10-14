
                                //primeiro exercício 
function clicar (){
    let valorDaCompra =  Number(prompt("Digite o valor em dinheiro aqui!"));
    let valorCompra = valorDaCompra;
    let valorDoLitro = 6.80;
    let litros = valorDaCompra / valorDoLitro ;
    alert(`O cliente pagou R$: ${valorCompra.toFixed(2)}
    e abasteceu "${litros.toFixed(2)}" litros de gasolina`);
}
                                //Segundo exercício           
function clicar2(){
    let c = parseFloat(prompt("Digite o valor em celsius !"));
    let f = (9 * c + 160) / 5 ;
    alert(`O valor de "${c}º" celsius em Fahrenheit é "${f}°"`);
}
                                //terceiro exercício                                
function clicar3(){
    let fa = parseFloat(prompt("Digite o valor em Fahrenheit"));
    let ce =  (((fa - 32) * 5) / 9); 
    alert(`O valor ${fa} em Fahrenheit é ${ce.toFixed(2)}`);  
}
                                //quarto exercício
function clicar4(){
    let comprimento = parseFloat(prompt("Digite o comprimento."));
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a largura"));
    let  volume = comprimento*largura*altura;
    alert(`Área da caixa é: ${volume} m²`);
}
                                //quinto exercício
function clicar5(){
    let numero = parseInt(prompt("digite um numero"));
    let resultado = numero * numero;
    alert(`O valor de ${numero} ao quadrado é ${resultado}`)
}
                                //sexto exercício
function clicar6(){
    alert("digite 5 numeros para tirar a média!")
    let numero1 = parseFloat(prompt("digite o 1° numero!"));
    let numero2 = parseFloat(prompt("digite o 2° numero!"));
    let numero3 = parseFloat(prompt("digite o 3° numero!"));
    let numero4 = parseFloat(prompt("digite o 4° numero!"));
    let numero5 = parseFloat(prompt("digite o 5° numero!"));
    let res = (numero1 + numero2 +  numero3 +  numero4 +  numero5) / 5 ;
    let somando_6 = numero1 + numero1 + numero1 + numero1 + numero1 
    alert(`a média dos valores é: ${res}`);
    alert(`total dos valores é : ${somando_6}`);
}
                                //setimo exercício
 function clicar7(){
    let num1 = parseInt(prompt("Digite um numero !"));
    let num2 = parseInt(prompt("Digite outro Numero !"));
    let resul = num1 % num2;

        if(resul != 0 && resul != null){
        alert(`O resto da divisão de ${num1} por ${num2} é : ${resul}`);
        }else{
        alert("Não teve resto!")
        }
}
                                //oitavo exercício
function clicar8(){
    let quantidadeLetras = prompt("Digite uma Frase pra contarmos as letras");
    let quantidade = quantidadeLetras.length;
    alert(`A quantidade é de : ${quantidade} letras!`);
}
                                //nono exercício
function clicar9(){
    let texto =(prompt("Digite um texto"))
    alert(`a primeira letra é "${texto.charAt().toUpperCase()}" e a ultima é "${texto.slice(-1).toLocaleLowerCase()}"`);
}
                                //Dessímo exercício                     
function clicar10(){
    let nome = prompt("Digite seu nome!")
    let sobrenome = prompt("Digite o sobrenome!");
    let idade = prompt("Digite sua idade!");
    let setor = prompt("Digite o seu setor !");
    alert(`Nome: ${nome.charAt().toUpperCase()}${nome.slice(1)} ${sobrenome.charAt().toUpperCase()}${sobrenome.slice(1)} 
    Idade : ${idade}
    Setor : ${setor.charAt().toUpperCase()}${setor.slice(1)}`);
    }