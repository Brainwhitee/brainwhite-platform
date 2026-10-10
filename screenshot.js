const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log("Navigating...");
  await page.goto('https://kodeimmersive.com/', { waitUntil: 'networkidle2' });
  console.log("Taking screenshot...");
  await page.screenshot({ path: 'kodeimmersive.png' });
  
  console.log("Done");
  await browser.close();
})();
