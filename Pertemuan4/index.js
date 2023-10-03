// Anonymous Function (IIFE dan Callback)
// IIFE (Immediately Invoked Function Expression) JavaScript
(
    function (){
        console.log("Hello IFFE");
})();

// Callback Function
function createGreetings(name, callback){ //Function yang berada di dalam parameter fungsi
    const greetings = "Hello " + name;
    callback(greetings);
}

function logGreetings(greetings) {
    console.log(greetings);
}

createGreetings("John", logGreetings);