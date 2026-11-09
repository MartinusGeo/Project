const {Builder, By} = require('selenium-webdriver');
const assert = require('node:assert/strict');

describe ("Open Google", function() {
    it("Should Open Google", async function() {
        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get("https://www.saucedemo.com/");

        let username = await driver.findElement({id: "user-name"});
        await username.click();
        await username.sendKeys("standard_user");
        
        let password = await driver.findElement({id: "password"});
        await password.click();
        await password.sendKeys("secret_sauce");

        let loginButton = await driver.findElement({id: "login-button"});
        await loginButton.click();

        let title = await driver.getTitle();
        console.log("Title: " + title);
        assert.strictEqual(title, "Swag Labs");

        let appLogo = await driver.findElement(By.xpath("//div[@class='app_logo']"));
        await appLogo.isDisplayed();

    
        await driver.quit();
    });
});