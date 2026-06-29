class assignedtolookup {
    constructor(page) {
        this.page = page;
        this.selectbutton = page.locator('button')
        this.administrator = page.locator('//a[text()="Administrator"]')
        
    }
    async Assignedtolookup()
    {
        await this.selectbutton.click();
        await this.administrator.hover()
        await this.administrator.click()

    }
}
export default assignedtolookup