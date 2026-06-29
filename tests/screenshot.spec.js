import {test,expect} from "@playwright/test"
test("image menu bar",async ({page}) => {
  await page.getByText('Image').click()
//await page.locator('//title[text()="DemoApps | Qspiders | Image"]//following::a[text()="Clickable Image"]').click()

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

  //  Use Promise.all ONLY here (correct place)
  const [buffer1, buffer2] = await Promise.all([
    image1.screenshot(),
    image2.screenshot()
  ]);


})
