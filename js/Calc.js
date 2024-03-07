export default class Calc {
  constructor(displayElement) {
    this.leftOperand = 0;
    this.rightOperand = 0;
    this.operator = '';
    this.result = 0;
    this.memory = '';
    this.operators = ['+', '-', 'x', '/']
    this.display = displayElement;
  }
  setLeftOperand(value) {
    this.leftOperand = parseFloat(value);
    return this;
  }
  setRightOperand(value) {
    this.rightOperand = parseFloat(value);
    return this;
  }
  setOperator(value) {
    this.operator = value;
    return this;
  }
  add() {
    this.result = this.leftOperand + this.rightOperand;
    return this;
  }
  subtract() {
    this.result = this.leftOperand - this.rightOperand;
    return this;
  }
  multiply() {
    this.result = this.leftOperand * this.rightOperand;
    return this;
  }
  divide() {
    this.result = this.leftOperand / this.rightOperand || 'Error';
    return this;
  }
  getResult() {
    return this.result;
  }
  getMemory() {
    return this.memory;
  }
  operatorIsSet() {
    return this.operators.some(op => this.memory.includes(op));
  }
  getOperator() {
    return this.operators.find(op => this.memory.includes(op));
  }
  handleInput(value) {
    if (this.operatorIsSet() && this.operators.includes(value)) {
      return this;
    } else {
      this.memory += value;
    }
    this.display.textContent = this.memory;
  }
  delete() {
    this.memory = this.memory.slice(0, -1);
    this.display.textContent = this.memory;
  }
  reset() {
    this.leftOperand = 0;
    this.rightOperand = 0;
    this.operator = '';
    this.result = 0;
    this.memory = '';
    this.display.textContent = this.memory;
  }
  evaluate() {
    this.operator = this.getOperator();
    this.leftOperand = parseFloat(this.memory.split(this.operator)[0]);
    this.rightOperand = parseFloat(this.memory.split(this.operator)[1]);
    if (this.operator === "+") {
      this.result = this.add().getResult();
    }
    if (this.operator === "-") {
      this.result = this.subtract().getResult();
    }
    if (this.operator === "x") {
      this.result = this.multiply().getResult();
    }
    if (this.operator === "/") {
      this.result = this.divide().getResult();
    }
    this.memory = '';
    this.leftOperand = 0;
    this.rightOperand = 0;
    this.operator = '';
    this.display.textContent = this.result.toString().length > 12 ? this.result.toPrecision(10) : this.result.toLocaleString('en-US');
  }
}