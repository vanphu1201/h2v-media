const { chromium } = require('playwright');

async function analyzeSite(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  
  const data = await page.evaluate(() => {
    const getStyle = (el, prop) => el ? window.getComputedStyle(el)[prop] : null;
    return {
      h1: {
        font: getStyle(document.querySelector('h1'), 'fontFamily'),
        size: getStyle(document.querySelector('h1'), 'fontSize'),
        color: getStyle(document.querySelector('h1'), 'color')
      },
      body: {
        font: getStyle(document.body, 'fontFamily'),
        bg: getStyle(document.body, 'backgroundColor'),
        color: getStyle(document.body, 'color')
      },
      accent: getStyle(document.querySelector('button, .btn, a.active'), 'backgroundColor'),
      sections: Array.from(document.querySelectorAll('section')).slice(0, 3).map(s => ({
        padding: getStyle(s, 'padding'),
        bg: getStyle(s, 'backgroundColor')
      }))
    };
  });
  
  await browser.close();
  return data;
}

(async () => {
  const goda = await analyzeSite('https://godamedia.vn/');
  const h2v = await analyzeSite('https://h2vmedia.com/');
  console.log('GODA:', JSON.stringify(goda, null, 2));
  console.log('H2V:', JSON.stringify(h2v, null, 2));
})();
