//Total Annual Income Calculation
const incomeText = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const incomeRegex = /\d+/g;

const incomeNumbers = incomeText.match(incomeRegex).map(Number);
const totalAnnualIncome = (incomeNumbers[0] * 12) + incomeNumbers[1] + (incomeNumbers[2] * 12);
console.log("Total Annual Income:", totalAnnualIncome);


//Distance Calculation
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints = points.map(Number).sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log("Distance between furthest particles:", distance);


//Patttern 
const points2 = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints2 = points.map(Number).sort((a, b) => a - b);
const distance2 = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log("Distance between furthest particles:", distance);


//Frequent Words
function tenMostFrequentWords(paragraph, limit = paragraph.length) {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);
    const wordMap = {};
    words.forEach(word => {
        wordMap[word] = (wordMap[word] || 0) + 1;
    });
    const sortedWords = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
    return sortedWords.slice(0, limit).map(([word, count]) => ({ word, count }));
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph, 10));


//Clean Text
function cleanText(sentence) {
    return sentence.replace(/[%$@#&;,!?]/g, '').replace(/\s+/g, ' ').trim();
}

function mostFrequentWords(cleanedText, limit = 3) {
    const words = cleanedText.toLowerCase().match(/\b\w+\b/g);
    const wordMap = {};
    words.forEach(word => {
        wordMap[word] = (wordMap[word] || 0) + 1;
    });
    const sortedWords = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
    return sortedWords.slice(0, limit).map(([word, count]) => ({ word, count }));
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanedText = cleanText(sentence);
console.log(cleanedText);
console.log(mostFrequentWords(cleanedText));
