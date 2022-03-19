/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['Guilherme', 24, 'Javascript', true, 15]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function paramArray(array) {
return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
paramArray(array)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function maluca(array, numero) {
return array[numero];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var naruto = ['sasuke', 18, 'Saukura', false, 24]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
maluca(naruto,0) // "sasuke"
maluca(naruto,1) // 18
maluca(naruto,2) // Saukura
maluca(naruto,3) // false
maluca(naruto,4) //  24

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(param) {
var books = {
   'Harry Potter': {qtdPaginas: 300, autor:'J. K. Rowling', editora: 'Rocco' },
   'Clean Code': {qtdPaginas: 431, autor:'Robert Cecil Martin', editora: 'Alta Books'},
   'Seja Foda': {qtdPaginas: 192, autor:'Caio Carneiro', editora: 'Buzz'}
}
 if(param === undefined) {return books}
  
  return books[param]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro Harry Potter tem ' + book('Harry Potter').qtdPaginas +' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Harry Potter é ' + book('Harry Potter').autor +'.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Harry Potter foi publicado pela editora ' + book('Harry Potter').editora +'.')
