// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
const sum = (num1, num2) => {
    return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const receiveSum = sum(10, 1) + 5;

// Qual o valor atualizado dessa variável
console.log("O valor atualizado da variável eh: ", receiveSum);

// Declare uma nova variável, sem valor.
let variavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
const functionVariavel = () => {
    return variavel = 'O valor da variável agora é VALOR.';
}

// Invoque a função criada acima.
functionVariavel();

// Qual o retorno da função (Use comentários de bloco).

/* O valor da variável agora é VALOR. */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

const funcaoTresArg = (arg1, arg2, arg3) => {
    if (arg1 && arg2 && arg3) {
        return (arg1 * arg2 * arg3) + 2;
    } else {
        return 'Preencha todos os valores corretamente!';
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

funcaoTresArg();

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
funcaoTresArg(1,2,3);

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

const funcTresArgs = (arg1, arg2, arg3) => {
    if (arg1 && arg2 && arg3) {
        return (arg1 + arg2) / arg3;
    } else if (!arg2 && !arg3) {
        return arg1;
    } else if (!arg3) {
        return arg1 + arg2;
    } else if (!arg1 && !arg2 && !arg3) {
        return false;
    }

    return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
funcTresArgs();
funcTresArgs(8);
funcTresArgs(8,2);
funcTresArgs(8, 2, 5);