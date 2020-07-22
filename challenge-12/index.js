/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

(function () {

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

const person = {
    name: 'Leo',
    lastName: 'Cesca',
    age: 22,
}

console.log( 'Propriedades de "person":');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/

let books = []; 

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push ({name: 'A bela e a fera', pages: 100}, {name: 'lost', pages: 300}, {name: 'blues', pages: 200}, );

/*
Mostre no console todos os livros.
*/
console.log(books);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/

console.log(books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

books = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
// ?
console.log(books);

/*
Converta os livros novamente para objeto.
*/
// ?
books = JSON.parse(books)
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

for (key in books) {
    if (books.hasOwnProperty(key)) {
        console.log(books[key]);
    }
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?

let myName = ['L', 'E', 'O'];

console.log( '\nMeu nome é: ' + myName.join(''));

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' + myName.reverse().join(''));

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética: ' + myName.sort());
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?


})();