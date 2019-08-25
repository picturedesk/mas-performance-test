const puppeteer = require('puppeteer');
const testPage = require('./pup-testing');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        cache: false
        // devtools: true
    });
    const traditionalPage = await browser.newPage();
    console.log(await testPage(traditionalPage, 'traditional-measure'));
    await traditionalPage.close();
    const HeadlessPage = await browser.newPage();
    console.log(await testPage(HeadlessPage, 'headless-measure'));
    await HeadlessPage.close();
    await browser.close();
})();
