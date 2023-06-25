///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0 // Initialized the variable to store the total number of acres picked for a week.
const maxLength = Math.max(fujiAcres.length, galaAcres.length, pinkAcres.length); // Used Math max in order to find the maximum length among the three arrays
for(let i = 0; i < maxLength; i++){ //Iterate through each index, begining from 0 until the condition with max lenght is finalized. adding 1 to i with each iteration
    if(i< fujiAcres.length){ //Check if the index is still within the range
        totalAcres += fujiAcres[i];//Add the value of the current index of fujiAcres into the totalAcres variable
    }
    if(i< galaAcres.length){//Check if the index is still within the range
        totalAcres += galaAcres[i];//Add the value of the current index of galaAcres into the totalAcres variable
    }    
    if(i <pinkAcres.length){//Check if the index is still within the range
        totalAcres += pinkAcres[i];//Add the value of the current index of pinkAcres into the totalAcres variable
    }     
}
console.log(totalAcres); //Logged to the console the total number of acres picked for a week




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    Save the answer to a variable called `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / maxLength; //Calculating the average number of acres picked per day, by diving the total acres per week with maxlength of the arrays which represent the number of days.
console.log(averageDailyAcres); //Logged to the console the average daily acres
// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0) { //Iteration of a while loop, looping until there are no more acres left to pick
    days++;//incrementing the number of days by one with each iteration
    acresLeft-= averageDailyAcres;//substracting the average daily acres from the remaining acres to pick
}
console.log(days);//Logged to the console the total days it took to pick all the acres

// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method to make copies of the arrays and 
    then loop the copies. You could also make empty arrays, loop the old ones
    and use the push method to add new values to the new arrays.
*/

// CODE HERE
const tonsPerAcre = 6.5;//This is a number given in the instructions which represent the number of tons og apples for each acre in order to make the calculation from acres to tons

//Initialized empty arrays to store the tons picked per day
let fujiTons =[];
let galaTons =[];
let pinkTons =[];

for(i =0; i < maxLength; i++){ //Using for loop to iterate through each day with maxlength as a limit
    //Calculating the tons picked for each variety of apples by multiplying the acres for each day and the number of tons per acre. Then adding that quantity to a new array with the push method
    fujiTons.push(fujiAcres[i] * tonsPerAcre);
    galaTons.push(galaAcres[i] * tonsPerAcre);
    pinkTons.push(pinkAcres[i] * tonsPerAcre);
}

////Logged to the console the arrays with the amounts of tons of apples picked per day for each variety
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);






// PROBLEM 5

/*
    Next, calculate the total number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

const ton = 2000; //Amount of pounds in a ton in order to define the number of pounds picked per variety
//Initialized variables to store the tons picked for each variety
let totalFuji = 0;
let totalGala = 0;
let totalPink = 0;

for(i = 0; i < maxLength; i++){//Using for loop to iterate through each day with maxlength as a limit
    //Accumulating the total tons picked for each variety by adding the tons for each day
    totalFuji += fujiTons[i];
    totalGala += galaTons[i];
    totalPink += pinkTons[i];
}
let fujiPounds = totalFuji * ton;//Calculating the total pounds picked for each variety by multiplying the total of tons and the amount of pounds which is represented in the variable ton
let galaPounds = totalGala * ton;
let pinkPounds = totalPink * ton;
//Logged to the console the total amount of pounds picked for each variety
console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);


// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices given 
    at the beginning of this file to figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/

// CODE HERE
//Calculating the profit for each apple variety by multiplying the total amount of pounds and the price per pound
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

//Logged to the console the total amount of profit for each variety
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//Calculating the total profit with the sum of the profit for each variety
let totalProfit = fujiProfit + galaProfit + pinkProfit;
//Logged to the console the total profit for all the apples
console.log(totalProfit);