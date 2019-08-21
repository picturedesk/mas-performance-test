const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { harFromMessages } = require('chrome-har');

// list of events for converting to HAR
const events = [];

// event types to observe
const observe = [
    'Page.loadEventFired',
    'Page.domContentEventFired',
    'Page.frameStartedLoading',
    'Page.frameAttached',
    'Network.requestWillBeSent',
    'Network.requestServedFromCache',
    'Network.dataReceived',
    'Network.responseReceived',
    'Network.resourceChangedPriority',
    'Network.loadingFinished',
    'Network.loadingFailed',
];

async function pupTesting(page, host) {
    fs.readdir(`screenshots-${host}`, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(`screenshots-${host}`, file), err => {
                if (err) throw err;
            });
        }
    });

    // register events listeners
    const client = await page.target().createCDPSession();
    await client.send('Page.enable');
    await client.send('Network.enable');
    observe.forEach(method => {
        client.on(method, params => {
            events.push({ method, params });
        });
    });

    await page.setViewport({
        width: 1920,
        height: 1080
    });

    const complete = [];

    complete.push(Date.now());
    await page.goto(`https://${host}.picturedesk.ch`, {waitUntil: 'networkidle2'});
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // ÜBER UNS
    // Kontakt
    complete.push(Date.now());
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.meta-nav a:nth-child(1)')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Über Uns
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(2) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(1) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Qualität
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(2) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(2) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Kooperation
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(2) a');
    await page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(3) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(3) ul li:nth-child(1) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Gesundheitsprogramme
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(2) a');
    await page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(3) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(3) ul li:nth-child(2) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Integrierte Versorgung
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(2) a');
    await page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(3) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(3) ul li:nth-child(3) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Kontakt
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(2) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(4) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Kongresse
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(2) a');
    await page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(5) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(5) ul li:nth-child(1) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // 2019, Traditionell vor Headless
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(2) a');
    await page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(5) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(2) ul li:nth-child(5) ul li:nth-child(2) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // SPITAL / KLINIK
    complete.push(Date.now());
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(3) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // APOTHEKEN
    complete.push(Date.now());
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(4) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Ärzte / Zahnärzte
    // Ärzte / Zahnärzte
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(5) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(5) ul li:nth-child(1) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // TARMED
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(5) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(5) ul li:nth-child(2) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Ärzte
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(5) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(5) ul li:nth-child(3) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Ärztenetzwerke
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(5) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(5) ul li:nth-child(4) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Hausärzte
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(5) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(5) ul li:nth-child(5) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // Zweitmeinungsarzt
    complete.push(Date.now());
    await page.click('.navbar-nav > li:nth-child(5) a');
    await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.click('.navbar-nav > li:nth-child(5) ul li:nth-child(6) a')
    ]);
    complete.push(Date.now()-complete.pop());
    await page.screenshot({path: `screenshots-${host}/screenshot${complete.length}.png`});
    console.log(complete);

    // convert events to HAR file
    // const har = harFromMessages(events);
    // await promisify(fs.writeFile)(`network-${host}.har`, JSON.stringify(har));

    return `${host} done in ${complete.reduce((a,b) => a + b, 0)/1000} Seconds`;
}

module.exports = pupTesting;
