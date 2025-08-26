// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(number)
{
    let total = 0;
    let size = number.length
    for(const numbers of number)
    {
        total = total + numbers
    }
    
    let average = total / size ;  
    return average;
}

const numbers = [4,3,1,6,8,9]
const avg = make_avg(numbers)
console.log(avg.toFixed(2))

