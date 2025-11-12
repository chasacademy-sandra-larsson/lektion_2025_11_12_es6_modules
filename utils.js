// ES6-moduler låter dig dela upp JavaScript-kod i filer som exporterar 
// funktioner, variabler eller klasser med export, och importerar dem 
// i andra filer med import. Det gör koden lättare att organisera, 
// återanvända och optimera

 export const PI = 3.14159265359;

 export function caculateAreaCircle(PI, r) {
    // PI * r * r
    return PI * r * r;
}

// En fil kan ha en default, vilket betyder att man kan importera den med vilket namn som helst
export default function add(a,b) {
    return a + b;
}

// Istället för innan varje funktion kan man också skriva det längst ner med samlad {}
// export {PI, caculateAreaCircle};