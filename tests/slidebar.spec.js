import {test} from '@playwright/test'
test("",async ({page}) => {
    await page.goto("https://www.w3schools.com/howto/howto_css_table_responsive.asp")
    await page.waitForLoadState('domcontentloaded');
     const scrollContainer = page.locator("//div[@style='overflow-x:auto;']");
      await scrollContainer.scrollIntoViewIfNeeded();
        await page.waitForTimeout(5000); 
       
     await scrollContainer.evaluate(el => {
       
        el.scrollLeft += 300;
    
  });
await page.waitForTimeout(5000)
})

