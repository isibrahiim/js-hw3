
// 1.Calculate the sum of all numbers in a user-specified range.
function sumAll(arr) {

    let start = Math.min(arr[0],arr[1]);
    let end = Math.max(arr[0],arr[1]);
    let total = 0;    
    for (i = start; i <= end; i++){
        total += i;
    }
   console.log(total);
}
sumAll([1,4]);

// 2.Query 2 numbers and find only the greatest common factor
function gcd ()
 {
    let x = Number(document.getElementById("a").value);
    let y = Number(document.getElementById("b").value);
    for (i =1; i <= x && i <=y; i++)
    {
        if(x % i == 0 && y % i == 0) 
        {
            var g = i;
        }
    }
    console.log(g);

}

// 3. Ask the user for a number and display all the divisors of that number.

function divisor() 
{
    let z = Number(document.getElementById("c").value);
    for (i = 1; i <= z ; i++)
    {
        if (z % i ==0) 
        {
           var str = i; 
        }
        console.log(str);
        }
}


//4 Determine the number of digits in the entered number
function digits_count(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }
  
  console.log(digits_count(12345));
  
  console.log(digits_count(321));






