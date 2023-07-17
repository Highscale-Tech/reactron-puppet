const puppeteer = require("puppeteer");
async function scraper(keyword) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto("https://google.com/search?q=" + keyword + "&tbm=isch");

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  await page.mouse.wheel({ deltaY: Math.random() * 1000 });
  await page.mouse.move(Math.random(), Math.random());
  const imageSelector = ".rg_i";
  await page.mouse.move(Math.random(), Math.random());
  const image = await page.waitForSelector(imageSelector);
  const imagesrc = await image.evaluate((el) => el.src);

  await browser.close();

  return imagesrc;
}

module.exports = { scraper };
