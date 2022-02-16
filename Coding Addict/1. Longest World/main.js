/*
    // First let check String output
    function longestWord(str){
    return str;
}
*/

/*
function longestWord(str){
    // let words = str.split(""); // This will return every character 
    let words = str.split(" "); // This will return every words 
    console.log(words);
    return str;
}
*/

/*
function longestWord(str){
    let words = str.split(" "); // This will return every words 
    
    for (let word of words){ // This will output all of the words and sentences
        console.log(word);
    }
    return str;
}
*/

function longestWord(str){
    let words = str.split(" ");
    let longestWord = "";
    
    for (let word of words){ // This will output all of the words and sentences
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(longestWord("This is my birthday"));
console.log(longestWord("Nice Day!"));