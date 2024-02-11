const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
    'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
  ];
  
  const webTechs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
  ];
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  
  // Iterate 0 to 10 using for loop, do the same using while and do while loop
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  
  let j = 0;
  while (j <= 10) {
    console.log(j);
    j++;
  }
  
  let k = 0;
  do {
    console.log(k);
    k++;
  } while (k <= 10);
  
  // Iterate 10 to 0 using for loop, do the same using while and do while loop
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  
  let l = 10;
  while (l >= 0) {
    console.log(l);
    l--;
  }
  
  let m = 10;
  do {
    console.log(m);
    m--;
  } while (m >= 0);
  
  // Iterate 0 to n using for loop
  let n = 5;
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  
  // Write a loop that makes the following pattern using console.log():
  for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
  }
  
  // Use loop to print the following pattern:
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
  }
  
  // Using loop print the following pattern
  console.log('i\ti^2\ti^3');
  for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i ** 2}\t${i ** 3}`);
  }
  
  // Use for loop to iterate from 0 to 100 and print only even numbers
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  // Use for loop to iterate from 0 to 100 and print only odd numbers
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  
  // Use for loop to iterate from 0 to 100 and print only prime numbers
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
  
  // Use for loop to iterate from 0 to 100 and print the sum of all numbers.
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  console.log("The sum of all numbers from 0 to 100 is", sum);
  
  // Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  let sumEvens = 0;
  let sumOdds = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      sumEvens += i;
    } else {
      sumOdds += i;
    }
  }
  console.log("The sum of all evens from 0 to 100 is", sumEvens, "And the sum of all odds from 0 to 100 is", sumOdds);
  
  // Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  console.log([sumEvens, sumOdds]);
  
  // Develop a small script which generate array of 5 random numbers
  let randomNumbers = [];
  for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  console.log(randomNumbers);
  
  // Develop a small script which generate array of 5 random numbers and the numbers must be unique
  let uniqueRandomNumbers = [];
  while (uniqueRandomNumbers.length < 5) {
    let randomNumber = Math.floor(Math.random() * 100);
    if (!uniqueRandomNumbers.includes(randomNumber)) {
      uniqueRandomNumbers.push(randomNumber);
    }
  }
  console.log(uniqueRandomNumbers);
  
  // Develop a small script which generate a six characters random id:
  let randomId = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 6; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(randomId);
  