const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance){
	let browser;
	try{
        /* this browserInstance is a Promise and we should use then/catch or await to resolve it
        */
		browser = await browserInstance;
		await pageScraper.scraper(browser);	
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)