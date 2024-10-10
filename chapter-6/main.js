const bankAccount = {
   place: "herat",
   alex: {
      name: "alex",
      balance: 0,
      credit: 250,
      describe() {
         console.log(`owner: ${this.name}, balance ${this.balance}`);
      },
   },
};
bankAccount.alex.describe();
