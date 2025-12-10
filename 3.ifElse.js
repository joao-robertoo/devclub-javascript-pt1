/* 
Controlador de Fluxo 
    - IF (Se)
    - Else (Se não)

Operadores de compração
    > maior que
    < menor que
    == igual que
*/

const notaDoAluno = 7
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){
    // O QUE SERÁ EXCUTADO, SE O IF FOR VERDADEIRO
    console.log("Parabéns, você passou de ano!")
} else {
    //SE O IF FOR FALSO , ELE ENTRA AQUI
    console.log("Você foi reprovado!")
}

const senhaDoUsuario = 123456
const senhaDigitada = 123457

if(senhaDoUsuario > senhaDigitada){
    // O QUE SERÁ EXCUTADO, SE O IF FOR VERDADEIRO
    console.log("Seja-bem vindo, você está logado(a)!")
} else {
    //SE O IF FOR FALSO , ELE ENTRA AQUI
    console.log("Senha incorreta!")
}