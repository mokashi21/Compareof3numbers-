// Given 3 numbers. You need to find the smallest of three numbers without using comparison
// operators
// Input -> 12,44,2
// Output -> 2

function smallest(x, y, z)
{
    let c = 0;
    while (x && y && z) {
        x--;
        y--;
        z--;
        c++;
    }
    return c;
}
 
 
let x = 12, y = 44, z = 2;
console.log("Smallest of three numbers is "
    + smallest(x, y, z));

    // here we did using decremnet and inc operator.
    //  
 