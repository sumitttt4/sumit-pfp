const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        
        page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
        page.on('pageerror', error => console.error('BROWSER ERROR:', error.message));

        await page.goto('http://localhost:3005', { waitUntil: 'networkidle0' });
        
        await new Promise(r => setTimeout(r, 2000));
        
        const content = await page.content();
        console.log("has content length: " + content.length);
        
        await browser.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
