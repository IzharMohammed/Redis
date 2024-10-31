// Import the client instance from the 'client' module
const client = require('./client');

async function init() {
    // Push multiple values (1, 2, 3, 4, 5) to the left end of the list with key "number"
    await client.lpush("number", 1, 2, 3, 4, 5);

    // Remove and retrieve the leftmost element from the list "number"
    const result1 = await client.lpop("number");
    console.log('lpop ->', result1); 

    // Remove and retrieve the rightmost element from the list "number"
    const result2 = await client.rpop("number");
    console.log('rpop ->', result2); 
}

init();
