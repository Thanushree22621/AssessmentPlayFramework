import {test,expect} from '@playwright/test';
import POManager from '../../pageobjectmodel/pomManager.page';
const data = require("../../testdata/leaddata.json");
import { 
    generateuniquelead,
    generateuniquecampaign
 } from "../../util/datalead.js";
 

test.describe('system tests', ()=>{
    let loginpage, leadpage, leaddetailspage, convertlead, productpage, campaignheadern, campaigntarget, campaigntemplate, campaigndetail ;
    test.beforeEach('',async({page})=>{
        const pom = new POManager(page);
     loginpage = pom.getloginapp();
     leadpage = pom.getcreatelead();
     leaddetailspage = pom.getLeaddetailspage();
     convertlead = pom.getConvertlead();
     productpage = pom.getCreateproduct();
     campaignheadern = pom.getCreatecampaignheader();
     campaigntarget = pom.getCreatetargetemail2();
     campaigntemplate = pom.getCreatetemplateemail();
     campaigndetail = pom.getCampaigndetail();

      //login
    await loginpage.navigate();
     await loginpage.login(
        data.login.username,
        data.login.password
    );

    })
test('System test-convert lead flow', async({page})=>{
   

    //create  unique lead
     const uniquelead = generateuniquelead(data.smoke.leads[0]);

    //create lead
    await leadpage.navigatetocreatelead();
    await leadpage.fillleadform(uniquelead);
    await leadpage.savelead();

    //wait for details page
    await page.waitForURL(/Leads/);

    //click convert lead
    await leaddetailspage.clickconvertleadbyindex();

   // wait for convert page
   await page.waitForURL(/ConvertLead/)

    //fill convert lead
    await convertlead.createopporchkbox(data.system.convertlead[0]);

    //convert save button
    await convertlead.savebutton();

    //validation example
    await expect(page).toHaveURL(/suiteondemand/);
});

test('create product', async ({page}) => {
    await productpage.navigatetoproductpage();
    await productpage.productfillform(data.system.productpage[0])
    await productpage.savebut();
});


test('generate lead in campaign an convert the lead into account, and opporutinity and save',async ({page}) => {
    
    const basecampaign = data.integration.campaign[0];
    const campaign = generateuniquecampaign(basecampaign);

    const campaignName = campaign.header.nametextfield;
     
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

     //create  unique lead
     const uniquelead = generateuniquelead(data.smoke.leads[0]);

    //create lead
    await leadpage.navigatetocreatelead();
    await leadpage.fillleadform(uniquelead);
    await leadpage.savelead();

    //wait for details page
    await page.waitForURL(/Leads/);

    //click convert lead
    await leaddetailspage.clickconvertleadbyindex();

   // wait for convert page
   await page.waitForURL(/ConvertLead/)

    //fill convert lead
    await convertlead.createopporchkbox(data.system.convertlead[0]);

    //convert save button
    await convertlead.savebutton();

    //validation example
    await expect(page).toHaveURL(/suiteondemand/);

})
});
