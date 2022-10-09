 alert("exercício resolvido")

let nomeCliente = prompt("Digite o nome do cliente");
let qtdPaes = parseInt(prompt("Quantas unidades de pães ?"));

let valorCompra = parseFloat(qtdPaes * 0.75);

alert(`Valor da compra é: ${valorCompra.toFixed(2)}`);

let data = Date.now();
let hoje = new Date(data).toUTCString();

alert(
`${nomeCliente} - Valor da compra: ${valorCompra} - Produto: Pães - Quantidade: ${qtdPaes} - Data: ${hoje} `
);

                                    //primeiro exercício 

alert("Primeiro exercício")
let valorLitro = 6.80;
let valorDaCompra = parseFloat(prompt("Quanto deseja abastercer em dinheiro ?"));
let litros = valorDaCompra / valorLitro
alert(`o cliente abasteceu ${litros.toFixed(2)} de gasolina .`);


                                    // Segundo exercício 

            
alert("este é o segundo exercício")  
let c = parseFloat(prompt("Digite o valor em celsius !"));
let f = (9 * c + 160) / 5 ;
alert(`o valor em graus celsius é de ${c} e Fahrenheit é de: ${parseFloat(f)}`); 


                                  //terceiro exercício 
alert("este é o terceiro exercício")                                 
let fa = parseFloat(prompt("Digite o valor em Fahrenheit"));
let ce =  ((f - 32) * 5) / 9 ; 
alert(`O valor ${fa} em Celsius é ${ce}` );  


                                //quarto exercício
alert("este é o quarto exercício")
let comprimento = parseFloat(prompt("Digite o comprimento."));
let largura = parseFloat(prompt("Digite a largura"));
let altura = parseFloat(prompt("Digite a largura"));
let  volume = comprimento*largura*altura;
alert(`O valor do volume é : ${volume}`)

                                //quinto exercício

alert("este é o quinto exercício")
let numero = parseInt(prompt("digite um numero"));
let resultado = numero * numero;
alert(`O valor de ${numero} ao quadrado é ${resultado}`)


                                 // sexto exercício

alert("Este é o sexto exercício")
alert("digite 5 numeros")
let numero1 = parseFloat(prompt("digite um numero"));
let numero2 = parseFloat(prompt("digite um numero"));
let numero3 = parseFloat(prompt("digite um numero"));
let numero4 = parseFloat(prompt("digite um numero"));
let numero5 = parseFloat(prompt("digite um numero"));
let res = (numero1 + numero2 +  numero3 +  numero4 +  numero5) / 5 ;
alert(`a média dos valores é: ${res}`)


                                  // setimo exercício


 alert("este é o sétimo exercício")
 let num1 = parseInt(prompt("Digite um numero !"));
 let num2 = parseInt(prompt("Digite outro Numero !"));
 let resul = numero1 % numero2;
 alert(`O resto da divisão de ${num1} por ${num2} é : ${resul}`);



                                 // oitavo  exercício


alert("este é o oitavo exercício")
let quantidadeLetras = prompt("Digite uma Frase pra contarmos as letras");
let quantidade = quantidadeLetras.length;
alert(`a quantidade de letras da frase é : ${quantidade}`);


                               // nono  exercício


alert("este é o nono exercício")
let texto =(prompt("Digite um texto"))
alert(`a primeira letra é "${texto.charAt().toUpperCase()}" e a ultima é "${texto.slice(-1).toLocaleLowerCase()}"`);



                              // Dessímo  exercício

                        
alert("este é o ultimo exercício")
let nome = prompt("Digite seu nome!")
let sobrenome = prompt("Digite o sobrenome!");
let idade = prompt("Digite sua idade!");
let setor = prompt("Digite o seu setor !");
alert(`Nome: ${nome.charAt().toUpperCase()}${nome.slice(1)} ${sobrenome.charAt().toUpperCase()}${sobrenome.slice(1)} 
Idade : ${idade}
Setor : ${setor.charAt().toUpperCase()}${setor.slice(1)}`);