
import accountlookup from './accountlookup.page.js'
import campaignlookup from './campaignlookup.page.js'

class createopportunities {
    constructor(page) {
        this.page = page
        this.salesbutton3 = page.locator('//a[text()="Sales"]')
        this.opportunities = page.locator('(//a[@id="moduleTab_6_Opportunities"])[1]')
        this.createopportunities = page.locator('//div[text()="Create Opportunity"]')

        this.opportunityname = page.locator('//input[@id="name"]')
        this.currency = page.locator('//select[@id="currency_id_select"]')
        this.opportunityamount = page.locator('//input[@id="amount"]')
        this.salesstage = page.locator('//select[@id="sales_stage"]')
        this.probability = page.locator('//input[@id="probability"]')

        this.accountname = page.locator('//input[@id="account_name"]')
        this.accontnamearrowicon = page.locator('(//input[@id="account_name"]/following-sibling::span//button)[1]')

        this.expectedclosedate = page.locator('//input[@id="date_closed"]')
        this.expectedicon = page.locator('#container_date_closed_trigger_c')

         // Example: calendar date (dynamic later)
        this.calendarDate = (date) => page.locator(`//td[text()='${date}']`);

        this.type = page.locator('//select[@id="opportunity_type"]')
        this.leadsource = page.locator('//select[@id="lead_source"]')

        this.campaign = page.locator('//input[@id="campaign_name"]')
        this.campaignarrowicon = page.locator('//input[@id="campaign_name"]/following-sibling::span//button')

        this.nextstep = page.locator('//input[@id="next_step"]')
        this.description4 = page.locator('//textarea[@id="description"]')

        this.assignedto = page.locator('//input[@id="assigned_user_name"]')
        this.assignedtoarrowicon = page.locator('(//input[@id="assigned_user_name"]/following-sibling::span//button)[1]')

         this.savebutton3 = page.locator('(//input[@id="SAVE"])[2]')
    }
    async opportunityclick(){
      await this.salesbutton3.click();
      await this.opportunities.click();
      await this.createopportunities.click();
    }
    async opportunitiesfillform(data){
      await this.opportunityname.fill(data.opportunityname);
      await this.currency.selectOption({lable:data.currency});
      await this.opportunityamount.fill(data.opportunityamount);
      await this.salesstage.selectOption({lable:data.salesstage});
      await this.probability.fill(data.probability);
      await this.accountname.fill(data.accountname);
      await this.type.selectOption({lable:data.type});
      await this.leadsource.selectOption({label:data.leadsource});
      await this.campaign.fill(data.campaign);
      await this.nextstep.fill(data.nextstep);
      await this.description4.fill(data.description4);
      await this.assignedto.fill(data.assignedto);


    }
    async savebuttonopportunity(){
      await this.savebutton3.click();
    }
    //for accountname arrowicon(account lookup)
         /* async selectaccount(accountarrow)
          {
            const [newpage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                this.accontnamearrowicon.click()
            ])
            await newpage.waitForLoadState();
            
            const Popup = new accountarrowpopup(newpage)
            await Popup.sdce(accountarrow)

            await newpage.close()
            await this.page.bringToFront();

}
  //  for calender --Action: fill directly
  async fillDate(date) {
    await this.expectedclosedate.fill(date);
  }

  // for calender --Action: select from calendar
  async selectDateFromCalendar(date) {
    await this.expectedicon.click();
    await this.calendarDate(date).click();
    }

    //for campaign textfield arrowicon
async selectcampaign(campaignName)
{
    const [newpage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.campaignarrowicon.click()
    ])
    await newpage.waitForLoadState();
    await newpage.locator('//a[text()=`${campaignName}`]').click()

 if (!newPage.isClosed()) {
    await newPage.close();
  }

  await this.page.bringToFront();
}

//for assigned to textfield arrow icon
async selectassignedto(assignedto){
    const [newpage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.assignedtoarrowicon.click()
    ])
    await newpage.waitForLoadState();
    await newpage.locator('//atext()=`${assignedto}`]').click()
 if (!newPage.isClosed()) {
    await newPage.close();
  }

  await this.page.bringToFront();
 }*/





}
export default createopportunities
