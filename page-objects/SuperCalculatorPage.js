var BasePage = require('./BasePage');

class SuperCalculatorPage extends BasePage {
  constructor() {
    super();
    
    this.firstNumberInput = element(by.model('first'));
    this.secondNumberInput = element(by.model('second'));
    this.goButton = element(by.id('gobutton'));
  }

  async enterFirstNumber(number) {
    await this.firstNumberInput.sendKeys(number);
  }

  async enterSecondNumber(number) {
    await this.secondNumberInput.sendKeys(number);
  }

  async clickGoButton() {
    await this.goButton.click();
  }
};
module.exports = SuperCalculatorPage;