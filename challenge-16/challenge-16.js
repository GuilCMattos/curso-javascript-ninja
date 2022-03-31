(function(){
    'use strict';
  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */
  
  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log( 'As letras do seu nome:' );
  var name = 'Guilherme'
    for(var i = 0; i < name.length; i++) {
        console.log(`${name.charAt(i)} é a ${i+1}ª letra do meu nome` )
    }

  
  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log( '\nNome convertido à partir de um slug:' );
    var fullName = 'guilherme-mattos'
    function slugNormal(name) {
       
       let noTrace = name.split('-') // '['guilherme', 'mattos']
        var firstName = noTrace.shift() // 'guilherme'
        var lastName = noTrace.pop() // 'mattos'
       var newFirstName =  firstName.charAt(0).toUpperCase() + firstName.slice(1) // Guilherme
        var newLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1) // Mattos
        var fullName = newFirstName.concat(' ' + newLastName)

        return fullName
    }

    console.log(slugNormal(fullName), fullName)
  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log( '\nMeus amigos:' );
  let friendNames = ['Helo', 'Tiffany', 'Raniele', 'Malu', 'Orestes', 'Thais', 'Isabela', 'Emily', 'Vina']
  function myFriends(friendName) {
    let varFriend = friendName.reverse().join(',') // Ele reverte o array e transforma em string com ,
    let varReplace = varFriend.replace(',', ' e ').split(',').reverse().join(', ') // Aqui ele troca a primeira ',' por ' e ' e depois tira todas as vírgulas com o split e transforma em array, reverte o array pro ' e ' ficar no final e um join(', ') para transformar em string novamente com ', ' entre os arrays
    return varReplace // retorna a variavel 
    }
  
    console.log(myFriends(friendNames))
  
  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log( '\nEra "Roberto", agora é:' );
    console.log('Roberto'.split('o').join('a').replace('a', 'o'))
  
  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log( '\nParte de uma string:' );
    console.log("Fernando".substring(8,3))
  
  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
  // ?

  var myName = 'Guilherme'
  function upperToDown(name) { 
    var arrSeparado = name.split('') // Aqui ele transforma em Array separando as letras
    var upperAndLower = arrSeparado.map(function(item, indice){ // Aqui ele vai pegar o indice das letras
        if(indice % 2 === 1 ) { // Todo indice que retornar 1 ele vai deixar maiusculo
            return item.toUpperCase()
        } else { // Os que sobrarem vai voltar minusculo
          return item.toLowerCase()
        }
        
    })  

    return upperAndLower.join('') // Join para juntar tudo e virar uma string 
  }
    console.log(upperToDown(myName))
    })();
