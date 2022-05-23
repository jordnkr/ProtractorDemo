var SuperCalculatorPage = require('../page-objects/SuperCalculatorPage');

describe('Protractor Demo', function() {
  it('should add one and two', async function() {
    await browser.get('http://juliemr.github.io/protractor-demo/');
    let superCalculatorPage = new SuperCalculatorPage();
    await superCalculatorPage.enterFirstNumber(1);
    await superCalculatorPage.enterSecondNumber(2);
    await superCalculatorPage.clickGoButton();

    expect(await element(by.binding('latest')).getText()).toEqual('3');
  });
});