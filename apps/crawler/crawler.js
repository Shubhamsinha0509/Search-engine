import axios from "axios";
import cheerio from "cheerio"


// Specify URl of the site to crawl
const targetUrl = 'https://www.scrapingcourse.com/ecommerce/';


// add the target url to an array of urlsToVisit
let urlsToVisit = [targetUrl]


// define a crawler function

const crawler = async ()=>{

    // Modify the crawler function to start a for loop that
    // runs continuously if the urlsToVisit array isn't empty

    for(;urlsVisit.length > 0;)
        // get the next URl from the list 
    const currentUrl = urlsVisit.shift()


    try {
        // request the target website
        const response = await axios.get(targetUrl)

        // parse the website's HTML
        const $ = cheerio.load(response.data)

        // find all links from the page
        const linkElements = $('a[href]')
        linkElements.each((index,element)=>{
            let url = $(element).attr('href')
        })

        // check if the URl is a full link or a relative path
        if(!url.startWith('http')){
            // remove leading slash if present
            url = targetUrl + url.replace(/^\//,'')
        }

        // follow the link within the target website
        if(url.startWith(targetUrl) && !urlsToVisit.includes(url)){
            // update the urls to visit
            urlsToVisit.push(url);
        }
    } catch (error) {
        console.error(`Error fetching ${targetUrl} : ${error.message}`)
    }
}
