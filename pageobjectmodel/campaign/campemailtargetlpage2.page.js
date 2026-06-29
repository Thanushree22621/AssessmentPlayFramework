class Createtargetemail2 {
    constructor(page) {
        this.page = page;
        this.budget = page.locator('//input[@id="budget"]')
        this.expectedrevenue = page.locator('//input[@id="expected_revenue"]')
        this.currencydropdown = page.locator('//select[@id="currency_id"]')
        this.actualcost = page.locator('//input[@id="actual_cost"]')
        this.expectedcost = page.locator('//input[@id="expected_cost"]')
        this.descriptiontextarea = page.locator('//textarea[@id="objective"]')
        this.nextbutto = page.locator('//input[@id="wiz_next_button"]')
    }
        async createtargetemail(data){
            await this.budget.fill(data.budget);
            await this.expectedrevenue.fill(data.expectedrevenue);
            await this.currencydropdown.selectOption({label:data.currencydropdown})
            await this.actualcost.fill(data.actualcost);
            await this.expectedcost.fill(data.expectedcost);
            await this.descriptiontextarea.fill(data.descriptiontextarea);

        }
        async clicknextbutto(){
            await this.nextbutto.click();
        }
    
}
export default Createtargetemail2