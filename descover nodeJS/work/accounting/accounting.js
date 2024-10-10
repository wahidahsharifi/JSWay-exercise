// TODO: load the "accounting.js" module

// Create object from the exported class
function accounting(name, balance) {
   const myAccount = new Account(name);
   myAccount.credit(balance);
   console.log(`my name is ${myAccount}: my balance is${myAccount.credit}`);
}

module.exports = accounting;
