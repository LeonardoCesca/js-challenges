/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

(() => {

/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
// ?

function Person (name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    this.getAge = function getAge() {
        return `${this.age}`;
    }

    this.addAge = function addAge() {
        this.age += arguments[0];
        return this;
    }
}


/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
const leo = new Person('Leonardo', 'Cesca', 22);
const darcio = new Person('Darcio', 'Pereira', 33);
const bruno = new Person('Bruno', 'Barbosa', 19);

console.log( 'Novas pessoas criadas à partir de Person:' );
console.log(leo);
console.log(darcio);
console.log(bruno);
// ?

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );
console.log(leo.getFullName());
console.log(darcio.getFullName());
console.log(bruno.getFullName());
// ?

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log(`${leo.getFullName()} tem ${leo.getAge()} anos.`);
console.log(`${darcio.getFullName()} tem ${darcio.getAge()} anos.`);
console.log(`${bruno.getFullName()} tem ${bruno.getAge()} anos.`);
// ?

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );
leo.addAge(1);
darcio.addAge(2);
bruno.addAge(3);

console.log(`${leo.getFullName()} agora tem ${leo.getAge()} anos.`);
console.log(`${darcio.getFullName()} agora tem ${darcio.getAge()} anos.`);
console.log(`${bruno.getFullName()} agora tem ${bruno.getAge()} anos.`);

// ?

})();