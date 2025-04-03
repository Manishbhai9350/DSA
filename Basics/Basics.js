// console.clear()

// let a = 10;
// let b = 80;

// console.log("The Sum Of 10 and 80 is  " + (a + b))

// Use Node JS to be able to run this code

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter Your Age  ", function(name) {
//     console.log(`Your Age Is ${name}!`);
//     rl.close();
// });

// ?? Swapping With 3 Methods

// ?? Method 1

// Using External Variable

// let a = 50;
// let b = 20;

// function PrintValues(){
//     console.log('a '+a, 'b '+ b)
// }

// PrintValues()

// let c = a;
// a = b;
// b = c;
// PrintValues()

// ?? Method 2

// Without External Variable

// let a = 100;
// let b = 200;

// function PrintValues() {
//   console.log("a " + a, "b " + b);
// }

// PrintValues();

// a += b; // a = 50 + 20 -> 70
// b = a - b; // b = 70 - 20 -> 50
// a -= b; // a = 70 - 50 -> 20

// PrintValues();

// ?? Method 3

// Without External Variable
// With Destructuring

// var a = 50;
// var b = 20;

// function PrintValues() {
//   console.log("a " + a, "b " + b);
// }

// PrintValues(); // Logs: a 50 b 20

// [b, a] = [a, b]; // Works because `var` is hoisted

// PrintValues(); // Logs: a 20 b 50

// ?? Adding All The Characters Of An Number

// let num = 333

// function GetSum(n = 0){
//         let sum = 0;
//         let number = n;
//         for (let i = 0; i < n.toString().length; i++) {
//                 sum += num % 10;
//                 number = Math.floor(num / 10)
//         }
//         return sum
// }

// console.log(GetSum(num))

// ?? Unary Operator ++ --

// let a = 5;

// a++ // a + 1 then a = 6;
// --a // a = 4;

// console.log(a++) // log = 5 ; a = 5;
// console.log(++a) // log = 7 ; a = 7;
// console.log(a--) // log = 7 ; a = 6;
// console.log(--a) // log = 5 ; a = 5;

// let b = 10;

// let c = b++;
// console.log(c,b) // c = 10 ; b = 11

// ?? Application Of Unary Operators

        // ?? APP 1 ->

        // let b = true;
        // b++
        // console.log(b) // 2

        // ?? APP 2 ->

        // let a = 11,
        //   b = 22;

        // //       a = 12  b = 23 a = 13 b = 24
        // //      11   22   11       22       13    25 -> 103
        // let c = a + b + a++ + b++ + ++a + ++b;

        // console.log(a, b, c); // 13 24 103


// ?? Math Functions 


// ?? Math.round(x)
        // It maps the value to nearest integer
        // Math.round(5.5) 6
        // Math.round(5.49) 5
        // Math.round(5.99) 6


// ?? Math.ceil(x) 
        // If the value Is Not a perfect integer then i will map the value to next number of integer
        
        // Math.ceil(11) 11
        // Math.ceil(11.1) 12
        // Math.ceil(11.000000001) 12
        // Math.ceil(11.99999) 12

// ?? Math.floor(x)
        // Removes The Decimal and return interger
        
        // Math.floor(4.4) 4
        // Math.floor(499.4) 499
        // Math.floor(Math.PI) 3


// ?? Math.pow(x,y)
        // Math.pow(x,y) -> returns x to the power y
        
        // Math.pow(5,2) 25
        // Math.pow(2,5) 32
        // Math.pow(100,0) 1

// ?? Math.sqrt(x)
        // Return The Square Root of any number
        
        // Math.sqrt(25) 5
        // Math.sqrt(Math.PI) 1.7724538509055159
        // Math.sqrt(Math.E) 1.6487212707001282
        // Math.sqrt(0) 0


// ?? Math.abs(x)
        // Return the absolute of any number

        // Math.abs(-4545) 4545
        // Math.abs(10) 10
        // Math.abs(-10010) 10010
        // Math.abs(-Infinity) Infinity

// ?? Math.hypot(x,y)
        // Give the hypotenius of a triagle with given 2 sides

        // Math.hypot(2,7) 6.324555320336759
        // Math.hypot(3,4) 5

        
// ?? Math.cbrt(x)
        // Give the cube root of any given number

        // Math.cbrt(216) 6
        // Math.cbrt(8) 2
        // Math.cbrt(7) 1.9129311827723892


// let P = Math.PI

// ?? Math.sin(x)
        // Gives sin of x radians 

        // Math.sin(P/2) 1
        // Math.sin(P/4) 0.7071067811865475
        // Math.sin(2 * P) 0


// ?? Math.cos(x)
        // Gives cosine of x radians 

        // Math.cos(P/2) 0
        // Math.cos(P/4) 0.7071067811865475
        // Math.cos(2 * P) 1

// ?? Math.tan(x)
        // Gives the length of tangent whose angles is x radians 

        // Math.tan(0) 0
        // Math.tan(P/4) 1
        // Math.tan(2 * P) 0


// ?? Math.min(x,y)
        // Return the minimum value between x and y 

        // Math.min(4,5) 4
        // Math.min(100,99.99999999999999999999) 99.99999999999999999999
        // Math.min(-4,4) -4
        // Math.min(-Infinity,0) -Infinity
        // Math.min(-Infinity,Infinity) -Infinity

        
// ?? Math.max(x,y)
        // Return the maximum value between x and y 

        // Math.max(4,5) 5
        // Math.max(100,99.99999999999999999999) 100
        // Math.max(-4,4) 4
        // Math.max(-Infinity,0) 0
        // Math.max(-Infinity,Infinity) Infinity

// ?? Math.random()
        // Return a RANDOM number between 1 and 0;

        // Math.random() 0.32323923742384
        // Math.random() 0.82048928402
        // Math.random() 0.12128024
        // Math.random() 0.000024248024
        // Math.random() 0.9999913123211123



// ?? Some Questions

        // ?? Reactangle Bounds

        // function Rectangle(x,y){
                //         let area = x * y;
                //         let parimeter = 2 * ( x + y );
                //         return {area,parimeter}
                // }
                
                
                // Rectangle(5,7) { area: 35, parimeter: 24 }
                
        // ?? Triangle Bounds

        // function Triangle(a,b,c){
        //         const s = (a + b + c) / 2;
        //         let RawArea = s * (s - a) * (s - b) * (s - c)
        //         let Area = Math.sqrt(RawArea)

        //         if(!Area){
        //                 return {error:'Not A Valid Triangle'}
        //         }
        //         return {Perimeter:s * 2, Area}
        // }
        // Triangle(14,15,25) { Perimeter: 54, Area: 91.78235124467012 }
        // Triangle(4,15,25)  { error: 'Not A Valid Triangle' } 
 
        // ?? Circle Bounds 

        function Circle(r,theta = 360){
                let Area = Math.PI * Math.pow(r,2);
                let Circumfarence = 2 * Math.PI * r;
                let SectorArc = Circumfarence * theta / 360
                let SectorArea = Area * theta / 360
                return {Area,Circumfarence,SectorArc,SectorArea}
        }
        console.log(Circle(5,270))


        // ?? OTP Generation

        // function OTP(dig){
        //         let Mul =  Math.floor(Number(new Array(dig).fill(9).join('')))
        //         let Base = Math.floor(Number(new Array(dig).fill(1).map((n,i) => i == 0 ? 1 : 0).join('')))
        //         const OTP = Math.floor(Base + Math.random() * (Mul - Base))
        //         return OTP
        // }
        // OTP(5) // It Will Give A Random OTP with 5 digits