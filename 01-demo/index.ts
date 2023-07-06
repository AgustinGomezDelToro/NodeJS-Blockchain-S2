console.log("-- Chaines de caractères ---"); // eq. printf

// Le mot clé let permet de créer une variable
// Le mot clé const une constante
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String

const str = "Hello samedi";
console.log("taille de la chaine: " + str.length); // taille de la chaine: 12
// L'opérateur + permet de fusionner des chaines de caractères
// .length permete recuperer la taille d'une chaine

// str = "test"; On ne peut pas modifier une constante.

// Il est possible d'acceder aux caractères d'une chaine grace à l'opérateur []
console.log(str[4]); // recupere le caractère à l'index 4 (commencent à 0) // o

const upper = str.toUpperCase(); // permet de mettre en maj la chaine de caractère
console.log(upper); // HELLO SAMEDI

console.log("-- Tableaux --");
// Lorsque vous voulez créer un tableau vide en TS il faut impérativement lui mettre un type
const arr1: number[] = []; // TYPE[] pour définir un tableau d'élement TYPE

// Pour ajouter à la fin un élément dans le tableau on utilise la methode push
arr1.push(56);
arr1.push(10);
console.log(arr1); // [56, 10]
arr1.push(88);
console.log(arr1); // [56, 10, 88]
console.log("Taille du tableau: " + arr1.length); // Taille du tableau: 3

for(let i = 0; i < arr1.length; i++) {
    console.log("le triple: " + arr1[i] * 3); // 168, 30, 264
}

// Tout comme les chaines de caractères il existe plein de fonctions sur les tableaux
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log("-- Les fonctions --");

/*
 Déclaration de fonction en TS
 function NOM(p1: TYPE, p2: TYPE2, ....): TYPE_RETOUR {
    // instructions
    // retour?
 }
 Une fonction qui n'a pas de retour -> doit renvoyer void OU undefined
*/

const students: string[] = ["Matteo", "Hugo", "Yanis", "Agustin"];
// faire une fonction qui retourne la taille cumulée de l'ensemble des prenom des etudiants
// votre fonction doit prendre une entré le tableau et renvoyer en sortie le resultat

function sizeStrings(arr: string[]): number {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        count += arr[i].length;
    }
    return count;
}

const size = sizeStrings(students);
console.log(size); // 22



