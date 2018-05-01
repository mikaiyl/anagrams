/*
*      Includes
*/


const alphabetized = new Array();

    /*
    *      Setup
    */

function getInput() {
    return document.getElementById("input").value;
}

function alphabetize(word) {
    return word.toLowerCase().split("").sort().join("").trim();
}

function findMatch(word) {
    let keys = [];
    alphabetized.find((a, index) => {
        if( a == alphabetize(word)){
            keys.push(index);
        }
    });
    return keys;
}

    /*
    *      Main
    */

(() => {
    for(i of words) { alphabetized.push(alphabetize(i))};
    document.getElementById("findButton").onclick = function() {
        document.getElementById("output").textContent = (() => {
            let result = "";
            for( i of findMatch(getInput())) {
                result += words[i] + " ";
            }
            return result;
        })();
    }
})();
