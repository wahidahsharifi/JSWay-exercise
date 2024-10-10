class person {
   constructor(name, balance) {
      this.name = name;
      this.balance = balance;
   }
   describe() {
      console.log(`owner: ${this.name}, balance: ${this.balance}`);
   }
}
let nam = 'be';
while (nam != `stop`) {
   nam = prompt(`type your name or stop to stop`);
   if(nam == `stop`){
      console.log('refresh to restart')
   }else{
      credit = Number(
         prompt(
            `type credit amount you want.`
         )
      );
      let balance = 0 + credit;
      const wahid = new person(nam, balance);
      wahid.describe();
   }
}
