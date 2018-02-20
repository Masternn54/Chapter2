
let hash = " ";
for (i=1; i<=7; i++) {
 console.log(hash += "#");}
//7 tallet er and tallet af gange den køre i++ tilføjer en
// # hver gang den køre og # er det der bliver printet i consol


for(i=1; i <= 100; i++ ){
    result = i;
    if( i % 3 == 0)  {result = "Fizz"}
    if (i % 5 == 0)  {result = "Buzz"}
    if(i % 3 == 0 && i % 5 == 0) {result = "FizzBuzz"}

console.log(result);
    // husk at hvis man skal have modulus(%) med 2 tal
    // skal mand skrive det sådan her
    //if(i % 3 == 0 && i % 5 == 0) {result = "FizzBuzz"}


