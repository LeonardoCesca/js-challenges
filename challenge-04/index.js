/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

const isTruthy = (arg) => {
    return !!arg;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(null);
isTruthy(false);
isTruthy();
isTruthy(0);
isTruthy(undefined);
isTruthy("");
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy({});
isTruthy([]);
isTruthy([1,2,3]);
isTruthy({nome: 'Leonardo'});
isTruthy(2);
isTruthy(true);
isTruthy("Leo");
isTruthy(() => {});
isTruthy(2.22);
isTruthy((20 + 1)* 2);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    placa: 'Ula-2340',
    ano: 2018,
    cor: 'Vermelho',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

const mudaCor = (novaCor) => {
    return carro.cor = novaCor;
}


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

const obterCor = () => {
    return carro.cor;
}


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

const obterModelo = () => {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

const obterMarca = () => {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

const obterMarcaModelo = () => {
    return `Esse carro é um ${carro.marca} ${carro.modelo}`;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

const addPessoas = (nPessoas) => {

    const nVagas = carro.assentos - carro.quantidadePessoas;
    const pluSing = nVagas === 1 ? ['cabe', 'pessoa'] : ['cabem', 'pessoas'];

    if(carro.quantidadePessoas === carro.assentos && nPessoas > 0){
        return 'O carro já está lotado!';
    }else if(nPessoas > nVagas){
        return 'Só ' + pluSing[0] + ' mais ' + nVagas + ' ' + pluSing[1] + '!';
    }

    if(nPessoas !== undefined){
        carro.quantidadePessoas += nPessoas;
    }

    return 'Já temos ' + carro.quantidadePessoas + ' pessoa(s) no carro!'
};


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/

obterCor();


// Mude a cor do carro para vermelho.

mudaCor('branco')

// E agora, qual a cor do carro

obterCor();

// Mude a cor do carro para verde musgo.

mudaCor('verde musgo');


// E agora, qual a cor do carro

obterCor();

// Qual a marca e modelo do carro

obterMarcaModelo();

// Adicione 2 pessoas no carro.

addPessoas(2);

// Adicione mais 4 pessoas no carro.

addPessoas(4);

// Faça o carro encher.

addPessoas(3);

// Tire 4 pessoas do carro.

addPessoas(-4);

// Adicione 10 pessoas no carro.

addPessoas(10);

// Quantas pessoas temos no carro

addPessoas();