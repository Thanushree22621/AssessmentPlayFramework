class Leaddetailspage {
    constructor(page) {
        this.page=page;

        //Actions dropdown
        this.actiondropdown = page.locator('//a[text()="ACTIONS"]')

        //store all the options of action dropdown
        this.convertleadoption = page.locator('//input[@id="convert_lead_button"]')
    }
        async clickconvertleadbyindex(){
            await this.actiondropdown.click();
            await this.convertleadoption.click();
           // await this.convertleadoption.nth(4).click();  
    }
}
export default Leaddetailspage