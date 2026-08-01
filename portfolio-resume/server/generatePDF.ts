import puppeteer from "puppeteer"

export async function generatePdf() {

    const browser = await puppeteer.launch({
        headless: true,
    })

    const page = await browser.newPage()

    await page.goto(
        "http://localhost:5173/pdf",
        {
            waitUntil: "networkidle0"
        }
    )

    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        preferCSSPageSize:true
    })

    await browser.close()

    return pdf
}