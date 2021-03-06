const { expect } = require('chai');
const { Person} = require('./spec.helper')

describe("Person", () => {
    let person = new Person({
        weight: 90,
        height: 186
    });

    it("should have weight of 90", () => {
        expect(person.weight).to.equal(90);
    });

    it("should have height of 186", () => {
        expect(person.height).to.equal(186);
    });

    it("should calculate BMI value", () => {
        person.calculate_bmi();
        expect(person.bmiValue).to.equal(26.01);
    });
    
    it("should have a BMI Message", () => {
        person.calculate_bmi();
        expect(person.bmiMessage).to.equal('Overweight');
    });
});
describe("metric bmi", function() {

    beforeEach(function() {
      person = new Person({
        weight: 90,
        height: 186
      });
    });

    it("should have weight of 90", () => {
        expect(person.weight).to.equal(90);
    });

    it("should have height of 186", () => {
        expect(person.height).to.equal(186);
    });

    it("should calculate BMI value", () => {
        person.calculate_bmi();
        expect(person.bmiValue).to.equal(26.01);
    });
    
    it("should have a BMI Message", () => {
        person.calculate_bmi();
        expect(person.bmiMessage).to.equal('Overweight');
    });
  });


  describe("imperial bmi", function() {

    beforeEach(function() {
      person = new Person({
        weight: 210,
        height: 74
      });
    });

    it("should have a weight of 210", function() {
      expect(person.weight).to.equal(210);
    });

    it("should have height of 74", function() {
      expect(person.height).to.equal(74);
    });
  
    it("calculates BMI for a person using imperial method", function() {
      calculator.imperial_bmi(person);
      expect(person.bmiValue).to.equal(26.96);
    });

     it("should have a BMI Message", () => {
        person.calculate_bmi();
        expect(person.bmiMessage).to.equal('Obese');
    });
  
  });