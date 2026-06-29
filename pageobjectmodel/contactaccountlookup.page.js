class Contactaccountlookup {
    constructor(page) {
        this.page = page
        
        this.accountname = page.locator('//input[@id="name_advanced"]');
       
        this.searchbtn = page.locator('//input[@id="search_form_submit"]');
            
    } 
    async selectaccount(accountname)
    {
         await this.accountname.fill(accountname);
        
        await this.searchbtn.click();
        const result = this.page.locator(`//table//a[contains(text(),"${accountname}")]`);
         await result.first().waitFor({state:'visible'});
        await result.first().click();
        
        if(!this.page.isClosed()){
            await this.page.close();
        }
        

    }
   
}
export default Contactaccountlookup;
    
