const salary = {
  basic: 189000,
  allowances() {
    this.TA = (this.basic * 10) / 100;
    this.DA = (this.basic * 15) / 100;
    this.HRA = (this.basic * 10) / 100;
    this.MA = (this.basic * 20) / 100;
    this.gross = this.basic + this.TA + this.DA + this.HRA + this.MA;
    this.tax = (this.gross * 10) / 100;
    this.income = this.gross - this.tax;
  },
  slip() {
    console.log(`Basic Salary : ${this.basic}`);
    console.log(`TA           : ${this.TA}`);
    console.log(`DA           : ${this.DA}`);
    console.log(`HRA          : ${this.HRA}`);
    console.log(`MA           : ${this.MA}`);
    console.log(`Gross Salary : ${this.gross}`);
    console.log(`Income Tax   : ${this.tax}`);
    console.log(`Income       : ${this.income}`);
  },
};

salary.allowances();
salary.slip();
