import {test,expect} from "@playwright/test";
import { hasUncaughtExceptionCaptureCallback } from "process";
test.beforeEach(async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui');
});
test("first test",async ({page}) => {
   // const browser = await chromium.launch();

  
   await page.locator('//input[@name="name"]').fill("shrihari")
   await page.locator('//input[@name="email"]').fill("shrihari@gmail.com")
   await page.locator('//input[@name="password"]').fill("hello123")
   await page.locator('//button[text()="Register"]').click()
   //await page.goto("https://demoapps.qspiders.com/ui/login")
    await expect(page).toHaveURL(/login/)
   await page.getByPlaceholder('Enter your email').fill("shrihari@gmail.com")
   await page.getByPlaceholder('Enter your password').fill("hello123")
   await page.getByRole('button',{name:'Login'}).click()
})
   // await page.waitForLoadState('networkidle');

   //button menu bar
test("button menu bar",async ({page}) => {
  await page.getByText('Button').first().click()
  await page.getByText('yes').click()
})
test("link menu bar",async ({page}) => {
  


  await page.getByText('link').click()
  //await page.locator('//a[@id="men"]')
  await expect(page).toHaveURL(/men/)
 // await page.locator('//a[@id="men"]').click()
  await page.mouse.wheel(0,500)
  await page.mouse.wheel(0,-500)
 // await page.goBack();
 // await page.waitForLoadState('domcontentloaded') 
 // await page.locator('//a[text()="Payments"]').click()
  
})


//checkbox menu bar
test("checkbox menu bar",async ({page}) => {
  

  //await page.waitForLoadState('domcontentloaded')
  await page.getByText('Check Box').click()
 //email checkbox
  const emailcheckbox = page.locator('//span[text()="Email"]/preceding-sibling::input[@type="checkbox"]')
  await emailcheckbox.check()
  await expect(emailcheckbox).toBeChecked()
 
  await emailcheckbox.uncheck()
  await expect(emailcheckbox).not.toBeChecked()
  //watsapp checkbox
  const watsappcheckbox =  page.locator('//span[text()="WhatsApp"]/preceding-sibling::input[@type="checkbox"]')
  await watsappcheckbox.check()
  await expect(watsappcheckbox).toBeChecked()
  await watsappcheckbox.uncheck()
  await expect(watsappcheckbox).not.toBeChecked()
  //messagecheckbox
  const messagecheckbox=await page.locator('//span[text()="Message"]/preceding-sibling::input[@type="checkbox"]')
  const isenabled=await messagecheckbox.isEnabled()
  if(isenabled)
  {
    await messagecheckbox.check()
await expect(await messagecheckbox).toBeChecked()
  
await messagecheckbox.uncheck()
await expect(await messagecheckbox).not.toBeChecked()
  }
//yahoo checkbox
const yahoocheckbox = page.locator('//span[text()="Yahoo"]/preceding-sibling::input[@type="checkbox"]')

await yahoocheckbox.check()
await expect(await yahoocheckbox).toBeChecked()

await yahoocheckbox.uncheck()
await expect(await yahoocheckbox).not.toBeChecked()
 await page.locator('//input[@value="Continue"]').click()

})
//radio button
test("radiobutton menu bar",async ({page}) => {
  await page.getByText('Radio Button').click()
 const cod = page.locator('//span[text()="Cash on Delivery"]/preceding-sibling::input[@type="radio"]')
  await cod.click()
 await expect(cod).toBeChecked()
  const od = page.locator('//span[text()="Office delivery"]/preceding-sibling::input[@type="radio"]')
  await od.click()
  //await expect(od).toBeChecked()
// await page.getByRole('button',{name:'Continue'}).click()

 await page.locator('//title[text()="DemoApps | Qspiders | Radio Buttons"]//following::a[text()="Disabled"]').click()
 const radiobuttonwallet = page.locator('//input[@type="radio" and @value="wallet"]')
//await expect(radiobuttonwallet).toBeDisabled()
await expect(radiobuttonwallet).toBeVisible()

 const disabled = await radiobuttonwallet.isDisabled()
console.log("wallet disabled",disabled)

const count = await radiobuttonwallet.count()
console.log("Count:", count)
 
})

test("image menu bar",async ({page}) => {
  await page.getByText('Image').click()
await page.locator('//title[text()="DemoApps | Qspiders | Image"]//following::a[text()="Clickable Image"]').click()

//await page.locator('//img[@src="/assets/women-ZriVcPAs.jpg"]').click()
//await page.getByRole('button',{name:"Add To Cart"}).hover()
const element = await page.locator('//a[text()="Clickable Image"]')
await element.waitFor()
await element.click()
const image1 = page.locator('//h2[text()="Image-1"]/preceding-sibling::img[@alt="Image-1"]')
const image2 = page.locator('//h2[text()="Image-2"]/preceding-sibling::img[@alt="Image-2"]')
  await expect(image1).toBeVisible()
  await expect(image2).toBeVisible()
  
  

  // Ensure images are fully loaded
  await page.waitForFunction(() => {
    const imgs = document.querySelectorAll('img');
    return Array.from(imgs).every(img => img.complete && img.naturalWidth > 0);
  });

  // ✅ Use Promise.all ONLY here (correct place)
  const [buffer1, buffer2] = await Promise.all([
    image1.screenshot(),
    image2.screenshot()
  ]);


})

test("toggle-slider",async ({page}) => {

  await page.goto("https://demoapps.qspiders.com/ui/toggle?sublist=0")
  
 const toggle = page.locator('//label[@class="inline-flex items-center cursor-pointer"]')
/*for(let i=0;i<4;i++)
{
const tog = toggle.nth(i)
const checkbox = tog.locator('input')
 await toggle.click();
  await expect(checkbox).toBeChecked();

}*/
 await toggle.nth(0).click()
 
await toggle.nth(1).waitFor({state:'visible'});
 await toggle.nth(1).click()
 await toggle.nth(2).waitFor({state:'visible'});
 await toggle.nth(2).click()
 await toggle.nth(3).waitFor({state:'visible'});
 await toggle.nth(3).click()
//disabled toggle
await page.getByText('Disabled').click()
const toggoling = page.locator('//span[@class="relative bg-gray-300 rounded-full w-9 h-4 transition duration-300 ease-in-out"]').first()
const t = await expect(toggoling).toBeDisabled();
console.log(t)



})
test("slidebar",async ({page}) => {
  await page.getByText('Slider').click()
  const scrollContainer1 =  page.locator('//input[@id="slide"]')
  const box = await scrollContainer1.boundingBox();

await page.mouse.move(box.x + 5, box.y + box.height / 2);
await page.mouse.down();
await page.mouse.move(box.x + 150, box.y + box.height / 2);
await page.mouse.up();
  //await scrollContainer1.scrollIntoViewIfNeeded()
  //await scrollContainer1.evaluate(
    //el =>{
//el.scrollLeft -=200
    //}
 // )



})
test("dropdown",async ({page}) => {
  //single select
  await page.getByText('Dropdown').click()
  await page.locator('//select[@id="select3"]').selectOption('Canada');
  await page.locator('//select[@id="select3"]').selectOption('Germany');
  await page.locator('//select[@id="select3"]').selectOption('Poland');
//multiselect dropdown
await page.locator('//a[text()="Multi Select"]').click()

const multidrop = page.locator('//select[@id="select-multiple-native"]')
await expect(multidrop).toBeVisible()
await multidrop.selectOption([
{value:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'},
{value:'Mens Casual Premium Slim Fit T-Shirts'},
{value:'Mens Cotton Jacket'},
{value:"John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet"}])
await expect(multidrop).toBeVisible();
await page.locator('//button[text()="Add"]').click()
})


test("dailogs",async ({page}) => {
 
   const opt = await page.locator('//section[text()="Popups"]')
   await opt.waitFor({timeout:7000,state:"visible"})
   await opt.first().click();
 /* for(let opt of options)
  {let text = await opt.textContent();
    if(text.includes('Javascript'))
    { await opt.click()}
//npx playwright test tests/e2e1.spec.js
  }*/
   await page.getByText('Javascript').nth(0).click();
 await page.getByText('Confirm').first().click();
 await page.locator('//input[@type="checkbox"]').nth(0).check();
 //
 page.once("dialog",async (dialog) => {
  console.log(dialog.message());
 await dialog.accept();
});
//
 await page.locator('//button[text()="Delete"]').click();
 //prompt dialog
 await page.getByText('Prompt')
 await page.locator('//input[@type="checkbox"]').nth(0).check()
 page.once("dialog",async (dialog) => {
  console.log(dialog.message())
  await dialog.accept("abcde")
 })
 await page.getByRole("button",{name:"Delete"}).click()

 
});

//frames
test("iframes",async ({page}) => {
  await page.getByText('Frames').click()
 await page.getByText('iframes').click()
  const frame = await page.frames()
console.log(frame.length)
//npx playwright test tests/e2e1.spec.js
//nested frames
const wait1 = await page.locator('//a[text()="Nested iframe"]')
await wait1.waitFor({timeout:7000,state:"visible"})
await wait1.click()
const frame1 = await page.frames()
console.log(frame1.length)

//Multiple iframe
const wait2 = await page.locator('//a[text()="Multiple iframe"]')
await wait2.waitFor({timeout:7000,state:"visible"})
await wait2.click()
const frame2 = await page.frames()
console.log(frame2.length)

//Nested with Multiple iframe
const wait3 = await page.locator('//a[text()="Nested with Multiple iframe"]')
await wait3.waitFor({timeout:7000,state:"visible"})
await wait3.click()
const frame3 = await page.frames()
console.log(frame3.length)

//Window Alert Frame
const wait4 = await page.locator('//a[text()="Window Alert Frame"]')
await wait4.waitFor({timeout:7000,state:"visible"})
await wait4.click()
const frame4 = await page.frames()
console.log(frame4.length)

//one frame handling
await page.locator('//a[text()="Default"]').click()
const frame5 = await page.frameLocator('iframe.w-full.h-96')
await frame5.locator('#username').fill("Thanu")
await frame5.locator('#password').fill("Thanugowda25")
await frame5.locator('#submitButton').click()

//nested frames handling
await page.locator('//a[text()="Nested iframe"]').click()
const frame6 = await page.frameLocator('iframe').frameLocator('iframe')
await frame6.locator('//input[@id="email"]').fill("Admin@gmail.com")
await frame6.locator('//input[@id="password"]').fill("Admin@1234")
await frame6.locator('//input[@id="confirm-password"]').fill("Admin@1234")
await frame6.locator('#submitButton').click()

//multiple frames
await page.locator('//a[text()="Multiple iframe"]').click()
const frame7 = await page.frameLocator('iframe.w-full.h-96').nth(0)
await frame7.locator('//input[@id="email"]').fill("Admin@gmail.com")
await frame7.locator('//input[@id="password"]').fill("Admin@1234")
await frame7.locator('//input[@id="confirm-password"]').fill("Admin@1234")
await frame7.locator('//button[text()="Sign Up"]').click()
const frame8 = await page.frameLocator('iframe.w-full.h-96').nth(1)
await frame8.locator('//input[@id="username"]').fill("Thanu")
await frame8.locator('//input[@id="password"]').fill("Thanugowda25")
await frame8.locator('//button[@id="submitButton"]').click()

})
//uploading a file
test("uploading a file",async ({page}) => {
  await page.locator('//section[text()="Popups"]').click()
  await page.pause()
  await page.locator('//section[text()="File Uploads"]').click()
  await page.locator('//input[@id="fullName"]').fill("Thanu")
  await page.locator('#emailId').fill("Thanugowda25")
  await page.locator('//input[@id="password"]').fill("Thanugowda25")
  await page.locator('//input[@type="file"]').setInputFiles("C:/Users/Dell/Downloads/Thanushree_J_B_CV.pdf")
//npx playwright test tests/e2e1.spec.js


})
test("web table",async ({page}) => {
  //npx playwright test tests/e2e1.spec.js
  //tr[th[text()="Levis Shirt"]]/td[1]
  await page.getByText('Web Elements').hover()
  await page.getByText('Web Table').click()
  const row = await page.locator('tr',{hasText:"Levis Shirt"})
 const row1 = await row.innerText()
  const value = await page.locator('td').first().innerText()
  console.log(`${row1} and ${value}`)
  await page.getByRole('link',{name:"Dynamic Web Table"}).click()
  const row22 = await page.locator('tr',{hasText:"Levi's Shirt"})
  const row221 = await row22.locator('td').nth(0).innerText()
  const row222 = await row22.locator('td').nth(1).innerText()
  const row223 = await row22.locator('td').nth(2).innerText()
  const row224 = await row22.locator('td').nth(3).innerText()
console.log(`${row221} and ${row222} and ${row223} and ${row224}`)
//using column index
const rowdata = await page.locator('tbody tr')
for(let i=0;i<await rowdata.count();i++)
{
const value = await rowdata.nth(i).locator('td').nth(1).innerText()
console.log(value)
}
//using alltextcontents()
const rowdata1 = await page.locator('tbody tr')
const columndata = []
for(let i=0;i< await rowdata1.count();i++)
{
  columndata.push(await rowdata1.nth(i).locator('td').nth(1).innerText());
}
console.log(columndata)
//using header name dynamic
//step1 find column index using header
const header = await page.locator('th').allTextContents()

const coulmnindex = header.indexOf('Price')

//step2 get data using that index
const rows = await page.locator('tbody tr')
for(let i=0;i<await rows.count();i++)
{
const value1 = await rows.nth(i).locator('td').nth(coulmnindex).innerText()
console.log(value1)
}

})
test.only("form validation",async ({page}) => {
  //npx playwright test tests/e2e1.spec.js
  await page.getByText('Web Elements').hover()
  await page.getByText('FormValidation').click()

  const usn1 = await page.getByPlaceholder('What is your name?')
  await usn1.fill('Thanushree')
  await expect(usn1).toHaveValue('Thanushree')

  const pwd1 = await page.getByPlaceholder('Minimum 6 characters')
  await pwd1.fill('Thanushree@')
  await expect(pwd1).toHaveValue('Thanushree@')

  const email1 = await page.getByPlaceholder('Tell us your email id')
  await email1.fill('hello@gmail.com')
  await expect(email1).toHaveValue('hello@gmail.com')

  const mobile1 = await page.getByPlaceholder('Enter Your Mobile Number')
  await mobile1.fill('9876543210')
  await expect(mobile1).toHaveValue('9876543210')

  const dropdown1 = await page.locator('//select[@name="location"]')
  //await dropdown1.waitFor({state:"visible"})
  await dropdown1.selectOption('bg')
 // await expect(dropdown1).toHaveValue('Bangalore')
await expect(dropdown1.locator('option:checked'))
  .toHaveText('Bangalore');


})