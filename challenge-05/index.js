/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const arr = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

const funcfun = (arr) => {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(funcfun(arr[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

const funfun = (arr, num) => {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

const ar = ['String', 1.3, {pronto: true}, () => {}, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(funfun(ar, 0))
console.log(funfun(ar, 1))
console.log(funfun(ar, 2))
console.log(funfun(ar, 3))
console.log(funfun(ar, 4))

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


const book = (bookName) => {
    const obj = {
        'Geração de valor': {
            quantidadePaginas: 400,
            autor: 'Flávio Augusto da Silva',
            editora: 'Sextante'
        },
        'Geração de valorr': {
            quantidadePaginas: 400,
            autor: 'Flávio Augusto da Silva',
            editora: 'Sextante'
        },
        'Geração de valorrr': {
            quantidadePaginas: 400,
            autor: 'Flávio Augusto da Silva',
            editora: 'Sextante'
        },
    };

    return !!bookName ? obj[bookName] : obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

const book1 = 'Geração de valor';
const book2 = 'Geração de valorr';
const book3 = 'Geração de valorrr';

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro ' + book1 + ' tem ' + book(book1).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro' + book1 + ' é ' + book(book1).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + book1 + ' foi publicado pela editora ' + book(book1).editora + '.');