const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
  // await page.screenshot({ path: 'exemplo.png'});


  const result = await page.evaluate(() => {
    // Consultando todos os produtos do site:
    let consulta = document.querySelectorAll(".thumbnail");
    let titles = document.querySelectorAll(".title");
    let descriptions = document.querySelectorAll(".description");
    let prices = document.querySelectorAll("h4", {"class": "pull-right price"});
    let reviews = document.querySelectorAll("p");
    // let link = document.querySelectorAll(".")


    // Criando uma nova lista para armazenar cada notebook encontrado se for
    // da marca lenovo:
    const notebooks = [];
    for (i = 0; i < consulta.length; i++) {
      let produto = {
        'Title': titles[i].innerHTML,
        'Description': descriptions[i].innerHTML,
        'Price': prices[i].innerHTML,
        'Reviews': reviews[i].innerHTML
        // 'Link': element.querySelector("href").innerHTML
      }
      console.log(titles[i])
      notebooks.push(produto);
    }
    return notebooks;
    });
    
  
  console.log(result);

  await browser.close();
})();