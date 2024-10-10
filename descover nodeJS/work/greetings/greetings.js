// Create three functions
const sayHello = name => `Hello, ${name}`;
const flatter = () => `Look how gorgeous you are today!`;

// Export two of them
module.exports.sayHello = sayHello;
module.exports.flatter = flatter;

const sayGoodbye = name => `Goodbye, ${name}`;