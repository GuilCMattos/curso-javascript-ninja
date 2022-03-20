/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = 'Paulistão'; 
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Santos', 'Corinthias', 'Palmeiras', 'São Paulo', 'Ponte Preta'] 

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(position) {
  switch(position) {
    case 0:
    console.log(`O time que está em ${position+1}º lugar é o ${teams[0]}`)
               break;
    case 1:
     console.log(`O time que está em ${position+1}º lugar é o ${teams[1]}`)
      break;
      
    case 2: 
      console.log(`O time que está em ${position+1}º lugar é o ${teams[2]}`)
      break;
      
    case 3: 
      console.log(`O time que está em ${position+1}º lugar é o ${teams[3]}`)
      break;
      
    case 4: 
      console.log(`O time que está em ${position+1}º lugar é o ${teams[4]}`)
      break;
      
  default:
    console.log("Não temos a informação do time que está nessa posição.");
                 
                 }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(0) // O time que está em 1º lugar é o Santos
showTeamPosition(1) // O time que está em 2º lugar é o Corinthias
showTeamPosition(2) // O time que está em 3º lugar é o Palmeiras
showTeamPosition(3) // O time que está em 4º lugar é o São Paulo
showTeamPosition(5) // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var vinte = 20
while (vinte <= 30) {
console.log(vinte)
vinte++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(nameColor) {
  var hexaColor = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#A020F0'] // red, blue, green, yellow, purple
switch(nameColor) {

  case 'red':
    console.log(`O hexadecimal para a cor ${nameColor} é ${hexaColor[0]}. `)
    break;
    
    case 'blue':
    console.log(`O hexadecimal para a cor ${nameColor} é ${hexaColor[1]}. `)
    break;
    
    case 'green':
    console.log(`O hexadecimal para a cor ${nameColor} é ${hexaColor[2]}. `)
    break;
    
    case 'yellow':
    console.log(`O hexadecimal para a cor ${nameColor} é ${hexaColor[3]}. `)
    break;
    
    case 'purple':
    console.log(`O hexadecimal para a cor ${nameColor} é ${hexaColor[4]}. `)
    break;
    
  default:
    console.log(`Não temos o equivalente hexadecimal para ${nameColor}.`)

}

}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red') // O hexadecimal para a cor red é #FF0000. 
convertToHex('blue') // O hexadecimal para a cor blue é #0000FF. 
convertToHex('yellow') // O hexadecimal para a cor yellow é #FFFF00. 
convertToHex('purple') // O hexadecimal para a cor purple é #A020F0. 
convertToHex('green') // O hexadecimal para a cor green é #00FF00. 
convertToHex('black') // Não temos o equivalente hexadecimal para black.
convertToHex('white') // Não temos o equivalente hexadecimal para white.
convertToHex('royalBlue') // Não temos o equivalente hexadecimal para royalBlue.
