import { expect } from '@playwright/test';
import campaignlookup from "../campaignlookup.page"
class createlead {
    constructor(page) {
        this.page = page
        
        this.salesbutton1 = page.locator('//a[text()="Sales"]')
        this.leadbutton = page.locator('(//a[@id="moduleTab_6_Leads"])[1]')
        this.createleadlink = page.locator('//div[text()="Create Lead"]')

        this.titledropdown = page.locator('//select[@id="salutation"]')
        //await this.titledropdown.selectOption({index:2})
        this.firstname = page.locator('//input[@id="first_name"]')
        this.lastname = page.locator('//input[@id="last_name"]')

        this.jobtitle = page.locator('//input[@id="title"]')
        this.department = page.locator('//input[@id="department"]')

        this.accountname = page.locator('//input[@name="account_name"]')

        this.officephone = page.locator('//input[@id="phone_work"]')
        this.mobile = page.locator('//input[@id="phone_mobile"]')
        this.faxphone = page.locator('//input[@id="phone_fax"]')

        this.website = page.locator('//input[@id="website"]')

        this.primary = page.locator('//textarea[@id="primary_address_street"]')
        this.city = page.locator('//input[@id="primary_address_city"]')
        this.state = page.locator('//input[@id="primary_address_state"]')
        this.postalcode = page.locator('//input[@id="primary_address_postalcode"]')
        this.country = page.locator('//input[@id="primary_address_country"]')

        this.email = page.locator('//input[@id="Leads0emailAddress0"]')
        this.description = page.locator('//textarea[@id="description"]')

         this.secondary = page.locator('//textarea[@id="alt_address_street"]')
         this.city2 = page.locator('//input[@id="alt_address_city"]')
         this.state2 = page.locator('//input[@id="alt_address_state"]')
         this.postalcode2 = page.locator('//input[@id="alt_address_postalcode"]')
         this.country2 = page.locator('//input[@id="alt_address_country"]')

         this.status = page.locator('//select[@id="status"]')
         this.statusdescription = page.locator('//textarea[@id="status_description"]')

         this.opportunityamount = page.locator('//input[@id="opportunity_amount"]')
        
         //campaign section
         this.campaign = page.locator('//input[@id="campaign_name"]')
         this.campaignLookupbtn = page.locator("//input[@id='campaign_name']/following::button[contains(@title,'Select')]");
        
         this.leadsource = page.locator('//select[@id="lead_source"]')
         this.leadsrcdescription = page.locator('//textarea[@id="lead_source_description"]')

         this.refferedby = page.locator('//input[@id="refered_by"]')
         this.assignedto = page.locator('//input[@id="assigned_user_name"]')

         this.savebtn = page.locator('//input[@id="SAVE"]').first()
        
    }
    async navigatetocreatelead()
    {
        await this.salesbutton1.click()
        await this.leadbutton.click()
        await this.createleadlink.click()
    }

    //form filling(main method)
    async fillleadform(data)
    {
        await this.titledropdown.selectOption({index:2});
        await this.firstname.fill(data.firstName)
        await this.lastname.fill(data.lastName)

        await this.jobtitle.fill(data.jobTitle)
        await this.department.fill(data.department)
        await this.accountname.fill(data.accountName)
        await this.officephone.fill(data.officePhone)
        await this.mobile.fill(data.mobile)
        await this.faxphone.fill(data.faxphone)
        await this.website.fill(data.website)
        await this.primary.fill(data.primary)
        await this.city.fill(data.city)
        await this.state.fill(data.state)
        await this.postalcode.fill(data.postalCode)
        await this.country.fill(data.country)
        await this.email.fill(data.email)
        await this.description.fill(data.Description)
        await this.secondary.fill(data.Secondary)
        await this.city2.fill(data.city2)
        await this.state2.fill(data.state2)
        await this.postalcode2.fill(data.postalCode2)
        await this.country2.fill(data.country2)
        await this.status.selectOption({label:data.status})
        await this.statusdescription.fill(data.statusDescription)
        await this.opportunityamount.fill(data.opportunityAmount)
       
        await this.leadsource.selectOption({label:data.leadSource})
        await this.leadsrcdescription.fill(data.leadsrcDescription)
        await this.refferedby.fill(data.refferedby)
        await this.assignedto.fill(data.assignedto)

    }

    
    async selectCampaignfromlookup(campaignName)
    {
        const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.campaignLookupbtn.nth(0).click()
        ]);

        const campaignlookupobj = new campaignlookup(popup);
        await campaignlookupobj.selectcampaign(campaignName);
       await expect(this.page.locator('//input[@id="campaign_name"]'))
        .toHaveValue(campaignName);
    }

    async savelead()
    {
        await this.page.waitForTimeout(2000);
        await this.savebtn.click();
    }

}
export default createlead;