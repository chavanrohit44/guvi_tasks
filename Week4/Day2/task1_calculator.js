/**
 * Write a calculator class
 */

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
    add() {
        return this.num1 + this.num2
    }
    sub() {
        return this.num1 - this.num2
    }
    mul() {
        return this.num1 * this.num2
    }
    
}

var calc_obj = new Calculator(20, 10)
console.log("\nAddition of two numbers is : ", calc_obj.add())
console.log("\nSubtraction of two numbers is :", calc_obj.sub())
console.log("\nMultiplication of two numbers is :", calc_obj.mul())
