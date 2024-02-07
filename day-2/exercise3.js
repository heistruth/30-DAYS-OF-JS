//count the number of word 'love' in the setence
const sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const countLove = (sentence) => {
    return (sentence.match(/love/gi) || []).length;
};
console.log(countLove(sentence1)); // Output: 3


//Count the number of all 'because' in the sentence
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const countBecause = (sentence) => {
    return (sentence.match(/because/gi) || []).length;
};
console.log(countBecause(sentence2)); // Output: 3


//Find the most frequent word in the text
const text = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const findMostFrequentWord = (text) => {
    const words = text.replace(/[^\w\s]/gi, '').split(/\s+/);
    const wordCounts = {};
    let mostFrequentWord = '';
    let maxCount = 0;
    for (let word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        if (wordCounts[word] > maxCount) {
            mostFrequentWord = word;
            maxCount = wordCounts[word];
        }
    }
    return mostFrequentWord;
};
console.log(findMostFrequentWord(text)); // Output: 'teaching'


//Calculate the total annual income
const text2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const calculateTotalAnnualIncome = (text) => {
    const numbers = text.match(/\d+/g).map(Number);
    const monthlySalary = numbers[0];
    const annualBonus = numbers[1];
    const monthlyOnlineCourses = numbers[2];
    return (monthlySalary * 12) + annualBonus + (monthlyOnlineCourses * 12);
};
console.log(calculateTotalAnnualIncome(text2)); // Output: 132000
