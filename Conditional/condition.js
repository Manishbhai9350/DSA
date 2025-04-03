import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ?? Basic Condition

// rl.question("Please enter your age: ", (age) => {
//   if (typeof Number(age) !== "number") {
//     console.log("Invalid Input");
//   } else if (Math.floor(Number(age)) >= 18) {
//     console.log("You are eligible to vote.");
//   } else {
//     console.log("You are not eligible to vote.");
//   }
//   rl.close();
// });

// ?? Shop Discount System

// let Discounts = [
//     {
//         amount:1000,
//         discount:0,
//     },
//     {
//         amount:2500,
//         discount:5,
//     },
//     {
//         amount:6300,
//         discount:8,
//     },
//     {
//         amount:9000,
//         discount:15,
//     },
//     {
//         amount:15000,
//         discount:18,
//     },
// ]

// const CalculateDiscount = amount => {
//     for (let i = Discounts.length - 1; i  >= 0; i--) {
//         if(amount >= Discounts[i].amount){
//             return amount - amount * Discounts[i].discount / 100
//         }
//     }
// }

// rl.question("Please enter the amount: ", (amount) => {
//     const Am = Number(amount);
//     if (isNaN(Am) || Am < 0) {
//         console.log('Invalid Amount')
//     } else {
//         console.log(`You have to pay: ${CalculateDiscount(Am)}`);
//     }
//     rl.close()
// })

// ?? Electricity Bill System

// Lets Assume that the total electricity is 120 units
//  This program calculates first 100 units fare and then 20 units fare according to the rates;

// let ElectricityRates = [
//   {
//     from: 0,
//     to: 100,
//     rate: 4,
//     division: 100,
//   },
//   {
//     from: 101,
//     to: 200,
//     rate: 6,
//     division: 100,
//   },
//   {
//     from: 201,
//     to: 400,
//     rate: 8,
//     division: 100,
//   },
//   {
//     from: 401,
//     to: 700,
//     rate: 13,
//     division: 100,
//   },
// ];

// const CalculateUnitFare = (units) => {
//   for (let i = ElectricityRates.length - 1; i >= 0; i--) {
//     const Bill = ElectricityRates[i];
//     if (units >= Bill.from) {
//       let BaseUnit = Math.floor(units / Bill.division) * Bill.division || 0;
//       let unit = units - BaseUnit
//       let fare = unit * Bill.rate;
//       return { unit, fare };
//     }
//   }
// };
// const CalculateBill = (units) => {
//   let TotalBill = 0;
//   let Unit = units;
//   while (Unit > 0) {
//     let { unit, fare } = CalculateUnitFare(Unit);
//     TotalBill += fare;
//     Unit -= unit;
//     console.log(Unit,unit)
//   }
//   return (TotalBill)
// };

// rl.question("Please enter the units: ", (units) => {
//   const U = Number(units);
//   if (isNaN(U) || U < 0) {
//     console.log("Invalid Units");
//   } else {
//     console.log(`Your bill is: ${CalculateBill(U)}`);
//   }
//   rl.close();
// });

// // ?? Grade System

// rl.question("Please enter your marks: ", (marks) => {
//   const M = Number(marks);
//   if (isNaN(M)) {
//     console.log("Invalid Marks");
//   } else if (M >= 90) {
//     console.log("Grade: A+");
//   } else if (M >= 80) {
//     console.log("Grade: A");
//   } else if (M >= 70) {
//     console.log("Grade: B+");
//   } else if (M >= 60) {
//     console.log("Grade: B");
//   } else {
//     console.log("Grade: F");
//   }
//   rl.close();
// });





// ?? Money Notes System

let Notes = [2000,500,200,100,50,20,10,5,2,1]

rl.question("Please enter money: ", (money) => {
  console.log(money)
  let TotalAmount = Number(money);
  let Amount = TotalAmount;
  let Info = {}

  for(let note of Notes) {
    if(Amount >= note){
      const NumberOfNotes = Math.floor(Amount/note);
      const RestAmount = Amount % note;
      Info[note] = {
        count:NumberOfNotes,
        amount:NumberOfNotes * note
      }
      Amount = RestAmount;
    }
  }

  console.log(Info)
  rl.close()
})