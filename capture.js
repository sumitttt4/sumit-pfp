const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        
        // 1200x630 is standard OG image size
        await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
        
        // Use prefers-color-scheme dark to ensure we get the dark mode layout
        await page.emulateMediaFeatures([
            { name: 'prefers-color-scheme', value: 'dark' }
        ]);

        await page.goto('http://localhost:3005', { waitUntil: 'networkidle0' });

        // Wait a bit for framer-motion animations to settle
        await new Promise(r => setTimeout(r, 2000));

        // Take a screenshot of the viewport (which is exactly 1200x630)
        await page.screenshot({ 
            path: 'src/app/opengraph-image.png',
            clip: { x: 0, y: 0, width: 1200, height: 630 }
        });

        await page.screenshot({ 
            path: 'src/app/twitter-image.png',
            clip: { x: 0, y: 0, width: 1200, height: 630 }
        });

        console.log("Screenshots captured successfully!");
        await browser.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
