class accountcreation {
    constructor(page) {
        this.page = page;

        this.salesbutton2 = page.locator('//a[text()="Sales"]')
        this.accountslink = page.locator('(//a[@id="moduleTab_6_Accounts"])[1]')
        this.createaccount = page.locator('//div[text()="Create Account"]')

        this.name = page.locator('//input[@id="name"]')
        this.website1 = page.locator('//input[@id="website"]')

        this.emailadress = page.locator('//input[@id="Accounts0emailAddress0"]')

        this.street3 = page.locator('//textarea[@id="billing_address_street"]')
        this.city3 = page.locator('//input[@id="billing_address_city"]')
        this.state3 = page.locator('//input[@id="billing_address_state"]')
        this.postalcode3 = page.locator('//input[@id="billing_address_postalcode"]')
        this.country3 = page.locator('//input[@id="billing_address_country"]')

        this.officephone2 = page.locator('//input[@id="phone_office"]')
        this.fax2 = page.locator('//input[@id="phone_fax"]')

        this.street4 = page.locator('//textarea[@id="shipping_address_street"]')
        this.city4 = page.locator('//input[@id="shipping_address_city"]')
        this.state4 = page.locator('//input[@id="shipping_address_state"]')
        this.postalcode4 = page.locator('//input[@id="shipping_address_postalcode"]')
        this.country4 = page.locator('//input[@id="shipping_address_country"]')

        this.description3 = page.locator('//textarea[@id="description"]')
        this.assignedto = page.locator('//input[@id="assigned_user_name"]')

        this.type2 = page.locator('(//select[@id="account_type"])')
        this.annualrevenue = page.locator('//input[@id="annual_revenue"]')
        this.memberof = page.locator('//input[@id="parent_name"]')
        this.campaign3 = page.locator('//input[@id="campaign_name"]')

        this.industr2 = page.locator('(//select[@id="industry"])')
        this.employee = page.locator('//input[@id="employees"]')
        
        this.button = page.locator('//input[@id="SAVE"]').first()
        
    }
    async navigatetocreateaccount(){
        await this.salesbutton2.click();
        await this.accountslink.click();
        await this.createaccount.click();
    }
    async fillaccountform(dataacct){
        await this.name.fill(dataacct.name);
        await this.website1.fill(dataacct.website1)
        await this.emailadress.fill(dataacct.emailadress)
        await this.street3.fill(dataacct.street3)
        await this.city3.fill(dataacct.city3)
        await this.state3.fill(dataacct.state3)
        await this.postalcode3.fill(dataacct.postalcode3)
        await this.country3.fill(dataacct.country3)
        await this.officephone2.fill(dataacct.officephone2)
        await this.fax2.fill(dataacct.fax2)
        await this.street4.fill(dataacct.state4)
        await this.city4.fill(dataacct.city4)
        await this.state4.fill(dataacct.state4)
        await this.postalcode4.fill(dataacct.postalcode4)
        await this.country4.fill(dataacct.country4)
        await this.description3.fill(dataacct.description3)
        await this.assignedto.fill(dataacct.assignedto)
        await this.type2.selectOption({label:dataacct.type2})
        await this.annualrevenue.fill(dataacct.annualrevenue)
        await this.memberof.fill(dataacct.memberof)
        await this.campaign3.fill(dataacct.campaign3)
        await this.industr2.selectOption({label:dataacct.industr2})
        await this.employee.fill(dataacct.employee)
    }

    async saveaccount()
    {
        await this.button.click();
    }
}
export default accountcreation