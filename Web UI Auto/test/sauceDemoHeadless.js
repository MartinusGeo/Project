const {Builder, By} = require('selenium-webdriver');
const assert = require('node:assert/strict');
//Headless Chrome
const chrome = require('selenium-webdriver/chrome');
//Headless Firefox
const firefox = require('selenium-webdriver/firefox');

describe ("Saucedemo Login", function() {
    //Firefox
    // let Options = new firefox.Options();
    // Options.addArguments("--headless");
    
    before(function() {
        console.log("Starting Sauce Demo Headless Test");
    });
    
    after(function() {
        console.log("Sauce Demo Headless Test Completed");
    });

    //Chrome
    beforeEach(async function() { 
        //Chrome
        let Options = new chrome.Options();
        Options.addArguments("--headless");
        Options.addArguments("--log-level=3");

        driver = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(Options)
        .build();
        await driver.get("https://www.saucedemo.com/");
        
        //Firefox
        // const driver = await new Builder()
        // .forBrowser("firefox")
        // .setFirefoxOptions(Options)
        // .build();
        // await driver.get("https://www.saucedemo.com/");
    });

    afterEach(async function() {
        await driver.quit();
    });


    it("Login Saucedemo with Standard User", async function() {


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

        // let appLogo = await driver.findElement(By.xpath("//div[@class='app_logo']"));
        // await appLogo.isDisplayed();
    });

    it("Login Saucedemo with Glicth User", async function() {

        let username = await driver.findElement({id: "user-name"});
        await username.click();
        await username.sendKeys("performance_glitch_user");
        
        let password = await driver.findElement({id: "password"});
        await password.click();
        await password.sendKeys("secret_sauce");

        let loginButton = await driver.findElement({id: "login-button"});
        await loginButton.click();

    });

    it("Login Saucedemo with Visual User", async function() {

        let username = await driver.findElement({id: "user-name"});
        await username.click();
        await username.sendKeys("visual_user");
        
        let password = await driver.findElement({id: "password"});
        await password.click();
        await password.sendKeys("secret_sauce");

        let loginButton = await driver.findElement({id: "login-button"});
        await loginButton.click();

    });
});