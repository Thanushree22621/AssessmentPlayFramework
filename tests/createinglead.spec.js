import { test ,expect } from '@playwright/test';
import pomManager from '../pageobjectmodel/pomManager.page';
const data = JSON.parse(JSON.stringify(require("../testdata/leaddata.json")));



test.describe('smoke tests', ()=>{

let leadpage, accountpage, loginpage, opportunitypage, taskpage;

test.beforeEach(async ({page})=>{
    const pom = new pomManager(page);

     loginpage = pom.getloginapp();
     leadpage = pom.getcreatelead();
     accountpage = pom.getaccountcreation();
     opportunitypage = pom.getcreateopportunities();
     taskpage = pom.getCreatetask();

    //login
    await loginpage.navigate();
     await loginpage.login(
        data.login.username,
        data.login.password
    );
});  
        
test('create lead @smoke',async ({page}) => {
    //lead creation 3 steps
    //navigate
    await leadpage.navigatetocreatelead();

    //use json
    await leadpage.fillleadform(data.smoke.leads[0]);

    //save button
    await leadpage.savelead()
});

test('create account', async({page})=>{
    //account creation 3 steps
    //navigate
    await accountpage.navigatetocreateaccount();
    //use json
    await accountpage.fillaccountform(data.smoke.accounts[0]);
    //save button
    await accountpage.saveaccount();


    //validation
    //await expect(page).toHaveURL(/Accounts|Leads/);
});
test('create opportunity',async (page) => {
    //opportunity creation
    await opportunitypage.opportunityclick();
    //use json
    await opportunitypage.opportunitiesfillform(data.smoke.opportunities[0]);
    //save button
    await opportunitypage.savebuttonopportunity();
})
test('create task',async (page) => {
    //task creation
    await taskpage.createtaskfunction();
    //use json
    await taskpage.taskfillform(data.smoke.Task[0]);
    //save button
    await taskpage.tasksavebutton();
})





});

