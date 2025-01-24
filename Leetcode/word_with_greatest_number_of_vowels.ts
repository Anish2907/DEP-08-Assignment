function countVowels(word:string):number{
    const checkWord:string = word.toLowerCase();
    const vowels:string[] = ['a','e','i','o','u'];
    let count:number = 0;

    for(let char of checkWord){
        if(vowels.includes(char)) count++;
    }
    return count;
}

function findWordWithGreatestNumberOfVowels(sentence:string):string{
    const wordsArray:string[] = sentence.split(" ");
    let maxCountOfVowels = 0;
    let wordWithMostVowels = "";
    wordsArray.map(word=>{
        let vowelCount:number = countVowels(word);
        if(vowelCount > maxCountOfVowels){
            maxCountOfVowels=vowelCount;
            wordWithMostVowels=word;
        }
    });

    if(wordWithMostVowels) return wordWithMostVowels;
    else return "No word with any vowels in it.";
}

console.log(findWordWithGreatestNumberOfVowels("HAPPY NEW YEAR"));
