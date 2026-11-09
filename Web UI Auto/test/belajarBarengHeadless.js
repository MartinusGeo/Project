const {Builder, By, until} = require('selenium-webdriver');
const assert = require('node:assert/strict');
const chrome = require('selenium-webdriver/chrome');

describe ("Login Belajar Bareng", function() {
    before(async function() {
        console.log("Login -- Belajar Bareng Headless Test");
    });

    after(async function() {
        console.log("Login -- Belajar Bareng Headless Test Completed");
    });

    beforeEach(async function() {
        let Options = new chrome.Options();
        Options.addArguments("--headless");
        Options.addArguments("--log-level=3");
        Options.addArguments("--window-size=1920,1080"); 
        Options.addArguments("--start-maximized");

        driver = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(Options)
        .build();
        await driver.get("https://belajar-bareng.onrender.com/");
    });

    afterEach(async function() { 
        await driver.quit();
    });

    it("Login Belajar Bareng with Valid User", async function() {
        let username = await driver.findElement({id: "username"});
        await username.click();
        await username.sendKeys("belajarbareng");
        
        let password = await driver.findElement({id: "password"});
        await password.click();
        await password.sendKeys("belajarbareng");

        let loginButton = await driver.findElement({id: "sign-in-submit"});
        await loginButton.click();
    });

    it( "Login Belajar Bareng with Invalid User", async function() {
        let username = await driver.findElement({id: "username"});
        await username.click();
        await username.sendKeys("invaliduser");

        let password = await driver.findElement({id: "password"});
        await password.click();
        await password.sendKeys("invalidpassword");

        let LoginButton = await driver.findElement({id: "sign-in-submit"});
        await LoginButton.click();
    });
});

describe ("Add User in Belajar Bareng", function() {
    this.timeout(90000); // Set timeout to 30 seconds for this suite

    before(async function() {
        console.log("Add User -- Belajar Bareng Headless Test");
    });

    after(async function() {
        console.log("Add User -- Belajar Bareng Headless Completed");
    });

    beforeEach(async function() {
        let Options = new chrome.Options();
        Options.addArguments("--headless");
        Options.addArguments("--log-level=3");        
        Options.addArguments("--window-size=1920,1080"); 
        Options.addArguments("--start-maximized");

        driver = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(Options)
        .build();
        await driver.get("https://belajar-bareng.onrender.com/");
        await driver.wait(until.titleContains(""), 90000);
    });

    afterEach(async function() { 
        await driver.quit();
    });

    it("Add User in Belajar Bareng", async function() {
        let addUserButton = await driver.wait(until.elementLocated(By.id("add-user-button")), 10000);
        await addUserButton.click();

        let addUsername = await driver.findElement({id: "add-username"});
        await addUsername.click();
        await addUsername.sendKeys("testuser");

        let addUserage = await driver.findElement({id: "add-user-age"});
        await addUserage.click();
        await addUserage.sendKeys("25");

        let addSubmitButton = await driver.findElement({id: "submit-new-user"});
        await addSubmitButton.click();
    });

    it("Add User invalid in Belajar Bareng", async function() {
        let addUserButton = await driver.wait(until.elementLocated(By.id("add-user-button")), 10000);
        await addUserButton.click();
        
        let addUsername = await driver.findElement({id: "add-username"});
        await addUsername.click();
        await addUsername.sendKeys("123");

        let addUserage = await driver.findElement({id: "add-user-age"});
        await addUserage.click();
        await addUserage.sendKeys("abc");
        
        let addSubmitButton = await driver.findElement({id: "submit-new-user"});
        await addSubmitButton.click();
    });
});

describe ("List User in Belajar Bareng", function() {
    before(async function() {
        console.log("List User -- Belajar Bareng Headless Test");
    });

    after(async function() {
        console.log("List User -- Belajar Bareng Headless Completed");
    });

    beforeEach(async function() {
        let Options = new chrome.Options();
        Options.addArguments("--headless");
        Options.addArguments("--log-level=3");
        Options.addArguments("--window-size=1920,1080"); 
        Options.addArguments("--start-maximized");

        driver = new Builder()
        .forBrowser("chrome")
        .setChromeOptions(Options)
        .build();
        await driver.get("https://belajar-bareng.onrender.com/");
    });

    afterEach(async function() { 
        await driver.quit();
    });

    it("List User Valid in Belajar Bareng", async function() {
        let listUserElements = await driver.wait(until.elementsLocated(By.xpath("//*[@class='user-info']/h3")), 20000);
        let allUsers = [];
            for (let userElement of listUserElements) {
                let userName = await userElement.getText();
                allUsers.push(userName);
            };
        assert.ok(allUsers.includes("Ridhwan"));
        console.log("User 'Ridhwan' is present in the list of users.");
    });

    it("List User Invalid in Belajar Bareng", async function() {
        let listUserElements = await driver.wait(until.elementsLocated(By.xpath("//*[@class='user-info']/h3")), 20000);
        let allUsers = [];
            for (let userElement of listUserElements) {
                let userName = await userElement.getText();
                allUsers.push(userName);
            }
        // Assert that 'InvalidUser' is not present in the list of users
        assert.ok(!allUsers.includes("InvalidUser"));
        console.log("User 'InvalidUser' is not present in the list of users.");
    });
});