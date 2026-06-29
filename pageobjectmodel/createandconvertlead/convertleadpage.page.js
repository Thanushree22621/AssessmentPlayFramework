class Convertlead {
    constructor(page) {
        this.page = page;
       
        //create opportunity
        //this.createnotechkbox = page.locator('//input[@id="newNotes"]');
        this.createopportuchkbox = page.locator('//input[@id="newOpportunities"]')
        this.opportunityname = page.locator('//input[@id="Opportunitiesname"]');
        this.salesstagedropdown = page.locator('//select[@id="Opportunitiessales_stage"]');
        this.currencydropdown = page.locator('//select[@id="currency_id_select"]');
        this.expecteddate = page.locator('//button[contains(@id, "Opportunitiesdate_closed_trigger")]');
       // this.expectedclosedate = page.locator('//td[not(contains(@class,"old")) and text()="9"]');
       // const today = new Date().getDate();
        //this.expectedclosedate = page.getByRole('link', {name : `${today}` });
        this.convertsavebtn = page.locator('//input[@id="SAVE_FOOTER"]')
    }

    async createopporchkbox(data){
        const today = new Date().getDate();
        await this.createopportuchkbox.check();
        await this.opportunityname.fill(data.opportunityname);
        await this.salesstagedropdown.selectOption({ label:'Qualification'});
        await this.currencydropdown.selectOption({label:'US Dollar : $'});
        await this.expecteddate.click();
       // await this.expectedclosedate.waitFor({state: 'visible'});
       // await this.page.getByRole('link', {name: `${today}` }).nth(1).click();
        await this.page.locator(`//td[normalize-space()='${today}']`).first().click();
    }

    async savebutton(){
        return this.convertsavebtn.click();
    }
}
export default Convertlead;