// for(let i = 1; i<=5; i++) {
//     console.log(i);
// }

// for(let i = 5; i>=1; i--) {
//     console.log(i);
// }

// //print all odd numbers 
// for(let i =1; i<=15; i++){

//     if(i % 2 != 0){
//         console.log("print odd number", i);
//     }
// }

// //print all even numbers (2 to 10)
// for(let i = 2; i<=10; i++){

//     if(i % 2 == 0){
//         console.log("Even number is", i);
//     }
// }
 

// for(let i = 2; i<=10; i=i+2){

//     console.log("Even number is", i);
    
// }

//infinite loop

// for(let i=1; ; i++){

//     console.log(i);
// }

// //print the multiplicsation for tabale 5
// for(let i=5; i<=50; i=i+5){
//     console.log("multiplication of 5 is ", i);
// }

//print the table which takes input from the users 
// let n = prompt("Write your number");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// //nested for loop
// for (let i=1; i<= 3; i++) {   //←outer loop
//     for (let j=1;j<=3; j++) {   //←inner loop 
//           console.log(j);
//     }
//  }   

// for (let i=1; i<= 3; i++) {  // ←outer loop
//     console.log(`outer loop ${i}`);
//   for (let j=1;j<=3; j++) { // ←inner loop 
//         console.log(j);
//   }
// } 
// let i=1;
// while(i<=20) {
//   console.log(i);
//   i = i+2;
// }

//Game for user to find my favorite movie and when they fint it shoe quit
// const favMovie = "Ramayana";
// let guess = prompt("guess my favorite Movie:");
// while((guess != favMovie) && (guess != "quit")){
//   guess = prompt("wrong guess. please try again")
// }

// if(guess == favMovie){
//     console.log("congrats!!");
// } else{
//     console.log("Sorry! you quit");
// }

//Loops with Arrays
// let fruits = ["mango", "apple", "banna", "litchi", "orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// let fruits = ["mango", "apple", "banna", "litchi", "orange"];
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }

// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder women", "flash"]
// ]

// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i], heroes[i].length);  //outer array

//     //for individual print
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`); //inner array 
//     }
// }


// let student = [["aman", 95], ["sanu", 94.4], ["raju", 100]];

// for(let i =0; i<student.length; i++){
//     console.log(`info of student ${i}`);
//     for(let j=0; j<student.length; j++){
//         console.log(student[i][j]);
//     }
// }

// let fruits = ["mango", "apple", "banana", "orange", "litchi"];

// for(i of fruits){   // i is  a variable here and we can make aby variable here like : we can 
//     //also write fruit here which looks better as compare to writing i here
//     console.log(i);
// }

// for(char of "jaisriram") {
//     console.log(char);
// }


let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"]];

  for(list of heroes){  //list is a variable and we can write whatever we wants
      for(hero of list){
        console.log(hero);
      }
  }