// This is an string - "String",'String'

const rl = require('readline')
const RL = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

let str = 'manish'


// ?? Checking if an string is an pallindrome -> MADAM 

function CheckPalindrom(str = ''){
    let Reversed = ''
    let IsPallindrom = true;

    let i = 0,
        j = str.length - 1;

    while(i < j) {
        if(str[i]!= str[j]) {
            IsPallindrom = false;
            break;
        }
        i++;
        j--;
    }

    return IsPallindrom ? str + ' Is Pallindrom' : str + ' Is Not A Pallindrom'
}


// RL.question('Enter a string: ', (input) => {
//     str = input
//     console.log(CheckPalindrom(str))
//     RL.close()
// })


//?? Toggling String

function ToggleString(str = '') {
    let toggledStr = '';
    let i = 0;
    while(i < str.length){
        let item = str.charAt(i)
        if(item.toUpperCase() == item){
            toggledStr += item.toLowerCase()
        } else {
            toggledStr += item.toUpperCase()
        }
        i++;
    }
    return toggledStr
}

// RL.question('Enter a string: ', (input) => {
//     str = input
//     console.log(ToggleString(str))
//     RL.close()
// })



// ?? Frequency Of Each Character


function FrequencyStr(str = '') {
    let Frequency = {};
    let i = 0;
    while (i < str.length) {
        let Item = str.charAt(i);
        if (Frequency[Item]) {
            Frequency[Item]++;
        } else {
            Frequency[Item] = 1;
        }
        i++;
    }
    return Frequency;
}

function FrequencyBitmap(str = '') {
    let BitMap = new Array(128).fill(0);
    let i = 0;
    let order = [];
    while (i < str.length) {
        let char = str.charAt(i);
        let code = str.charCodeAt(i);
        if (BitMap[code] === 0) {
            order.push(char); // store unique character in order
        }
        BitMap[code]++;
        i++;
    }
    return { BitMap, order };
}

RL.question('Enter a string: ', (input) => {
    const str = input;

    console.log('\nFrequencyStr (object approach):');
    console.log(FrequencyStr(str));

    console.log('\nFrequencyBitmap (bitmap with order):');
    const { BitMap, order } = FrequencyBitmap(str);
    order.forEach((char, index) => {
        console.log(`${char}: ${BitMap[str.charCodeAt(index)]}`);
    });

    RL.close();
});
