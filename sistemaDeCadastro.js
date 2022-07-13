var mensagemInicial = prompt("Ola! você possui Cadastro? Digite (s) ou (n)");
console.log (mensagemInicial);
var temCadastro = ("s");
var naoTemCadastro = ("n");

if (mensagemInicial === naoTemCadastro) {
    alert("vamos realizar o cadastro!")
}
var cadastrar = function (email, senha) {
    var email = prompt("Digite um email");
    console.log(email);
    var senha = prompt("Digite uma senha");
    console.log(senha);

    alert("Cadastro feito com sucesso! Volte para a tela de Login novamente e digite seu email e senha!")
}

if (mensagemInicial === temCadastro) {
    var emailCadastrado = prompt("Digite o email Cadastrado:");
    var senhaCadastrada = prompt("Digite a senha Cadastrada")

    var tentativas = 1;
    if (emailCadastrado === email && senhaCadastrada == senha) {
        alert("Seja Bem-Vindo")
    } else {
        while (tentativas <= 3) {
            alert("Email ou Senha incorretos!");
            var emailCadastrado = prompt("Digite o email Cadastrado:");
            var senhaCadastrada = prompt("Digite a senha Cadastrada")
            tentativas++;

            if (tentativas === 3){
                alert("Email ou Senha incorretos");
                alert ("Desculpe, o sistema bloqueou sua conta temporariamente... ");
                break;
            }
        }
    }
}

var dataEvento = prompt("Vamos cadastrar o seu evento? Informe a data pretendida (00/00/0000)");
console.log (dataEvento);

var dataAtual;

if (dataEvento > dataAtual){
    alert(` ${dataEvento} esta disponivel! Vamos continuar..."`);
} else {
    alert ("Data invalida!");
}


var quantidadeParticipantes = prompt ("Quantos Pessoas participarão do evento? (maximo permitido: 100)");
console.log (quantidadeParticipantes);

var idadeDosParticipantes = prompt ("Qual a menor idade dos participantes?");
console.log (idadeDosParticipantes);

    if (quantidadeParticipantes.length < 100 && idadeDoParticipante >= 18){
        alert (`Evento com ${quantidadeParticipantes} pessoas na data: ${dataEvento}cadastrado com sucesso!`)
    } else  {
        alert ("Limite de participantes Excedido! Cadastro não permitido!")
    }












