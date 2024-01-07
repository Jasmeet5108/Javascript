// Original URI component
const originalUri = 'Hello, World!';

// Encode URI component
const encodedUri = encodeURIComponent(originalUri);

// Decode URI component
const decodedUri = decodeURIComponent(encodedUri);

// Output the results

console.log('Original URI:', originalUri);  
// Original URI: Hello, World!

console.log('Encoded URI:', encodedUri); 
// Encoded URI: Hello%2C%20World!

console.log('Decoded URI:', decodedUri);
// Decoded URI: Hello, World!