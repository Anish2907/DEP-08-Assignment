function findLongestWord(sentence:string):string{
    let longestWord = "";
    const wordsArray:string[] = sentence.split(" ");
    wordsArray.forEach((word:string)=>{
        if(word.length > longestWord.length) longestWord=word;
    })
    return longestWord;
}

console.log(findLongestWord("Find the longest word."));