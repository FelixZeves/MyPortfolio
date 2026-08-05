import puppeteer, { Browser } from "puppeteer"
import { config } from "./config"

export async function generatePdf() {

    let browser: Browser | undefined

    try  {

        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        })
    
        const page = await browser.newPage()
    
        await page.goto(
            config.pdfUrl,
            {
                waitUntil: "networkidle0"
            }
        )
    
        return await page.pdf({
            format: "A4",
            printBackground: true,
            preferCSSPageSize:true
        })

    }
    

    finally{
        await browser?.close();
    }
    
}