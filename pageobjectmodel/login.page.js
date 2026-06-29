class loginapp {
    constructor(page) {
        this.page = page
       
        this.usernametextfield = page.locator('//input[@id="user_name"]')
        this.passwordtextfield = page.locator('//input[@id="username_password"]')
        this.loginbutton = page.locator('//input[@id="bigbutton"]')

    }
    async navigate(){
        await this.page.goto('https://demo.suiteondemand.com/index.php?action=Login&module=Users')
    }
    async login(username, password)
    {
        await this.usernametextfield.fill(username);
        await this.passwordtextfield.fill(password)
        await this.loginbutton.click();

    }
    
}
export default loginapp;