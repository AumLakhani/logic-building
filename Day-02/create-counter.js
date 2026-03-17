/* 
Problem: Create a counter function that returns a function that when called, increments and returns an internal counter variable.
Day:02
Language: JavaScript
*/
let fun = function(init){
    let count = init;
    return{
        increment(){
            return ++count;
        
        },
        decrement(){
            return --count;
        },
        reset(){    
            count = init;
        }
    }
}


const counter = fun(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4