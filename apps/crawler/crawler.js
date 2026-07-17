const axios = require ('axios')
const cheerio = require('cheerio')

let urlVisit = [targetUrl]

// Specify URl of the site to crawl
const targetUrl = 'https://www.scrapingcourse.com/ecommerce/';

// define a crawler function

const crawler = async ()=>{
    try {
        // request the target website
        const response = await axios.get(targetUrl)
    } catch (error) {
        console.error(`Error fetching ${targetUrl} : ${error.message}`)
    }
}
