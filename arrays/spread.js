function Linha(nome='▬'){
    console.log('▬▬▬▬▬▬▬▬▬▬▬' +nome.toLocaleUpperCase()+'▬▬▬▬▬▬▬▬▬▬▬▬')
};

Linha('Spread')
const primeiro = [1,2,3];
const segundo = [4,5,6];

// const combinada = primeiro.concat(segundo);
const combinado = [...primeiro,'a',...segundo,'#']
console.log(combinado)

const clonado = [...combinado];
console.log(clonado)
// spread

