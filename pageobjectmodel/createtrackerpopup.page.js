class createtrackerpopup {
    constructor(page) {
        this.page = page;
        this.templatebox = page.locator('//div[@id="templateManagerDialog"]')
        this.trackerlinktext = page.locator('//input[@id="url_text"]')
        this.trackerurl = page.locator('//input[@id="tracker_url_add"]')
        this.createtrackerbtn = page.locator('//input[@id="templateManagerActionOK"]')
    }
    async waitforpopup(){
        await this.templatebox.waitFor({status: 'visible'});
    }
    async entertrackername(){
        await this.trackerlinktext.fill(name);
    }
    async Clicktrackerbtn(){
        await this.clicktrackerbtn.click();
    }
}
export default createtrackerpopup