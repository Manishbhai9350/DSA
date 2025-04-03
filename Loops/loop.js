// this is the file to learn about loops 😊😊

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// looping from 0 to 10

// ?? For Loop

// function Condition(i){
//     return i <= 20
// }
// function Operation(i){
//     return i++
// }
// let i = 1;
// for (; Condition(i);i++) {
//     console.log(i)
// }

// ?? Sum of N natural numbers

// rl.question('Enter a number  ',n => {
//     let num = Number(n)
//     if(isNaN(num) || num < 0) {
//         console.log('Invalid Input')
//         rl.close()
//         return
//     };
//     console.log(num)
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         sum += i
//     }
//     console.log('Sum of natural numbers from 1 to '+ num +' is '+ sum)
//     rl.close()
// })

// ?? Factorial of N numbers N!

function GetFactorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// rl.question('Enter a number  ',n => {
//     let num = Number(n)
//     if(isNaN(num) || num < 0) {
//         console.log('Invalid Input')
//         rl.close()
//         return
//     };
//     console.log(num)
// let fact = GetFactorial(num)
//     console.log('Factorial of natural numbers from 1 to '+ num +' is '+ fact)
//     rl.close()
// })

// ?? Factors of N number

function GetFactors(n) {
  let Factors = [1];
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i == 0) {
      Factors.push(i);
    }
  }
  Factors.push(n);
  return Factors;
}

// rl.question('Enter a number  ',n => {
//     let num = Number(n)
//     if(isNaN(num) || num < 0) {
//         console.log('Invalid Input')
//         rl.close()
//         return
//     };
//     let Factors = GetFactors(num)
//     console.log("Factors Of number " + num + ' are')
//     console.log(Factors)
//     rl.close()
// })

// ?? N Prime Numbers

// rl.question('Enter a number: ',n => {
//     let num = Number(n)
//     if(isNaN(num) || num < 0) {
//         console.log('Invalid Input')
//         rl.close()
//         return
//     };
//     let primeNumbers = []
//     for(let i = 2; i <= n; i++) {
//         const Factors = GetFactors(i)
//         if(Factors.length <= 2) {
//             primeNumbers.push(i)
//         }
//     }
//     console.log(primeNumbers,'These are the prime numbers from 2 to '+num)
//     rl.close()
// })

// ?? Checking if N is an prime number

function CheckPrime(n) {
  if (n == 1) return false;
  if (n <= 0) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  let IsPrime = true;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) {
      IsPrime = false;
      return IsPrime;
    }
  }
  return IsPrime;
}

// rl.question('Enter a number: ',n => {
//     let num = Number(n)
//     if(isNaN(num) || num < 0) {
//         console.log('Invalid Input')
//         rl.close()
//         return
//     };
//     const IsPrime = CheckPrime(num)
//     if (IsPrime) {
//         console.log(num,'Is an prime number')
//     } else {
//         console.log(num,'Is not an prime number')
//     }
//     rl.close()
// })

// ?? Sum Of Digits

// rl.question('Enter a number: ',n => {
//     let num = Number(n)
//     if(isNaN(num) || num < 0) {
//         console.log('Invalid Input')
//         rl.close()
//         return
//     };
//     let sum = 0
//     let number = num;
//     while(number > 0){
//         let digit = number % 10
//         sum += digit;
//         number = Math.floor(number / 10);
//     }
//     console.log(sum)
//     rl.close()
// })

// ?? Reversing an number

// rl.question('Enter a number: ',n => {
//     let num = Number(n)
//     if(isNaN(num) || num < 0) {
//         console.log('Invalid Input')
//         rl.close()
//         return
//     };
//     // 293874
//     let reversed = 0;
//     let number = num;
//     while(number > 0){
//         let digit = number % 10;
//         reversed *= 10;
//         reversed += digit;
//         number = Math.floor(number / 10);
//     }
//     console.log(num,reversed)
//     rl.close()
// })

// ?? Checking For Strong Number

function CheckStrongNumber(n){
    let num = n;
    let SumOfDigitsFactorial = 0;
    while(num > 0){
        let digit = num % 10;
        num = Math.floor(num / 10);
        let Factorial = GetFactorial(digit)
        SumOfDigitsFactorial += Factorial
    }
    if(SumOfDigitsFactorial == n) {
        return true;
    } else {
        return false;
    }
}

// rl.question("Enter a number: ", (n) => {
//   let num = Number(n);
//   if (isNaN(num) || num < 0) {
//     console.log("Invalid Input");
//     rl.close();
//     return;
//   }

//   let IsStrongNumber = CheckStrongNumber(num);
//   if (IsStrongNumber) {
//     console.log(num, "is a strong number");
//   } else {
//     console.log(num, "is not a strong number");
//   }
//   rl.close()
// });

