/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
 
const summ = calculateSum = (num1, num2) => {
    return num1 + num2;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
const vlr1 = 10;
const vlr2 = 5;

console.log(`A soma de ${vlr1} e ${vlr2} é igual a ${summ(vlr1, vlr2)}`);

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/

console.log(`O nome da função que faz a soma é ${summ.name}`);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/

const showName = () => {
    return 'Leonardo';
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/

const varShowName = showName; 

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/

console.log(`A função ${varShowName.name} retorna ${showName()}`);

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

const calculator = (operation) => {
    return (num1, num2) => {
        let response;

        switch(operation) {
            case '+':
                res = num1 + num2;
            break;
            case '-':
                res = num1 - num2;
            break;
            case '/':
                res = num1 / num2;
            break;
            case '*':
                res = num1 * num2;
            break;
            case '%':
                res = num1 % num2;
            break;
            default:
                return 'Operação inválida';
        }

        return `Resultado da operação: ${num1} ${operation} ${num2} = ${res}`;
    }
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/

const sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(vlr1, vlr2));

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/

const substraction = calculator("-");
const multiplication = calculator('*');
const division = calculator('/');
const mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/

console.log(substraction(vlr1, vlr2));
console.log(multiplication(vlr1, vlr2));
console.log(division(vlr1, vlr2));
console.log(mod(vlr1, vlr2));