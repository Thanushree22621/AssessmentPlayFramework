class Createtask {
    constructor(page) {
        this.page = page;
        this.Alllink = page.locator('//a[text()="All"]');
        this.task = page.locator('//a[text()="Tasks"]');
        this.createtask = page.locator('//div[text()="Create Task"]');
        this.subject = page.locator('//input[@id="name"]')
        this.statusdropdown = page.locator('#status');
        this.retaledtodropdown = page.locator('#parent_type');
        this.contactname = page.locator('#contact_name');
        this.prioritydropdown = page.locator('#priority');
        this.description = page.locator('#description');
        this.save = page.locator('#SAVE');

    }
    async createtaskfunction(){
        await this.Alllink.click();
        await this.task.nth(1).click();
        await this.createtask.click();
    }
    async taskfillform(data){
        await this.subject.fill(data.subject);
        await this.statusdropdown.selectOption({label:data.statusdropdown});
        await this.retaledtodropdown.selectOption({label:data.retaledtodropdown});
        await this.contactname.fill(data.contactname);
        await this.prioritydropdown.selectOption({label:data.prioritydropdown});
        await this.description.fill(data.description);
        
    }
    async tasksavebutton(){
        await this.save.nth(1).click();
    }

}
export default Createtask