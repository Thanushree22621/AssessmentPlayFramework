
class campaignlookup {
    constructor(page) {
        this.page = page
        
        this.name = page.locator('//input[@id="name_advanced"]')
       // this.typedropdown = page.locator('(//select[@id="campaign_type_advanced"]/option)[3]')
       // this.status = page.locator('(//select[@id="status_advanced"]')
        
        this.searchbtn = page.locator('//input[@id="search_form_submit"]')
       
    
      //  this.startdate = page.locator('//button[@id="start_date_advanced_trigger"]')
        
        
    } 
    async selectcampaign(campaignName)
    {
         await this.name.fill(campaignName);
        
        await this.searchbtn.click();
        const result =  this.page.locator(`//table//a[contains(text(),"${campaignName}")]`);
         await result.first().waitFor({state:'visible'});
        await result.first().click();
        
        if(!this.page.isClosed()){
            await this.page.close();
        }
        

    }
   /* async selecttodaydate()
    {
        await this.startdate.click();
        const today = new Date().getDate();
        await this.page.locator(`//td[contains(@class,'day') and text()='${today}']`).click();
    }*/
}
export default campaignlookup;
