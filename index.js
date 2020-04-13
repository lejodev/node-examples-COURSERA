var rect = require('./rectangle');

function solveRect(h, w) {
    console.log("Solution for the triangle with h = " + h + " and w = " + w);

    if(h <= 0 || w <= 0){
        console.log("Length or width can't be zero.");
    }else{
        console.log("The reactangle area is: " + rect.area(h, w));
        console.log("The rectangle perimeter is: " + rect.perimeter(h, w));
    }
}

solveRect(4,5)
solveRect(0,3)
solveRect(2,2)
solveRect(-4,8)