// Import the client instance from the 'client' module
const client = require('./client');

async function init() {
    // Set a key-value pair in Redis with key "msg:1" and value "From Izhar"
    await client.set("msg:1", "From Izhar");
    
    // Optional: Set an expiry for the key-value pair, which deletes "msg:1" after 10 seconds
    // await client.expire("msg:1", 10);
    
    // Retrieve the value associated with key "msg:1" from Redis
    const result = await client.get("msg:1");
    
    console.log("result -->", result);
}

init();
