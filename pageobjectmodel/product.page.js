class Createproduct {
    constructor(page) {
        this.page = page;
        this.Alllink = page.locator('//a[text()="All"]');
        this.productlink = page.locator('//a[text()="Products"]')
        this.createproductlink = page.locator('//div[text()="Create Product"]');
        this.productname = page.locator('#name');
        this.productcategory = page.locator('#aos_product_category_name');
        this.partnumber = page.locator('#part_number');
        this.currencydropdown = page.locator('#currency_id_select');
        this.cost = page.locator('#cost');
        this.producttypedropdown = page.locator('#type');
        this.contact = page.locator('#contact');
        this.price = page.locator('#price');
        this.description = page.locator('#description');
        this.savebutton = page.locator('#SAVE');

    }
    async navigatetoproductpage(){
        await this.Alllink.click();
        await this.productlink.click();
        await this.createproductlink.click();
    }
    async productfillform(data){
        await this.productname.fill(data.productname);
        await this.productcategory.fill(data.productcategory)
        await this.partnumber.fill(data.partnumber)
        await this.currencydropdown.selectOption({label:data.currencydropdown});
        await this.cost.fill(data.cost)
        await this.producttypedropdown.selectOption({label:data.producttypedropdown})
        await this.contact.fill(data.contact)
        await this.price.fill(data.price)
        await this.description.fill(data.description)

    }
    async savebut(){
        await this.savebutton.nth(1).click();
    }
}
export default Createproduct;