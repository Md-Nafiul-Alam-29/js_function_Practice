// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkEvenOdd(num)
{
    if( num % 2 !== 0)
    {
        let result = num * 2;
        return result;
    }

    else if (num % 2 === 0)
    {
        let result = num / 2;
        return result
    }

}

let number = checkEvenOdd(13)
console.log(number)