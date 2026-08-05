import dotenv from "dotenv"


const mode =
    process.env.NODE_ENV ?? "development"


dotenv.config({
    path: ".env"
})


dotenv.config({
    path: `.env.${mode}`,
    override:true
})

export const config = {

    port: Number(
        process.env.PORT ?? 3000
    ),

    pdfUrl:
        process.env.PDF_URL ??
        "http://127.0.0.1:5173/pdf",

    pdfName:
        process.env.PDF_NAME ??
        "portfolio.pdf"

}