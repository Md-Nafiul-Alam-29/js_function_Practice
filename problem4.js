// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(string){
    
    let countZero = 0;
    for(const strings of string)
    {
        if(strings.includes('0')){
        countZero = countZero + 1;
        }
    }

    return countZero;
}

const value_Count = count_zero('10011011')
console.log(value_Count)