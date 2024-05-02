const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

const LandingPage = require('../pageobjects/landing.page');

const pages = {
    landing: LandingPage
}

Given('I am on Merc Solutions landing page', async()=>{
    await pages['landing'].open();
});

When('I click on sidebar button',async()=>{
    await LandingPage.clickOnBurgerBtn();
});

When('I click on Unete option on navbar',async()=>{
    await LandingPage.clickOnUnete();
});

Then('I can see the section CTA',async()=>{
    await LandingPage.clickOnBurgerBtn();
    await expect(LandingPage.uneteBtn).toBeExisting();
    await LandingPage.uneteBtn.isDisplayed();
    await browser.pause(2000);
});

Then(/^I click on (\w+)$/, async (option) => {
    await LandingPage.clickOnOptions(option);
});
