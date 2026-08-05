import Fastify from "fastify"

import { generatePdf } from "./generatePDF"
import { config } from "./config"
import { checkSite } from "./health"

const app = Fastify()

app.get("/health", async (_, reply) => {

    const siteReady = await checkSite()


    if(!siteReady){

        app.log.warn(
            {
                url: config.pdfUrl
            },
            "PDF source is unavailable"
        )

        return reply
            .code(503)
            .send({
                status:"waiting",
                site:false
            })

    }


    app.log.info(
        {
            url: config.pdfUrl
        },
        "PDF source is available"
    )


    return {
        status:"ok",
        site:true
    }

})

app.post("/api/pdf", async (_, reply) => {

    try {
        const pdf = await generatePdf()

        reply
            .header(
                "Content-Type",
                "application/pdf"
            )
            .header(
                "Content-Disposition",
                `attachment; filename=${config.pdfName}`
            )
            .send(pdf)
    }
    catch(error){
        console.error(error)
    
        reply.status(500).send({
            error: "PDF generation failed",
            message: error instanceof Error
                ? error.message
                : String(error)
        })
    }

})

try {

    const server = await app.listen({

        port: config.port
    
    })
    
    const shutdown = async () => {

        app.log.info("Shutting down server...")
    
        await app.close()
    
        process.exit(0)
    
    }
    
    process.on('SIGINT', shutdown)
    process.on('SIGTERM', shutdown)

}

catch(err) {

    app.log.error(err)
    process.exit(1)

}