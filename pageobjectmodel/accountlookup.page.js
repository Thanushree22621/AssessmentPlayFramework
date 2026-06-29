class accountlookup {
    constructor(page) {
        this.page = page
        this.name = page.locator('//input[@id="name_advanced"]')
        this.typedropdown = page.locator('(//select[@id="account_type_advanced"]/option)[3]')
        this.industrydropdown = page.locator('(//select[@id="industry_advanced"]/option)[4]')
        this.billingcity = page.locator('//input[@id="billing_address_city_advanced"]')
        this.billingstate = page.locator('//input[@id="billing_address_state_advanced"]')
        this.billingcountry = page.locator('//input[@id="billing_address_country_advanced"]')
        this.anyemail = page.locator('//input[@id="email_advanced"]')
        this.assignedtodropdown = page.locator('(//select[@id="assigned_user_id_advanced"])[5]')
        this.createaccountbutton = page.locator('//input[@value="Create Account"]')
        this.createactsavebtn = page.locator('//input[@id="Accounts_popupcreate_save_button"]')

    }
    async searchandselect(accountarrow)
    {
        
    }
}
//export default accountlookup

