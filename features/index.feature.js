
const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can calculate BMI using metric system', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });

    it('by inputing his weight and height', async () => {

        await browser.fillIn("input[id='weight-in-kgs']", { with: "95" })
        await browser.fillIn("input[id='height-in-cm']", { with: "185" })

        await browser.clickOnButton("button")
        let content = await browser.getContent("span[id='display_value']")
        expect(content).to.eql('Your BMI is 27.76');
        let message = await browser.getContent("span[id='display_message']")
        expect(message).to.eql('and you are Overweight');
    });
});

describe('User can calculate BMI using imperial system', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });

    it('by inputing his weight and height', async () => {
        await browser.selectOption("select[id='my_select']", {option: 'imperial' })
        await browser.fillIn("input[id='weight-in-lbs']", { with: "170" })
        await browser.fillIn("input[id='height-in-in']", { with: "70" })
        await browser.clickOnButton("button")
        let content = await browser.getContent("span[id='display_value']")
        await browser.debugTheCode()
        expect(content).to.eql('Your BMI is 24.39');
    });
});
