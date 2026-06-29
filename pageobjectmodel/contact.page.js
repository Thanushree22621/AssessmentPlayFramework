import { expect } from "playwright/test";
import Contactaccountlookup from "./contactaccountlookup.page";

class Createcontact {
    constructor(page) {
        this.page = page;
         this.Alllink = page.locator('//a[text()="All"]');
         this.contactslink = page.locator('//a[text()="Contacts"]');
         this.createcontactlink = page.locator('//div[text()="Create Contact"]');
         this.firstname = page.locator('#first_name');
         this.jobtitle = page.locator('#title');
         this.lastname = page.locator('#last_name');
         this.department = page.locator('#department');
         this.accountname = page.locator('#account_name');
         this.accountnamebutton = page.locator('//button[@id="btn_account_name"]')
         this.adress = page.locator('#primary_address_street');
         this.leadsource = page.locator('#lead_source');
         this.reportsto = page.locator('#report_to_name');
         this.savebutton = page.locator('#SAVE');
    }
    async navigatetocontact(){
        await this.Alllink.click()
        await this.contactslink.nth(3).click();
        await this.createcontactlink.click();
    }
    async contactfillform(data){
        await this.firstname.fill(data.firstname);
        await this.jobtitle.fill(data.jobtitle);
        await this.lastname.fill(data.lastname);
        await this.department.fill(data.department);
       // await this.accountname.fill(data.accountname);
        await this.adress.fill(data.adress);
        await this.leadsource.selectOption({label:data.leadsource});
        await this.reportsto.fill(data.reportsto);
        
    }
    async accountlookupincontact(accountName){
        
             const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.accountnamebutton.click()
        ]);
        const contactlookupobj = new Contactaccountlookup(popup);
        await contactlookupobj.selectaccount(accountName);
        await this.page.bringToFront();
        await expect(this.accountname).toHaveValue(accountName);

  
    }
    async contactsave(){
        await this.savebutton.nth(0).click();
    }
}
export default Createcontact;