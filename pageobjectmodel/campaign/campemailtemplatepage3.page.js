class Createtemplateemail {
    constructor(page) {
        this.page = page;
        this.createnewtargetlist = page.locator('//input[@id="target_list_name"]')
        this.targetlisttype = page.locator('//select[@id="target_list_type"]')
        this.createbutton = page.locator('//input[@value="Create"]')
        this.nextb = page.locator('//input[@id="wiz_submit_finish_button"]')
    }
        async createcamptemplate(data){
            await this.createnewtargetlist.fill(data.createnewtargetlist);
            await this.targetlisttype.selectOption({label:data.targetlisttype});
            await this.createbutton.click();
        }
        async clicknext(){
            await this.nextb.click();
        }
        
}
export default Createtemplateemail