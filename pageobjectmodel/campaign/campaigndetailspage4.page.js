class Campaigndetail {
    constructor(page) {
        this.page = page;
        this.viewdetailsbutton = page.locator('//a[text()="View Details"]');

        this.Alllink1 = page.locator('//a[text()="All"]');
        this.campaignlink1 = page.locator('//a[text()="Campaigns"]');
        this.createcampaignbutton1 = page.locator('//div[text()="Create Campaign"]');
        this.searchbuttonicon = page.locator('//button[@id="searchbutton"]');
        this.searchtextfield = page.locator('//input[@id="query_string"]');
        this.multidropdown = page.locator('//select[@id="search-query-modules"]');
        this.searchbutton = page.locator('//input[@class="button primary"]');
    }
    async clickviewdetail(){
        await this.viewdetailsbutton.click();
    }
    async capaigngoback()
{
    await this.Alllink1.click();
        await this.campaignlink1.nth(1).click();
        await this.createcampaignbutton1.click();
        await this.searchbuttonicon.click();
        await this.searchtextfield.fill("campaign detail");
        await this.multidropdown.selectOption('Leads');
        await this.searchbutton.click();

}
}
export default Campaigndetail