class Createcampaignheader {
    constructor(page) {
        this.page = page;
        this.Alllink = page.locator('//a[text()="All"]');
        this.campaignlink = page.locator('//a[text()="Campaigns"]');
        this.createcampaignbutton = page.locator('//div[text()="Create Campaign"]');
        this.nonemailicon = page.locator('a[title*="A non email campaign"]');
        this.nametextfield = page.locator('//input[@id="name"]')
        this.statusdropdown = page.locator('//select[@id="status"]')
        this.typedropdown = page.locator('//select[@id="campaign_type"]')
        this.description22 = page.locator('//textarea[@id="wiz_content"]')
        this.nextbutton = page.locator('//input[@id="wiz_next_button"]')
    }

    async campaignclicking(){
        await this.Alllink.click();
        await this.campaignlink.nth(1).click();
    }
    async campaignclicking2(){
        await this.createcampaignbutton.click();
        await this.nonemailicon.click();
    }
    
    async campaignheader(data){
        await this.nametextfield.fill(data.nametextfield);
        await this.statusdropdown.selectOption({label:data.statusdropdown});
        await this.typedropdown.selectOption({label:data.typedropdown});
        await this.description22.fill(data.description22);

    }
    async clicknextbutton(){
        await this.nextbutton.click();
    }
       
    
}
export default Createcampaignheader