//used array
let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("_____________");  //listing the items 
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);  //i=index, todo[i] = task. for delete any element
            //we have to write index
        }
        console.log("_____________");
    } else if(req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1); //using splice go to that index and delete 1 elements
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}