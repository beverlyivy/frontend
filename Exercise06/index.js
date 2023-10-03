//Promise
import helloWorld from './helloWorld.js';  
//Fetch
import ambilDataUser from './ambilDataUser.js'; 
//Async
import ambilDataUserAsync from './ambilDataUserAsync.js'; 
async function messages (){
    let msg = await helloWorld();
    console.log(msg);
}

//Promise
messages(); 
//Fetch
ambilDataUser();   
//Async
ambilDataUserAsync();
