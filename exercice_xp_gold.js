/********Exercice 1 : Couleur Préférée******* */
/*****
 * Écrivez un code Javascript simple qui rejoindra tous les éléments du tableau ci-dessus,
 *  et console.log le résultat.
 */

let sentence = ["my", "favorite", "color", "is", "blue"];
let TableAndString = sentence.toString()

console.log(TableAndString)

/*****************Exercice 2 : Mixup************ */
/****
 * Créez 2 variables. Les valeurs doivent être des chaînes.
 * Découpez et échangez les 2 premiers caractères des deux chaînes de la partie 
.*Créez une troisième variable où la valeur est la concaténation des deux chaînes de la partie 1 (séparées par un espace).
 * Enfin console.log la nouvelle chaîne concaténée.
 */

let str1 = "coulibaly";
let str2 = "mouhamed";

let strCut1 = str1.split("", 2)
let joindre1 = strCut1.join("")
let restString1 = str1.slice(2)

let strCut2 = str2.split("", 2)
let joindre2 = strCut2.join("")
let restString2 = str2.slice(2)

console.log(joindre2 + restString1)
console.log(joindre1 + restString2)

let str3 = joindre2 + restString1 + " " + joindre1 + restString2

console.log("thirdWord should be equal to " + str3)


/*********exercice 3 ********* */

/**
Des Instructions
Faire une calculatrice. Suivez les instructions:

Demander à l'utilisateur le premier numéro.
Stockez le premier nombre dans une variable appelée num1.
Astuce : console.log le type de la variable num1. Que faire pour le convertir en nombre ?
Demander à l'utilisateur le deuxième numéro.
Stockez le deuxième nombre dans une variable appelée num2.
Créez une alerte dont la valeur est la SOMME de num1et num2.
 */


let num1 = prompt("Entrez le premier numero")
console.log(typeof (num1))

let num2 = prompt("Entrez le premier numero")
console.log(typeof (num2))

let num1Parse = Number(num1)
let num2Parse = Number(num2)
let sumNum = num1Parse + num2Parse

alert("la SOMME de num1 =" + num1 + " et de num2 =" + num2 + " est : " + sumNum)


/******
 * BONUS : Réalisez un programme qui peut soustraire, multiplier et aussi diviser !
 */


/***
 * soustraire
 */

let num1ParseForSubtract = Number(num1)
let num2ParseForSubtract = Number(num2)
let sumNumForSubtract = num1Parse - num2Parse

alert("la soustraction de num1 =" + num1 + " et de num2 =" + num2 + " est : " + sumNumForSubtract)

/***
 * multiplier
 */

let num1ParseForMultiply = Number(num1)
let num2ParseForMultiply = Number(num2)
let sumNumForMultiply = num1Parse * num2Parse

alert("la multiplication de num1 =" + num1 + " et de num2 =" + num2 + " est : " + sumNumForMultiply)

/***
 * diviser
 */


let num1ParseForDivide = Number(num1)
let num2ParseForDivide = Number(num2)
let sumNumForDivide = num1Parse / num2Parse

alert("la division de num1 =" + num1 + " et de num2 =" + num2 + " est : " + sumNumForDivide)