const { Person, BMICalculator } = require('./spec.helper')

describe("It can calculate using metric system", function() {
    let calculator;
    let person;

    beforeEach(function() {
        person = new Person({weight: 90, height: 186});
        calculator = new BMICalculator();
      });

      it("displays BMI Value", function() {
        calculator.metric_bmi(person);
        expect(person.displayValue).to.equal('Your BMI is 26.01');
      });

      it("displays BMI Message", () => {
        calculator.metric_bmi(person);
        expect(person.displayMessage).to.equal('and you are Overweight');
      });
    
    }); 

  
    describe("It can calculate using imperial system", function() {
        let calculator;
        let person;

        beforeEach(function() {
            person = new Person({weight: 90, height: 186});
            calculator = new BMICalculator();
        });
  
        it("displays BMI Value", function() {
            calculator.imperial_bmi(person);
            expect(person.displayValue).to.equal('Your BMI is 26.96');
        });
  
        it("displays BMI Message", () => {
            calculator.imperial_bmi(person);
            expect(person.displayMessage).to.equal('and you are Overweight');
        });
        
    });
  