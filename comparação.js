//Comparação  não-Boleano
// Falsy é basicamente todos valores que são undefined, null, 0, false, "" ou NaN(Not a number)

//Truth, são valores que são true's

let corPersonaliza = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonaliza || corPadrao;

console.log(corPerfil)