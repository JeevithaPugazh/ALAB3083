console.log("---- PART 1 ----")
for(let i=1;i<=100;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("Fizz Buzz")
    }
    else if(i%3 == 0){
        console.log("Fizz");
    }else if(i%5 == 0){
        console.log("Buzz");
    }else {
        console.log(i)
    }
}

console.log("")
console.log("---- PART 2 ----")

let n=60;
console.log("First Prime number after " +n+ "is");
while(true){
    isPrime =false
    for(let i=2;i<=n-1;i++){
        if(n % i !== 0){
            isPrime =true;
        }
        break;
    }
    if(isPrime){
       console.log(n);
        break;
    }
    n++;
}

console.log("");
console.log("---- PART 3 ----");
const inputStr =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const strRows = inputStr.split("\n");
for (let i = 0; i <= strRows.length - 1; i++) {

  const cell = strRows[i].split(",");
  console.log(cell[0], cell[1], cell[2], cell[3]);
}
