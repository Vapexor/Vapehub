//Luodaan funktio nopanheitolle
function rollDice(n) {
    n = 5;

    //Heitetään noppien arvot ja lisätään ne taulukkoon
    for (let i = 0; i < n; i++) {
        rollResult = Math.floor(Math.random() * 6) + 1;
        rollResultsArray.push(rollResult);
    }
    //Lisätään välit mukaan taulukkoon
    return rollResultsArray.join(' ');
}
rollResultsArray = [];
function returnNums() {
    console.log('No mitäs numeroita sieltä tuli, katsotaan: ' + rollDice());
}

function max() {
    let maxValue = rollResultsArray[0];
    //Käydään taulukko läpi ja etsitään isoin arvo ja määritetään se maxValueen
    for (let i = 0; i < rollResultsArray.length; i++) {
        if (rollResultsArray[i] > maxValue) {
            maxValue = rollResultsArray[i];
        }
    }
    console.log('Suurin luku oli ' + maxValue);
}

function min() {
    let minValue = rollResultsArray[0];
    //Käydään taulukko läpi ja etsitään pienin arvo, joka määritetään minValueen
    for (let i = 0; i < rollResultsArray.length; i++) {
        if (rollResultsArray[i] < minValue) {
            minValue = rollResultsArray[i];
        }
    }
    console.log('Pienin luku oli ' + minValue);
}

function calcAvg() {
    let sum = 0;
    //Lasketaan luvut yhteen ja jaetaan niistä keskiarvo
    for (let i = 0; i < rollResultsArray.length; i++) {
        sum += rollResultsArray[i];
    }
    const avg = sum / rollResultsArray.length;
    console.log('Lukujen keskiarvo oli ' + avg);
}

returnNums();
max();
min();
calcAvg();