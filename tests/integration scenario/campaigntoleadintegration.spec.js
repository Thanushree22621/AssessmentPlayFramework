import { test, expect} from '@playwright/test';
import POManager from '../../pageobjectmodel/pomManager.page.js';


//json import
const data = require('../../testdata/leaddata.json');

//util import
import { 
    generateuniquelead,
    generateuniquecampaign,
    generateuniqueaccount
 } from "../../util/datalead.js";
 
 test.describe('system tests', ()=>{
    let loginpage, campaignheadern, campaigntarget, campaigntemplate, campaigndetail, leadpage, contactpage, accountpage;
     test.beforeEach('',async({page})=>{
     const pomManager = new POManager(page);
        loginpage = pomManager.getloginapp();
        campaignheadern = pomManager.getCreatecampaignheader();
        campaigntarget = pomManager.getCreatetargetemail2();
        campaigntemplate = pomManager.getCreatetemplateemail();
        campaigndetail = pomManager.getCampaigndetail();
        leadpage = pomManager.getcreatelead();
        contactpage = pomManager.getCreatecontact();
        accountpage = pomManager.getaccountcreation();

        //login
         await loginpage.navigate();
        await loginpage.login(
        data.login.username,
        data.login.password
        );
        


     });
test('Integration: create campaign and link lead', async({page})=>{
    
    //
    //pages from pom manager
    //
   
    //testdata (dynamic)
    const baselead = data.smoke.leads[0];
    const lead = generateuniquelead(baselead);

    const basecampaign = data.integration.campaign[0];
    const campaign = generateuniquecampaign(basecampaign);

    const campaignName = campaign.header.nametextfield;

        
    // step2:creating campaign(campaign header)
    await campaignheadern.campaignclicking();
    await campaignheadern.campaignclicking2();
    await campaignheadern.campaignheader(campaign.header);
    await campaignheadern.clicknextbutton();

    //step4:target
    await campaigntarget.createtargetemail(campaign.target);
    await campaigntarget.clicknextbutto();

    //step5:template
    await campaigntemplate.createcamptemplate(campaign.template);
    await campaigntemplate.clicknext();

    //step6:campaign detail
    await campaigndetail.clickviewdetail();

    //step2:create lead
    await leadpage.navigatetocreatelead();
    await leadpage.fillleadform(lead);

    //campaign lookup 
    await leadpage.selectCampaignfromlookup(campaignName);

    await leadpage.savelead();

    //go back to campaign
    await campaignheadern.campaignclicking();
    const campaignRow = page.locator('table tbody tr', {hasText: campaignName});

    await expect(campaignRow).toBeVisible();

});
test('create account and contact save,then check account linked to contact ',async ({page}) => {
   
    const account = generateuniqueaccount(data.smoke.accounts[0]);
    const accountName = account.name;

    // account creation
    await accountpage.navigatetocreateaccount();
    await accountpage.fillaccountform(account);
    await accountpage.saveaccount();
    //contact creation
    await contactpage.navigatetocontact();
    await contactpage.contactfillform(data.integration.contact[0]);

    //link account 
    await contactpage.accountlookupincontact(accountName)
    await contactpage.contactsave();
})
 });