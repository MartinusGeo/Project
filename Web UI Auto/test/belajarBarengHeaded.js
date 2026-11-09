const {Builder, By, until} = require('selenium-webdriver');
const assert = require('node:assert/strict');

describe ("Open Google", function() {
    it("Should Open Google", async function() {
        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get("https://belajar-bareng.onrender.com/");

        let username = await driver.findElement({id: "username"});
        await username.click();
        await username.sendKeys("belajarbareng");
        
        let password = await driver.findElement({id: "password"});
        await password.click();
        await password.sendKeys("belajarbareng");

        let loginButton = await driver.findElement({id: "sign-in-submit"});
        await loginButton.click();

        // let title = await driver.getTitle();
        // console.log("Title: " + title);
        // assert.strictEqual(title, "List Users");

        let addUserButton = await driver.wait(until.elementLocated(By.id("add-user-button")), 10000);
        await addUserButton.click();

        let addUserName= await driver.findElement({id: "add-username"});
        await addUserName.click();
        await addUserName.sendKeys("test");

        let addUserAge= await driver.findElement({id: "add-user-age"});
        await addUserAge.click();
        await addUserAge.sendKeys("20");

        let addSubmitButton = await driver.findElement({id: "submit-new-user"});
        await addSubmitButton.click();

        let listUserButton = await driver.wait(until.elementLocated({id: "add-user-list-button"}), 10000);
        await listUserButton.click();

        await driver.navigate().refresh();

        let listUserElements = await driver.wait(until.elementsLocated(By.xpath("//*[@class='user-info']/h3")), 20000);
        let allUsers = [];
        for (let userElement of listUserElements) {
            let userName = await userElement.getText();
            allUsers.push(userName);
        }
        // console.log("All Users: " + allUsers);
        assert.ok(allUsers.includes("Ridhwan"));
        console.log("User 'Ridhwan' is present in the list of users.");

        // let appLogo = await driver.findElement(By.xpath("//div[@class='app_logo']"));
        // await appLogo.isDisplayed();

    
        await driver.quit();
    });
});