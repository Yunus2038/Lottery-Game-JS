let myInput = document.getElementById("count");
let myButton = document.getElementById("generate");
let numbers = [];
let numberValue ;
let cikis =document.getElementById("number-box");
let luckyNumbers = document.getElementById("lucky");


myButton.addEventListener("click",()=>{
        cikis.innerHTML = "";
        luckyNumbers.style.display = "block";
    if(myInput.value <9 && myInput.value>0){
        numberValue=myInput.value
        for(let i=0;i<numberValue;i++){
            for(let j=1; j<=7;j++){
                let digit = [1,2,3,4,5,6]
                if((numbers[j-1]==numbers[j]) & (digit.includes(j))){
                    numbers.pop();
                    numbers.push(Math.floor(Math.random()*90+1));
                }
                // while ((j==7) & (numbers.slice(0,6).includes(numbers[i]))) {
                //     numbers.pop();
                //     numbers.push(Math.floor(Math.random()*90+1));
                // }
                let randomNumber=Math.floor(Math.random()*90+1);
                numbers.push(randomNumber);
            }
            let joker = numbers.pop();
            numbers.sort(function(a,b) {return a-b});
            numbers.push(joker);
             console.log(numbers);
             cikis.innerHTML += numbers +"<br>"+"<br>";
             numbers=[];
        }
    }
    else{
        alert("Please enter number between  1 to 8");
    }
});

