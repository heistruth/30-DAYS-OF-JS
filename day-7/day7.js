// Declare a function fullName and it prints out your full name.
function fullName() {
    console.log("Ed-Buoro Victor");
  }
  
  fullName();
  
  // Declare a function fullName and now it takes firstName, lastName as parameters and it returns your full name.
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  console.log(fullName("John", "Doe"));
  
  // Declare a function addNumbers and it takes two parameters and returns the sum.
  function addNumbers(a, b) {
    return a + b;
  }
  
  console.log(addNumbers(3, 4));
  
  // Write a function which calculates area of a rectangle: area = length x width.
  function areaOfRectangle(length, width) {
    return length * width;
  }
  
  console.log(areaOfRectangle(5, 6));
  
  // Write a function which calculates perimeter of a rectangle: perimeter = 2 * (length + width).
  function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
  }
  
  console.log(perimeterOfRectangle(5, 6));
  
  // Write a function which calculates volume of a rectangular prism: volume = length x width x height.
  function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }
  
  console.log(volumeOfRectPrism(5, 6, 7));
  
  // Write a function which calculates area of a circle: area = π x r x r.
  function areaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  
  console.log(areaOfCircle(5));
  
  // Write a function which calculates circumference of a circle: circumference = 2πr.
  function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  console.log(circumOfCircle(5));
  
  // Write a function which calculates density: density = mass / volume.
  function density(mass, volume) {
    return mass / volume;
  }
  
  console.log(density(10, 5));
  
  // Write a function which calculates speed: speed = distance / time.
  function speed(distance, time) {
    return distance / time;
  }
  
  console.log(speed(100, 2));
  
  // Write a function which calculates weight: weight = mass x gravity.
  function weight(mass, gravity) {
    return mass * gravity;
  }
  
  console.log(weight(10, 9.8));
  
  // Write a function which converts Celsius to Fahrenheit: oF = (oC x 9/5) + 32.
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(convertCelsiusToFahrenheit(25));
  
  // Write a function which calculates BMI and returns the result and category.
  function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    let category;
  
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    return `BMI: ${bmi}, Category: ${category}`;
  }
  
  console.log(calculateBMI(70, 1.75));
  
  // Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
  function checkSeason(month) {
    if (month >= 3 && month <= 5) {
      return 'Spring';
    } else if (month >= 6 && month <= 8) {
      return 'Summer';
    } else if (month >= 9 && month <= 11) {
      return 'Autumn';
    } else {
      return 'Winter';
    }
  }
  
  console.log(checkSeason(6));
  
  // Write a function findMax that takes three arguments and returns their maximum without using Math.max method.
  function findMax(a, b, c) {
    let max = a;
    if (b > max) {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    return max;
  }
  
  console.log(findMax(0, 10, 5));
  console.log(findMax(0, -10, -2));
  