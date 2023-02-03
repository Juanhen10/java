//If e Else

//Se a hora estiver entre 06:00 a´te 12:00: Bom dia
//Se estiver entre 12:00 até 18:00: Boa tarde!
// Caso contrario: Boa noite!
let hora = 18;



if (hora > 6 && hora < 12) {
    //codigo a ser executado
    console.log("bom dia")   
}
else if (hora > 12 && hora < 18) {
    // Codigo a ser executado
    console.log('Boa tarde')
}
else {
    //codigo a ser executado
    console.log('Boa noite')
}

//switch .. case

let permissao; //cumum, gerente, diretor
permissao = '';
switch (permissao) {
    case 'comum':
    console.log('Usuario comum');
    break;  
    
    case 'gerente':
    console.log('Usuario gerente');
    break;

    case 'diretor':
    console.log('Usuario diretor');
    break;

    default:
    console.log('usuario não reconhecido!');
}
