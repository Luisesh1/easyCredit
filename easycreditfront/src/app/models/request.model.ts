class RequestModel {
  age: number;
  amount: number;
  fee: number;
  npayments: number;
  constructor({amount, age, npayments, fee}) {
    this.amount = amount;
    this.age = age;
    this.npayments = npayments;
    this.fee = fee;
  }
}
