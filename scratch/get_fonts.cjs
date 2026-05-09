const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://h2vmedia.com/');
  const fonts = await page.evaluate(() => {
    return {
      h1: window.getComputedStyle(document.querySelector('h1')).fontFamily,
      body: window.getComputedStyle(document.body).fontFamily
    };
  });
  console.log(JSON.stringify(fonts));
  await browser.close();
})();
