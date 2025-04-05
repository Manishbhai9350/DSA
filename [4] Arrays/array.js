// [This is the all you need to understand arrays] 

// ?? Sum of an array 

// let arr = [1,2,3,4,5,6,7]

// let sum = 0;
// console.log(sum)
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(arr)
// console.log('Sum of this array is '+ sum)



// ?? Finding the Maximum and Minimum value of an array


function GetMax(arr=[]){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if(item > max){
            max = item;
        }
    }
    return max;
}

function Get2ndMax(arr = []){
    let max1 = arr[0];
    let max2 = arr[1];
    for(let i = 2; i < arr.length; i++) {
        let item = arr[i];
        if(item > max1){
            if(max1 > max2){
                max2 = max1
            }
            max1 = item;
        } else if(item < max1 && max1 !== item){
            if(item > max2){
                max2 = item;
            }
        }
    }
    return max2;
}

function GetMin(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if(item < min){
            min = item;
        }
    }
    return min;
}

// let arr = [Math.PI/10,1,2,3,4,5,6,7,8,5,91,91,11]
// console.log(GetMax(arr))
// console.log(GetMin(arr))
// console.log(Get2ndMax(arr))



// ?? Reversing an Array

function ReverseArray(arr){
    let reversed = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
function ReverseArray2(arr){
    let j = arr.length - 1;
    let i = 0;
    while(i < j) {
        let item = arr[i];
        arr[i] = arr[j];
        arr[j] = item;
        i++
        j--;
    }
    return arr;
}

// let arr = [1,2,3,4,5,5,6,7,9]

// console.log(ReverseArray(arr))
// console.log(ReverseArray2(arr))



// ?? Sorting an binary array [0,1,1,1,0,0,0,1,0] -> [0,0,0,0,0,1,1,1,1]

function SortBinaryArray(arr = []){
    let j = 0;
    for(let i = 0; i < arr.length;i++) {
        let ItemI = arr[i];
        let ItemJ = arr[j];
        if(ItemI == 0){
            arr[j] = ItemI;
            arr[i] = ItemJ;
            j++
        }
    }
    return arr;
}
function SortNegativeBinaryArray(arr = []){
    let j = 0;
    for(let i = 0; i < arr.length; i++) {
        let ItemI = arr[i]
        let ItemJ = arr[j]
        if(ItemI < 0){
            arr[i] = ItemJ
            arr[j] = ItemI
            j++
        }
    }
    return arr
}

let arr = [0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0]
let arr2 = [-1,-2,-3,-4,-5,-6,4,4,-7,0,0,-4,-3,-7,-8,0,4]

console.log(SortNegativeBinaryArray(arr2))