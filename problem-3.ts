const countWordOccurrences = (sentence : string, word : string) : number => {
    let count : number = 0;
    const sentenceArray = sentence.split(' ');
    sentenceArray.map(oneWord => {
        if(oneWord === word){
            count = count + 1;
        }
    });
    return count;
}

const result = countWordOccurrences('i love typescript', 'typescript');
console.log(result);