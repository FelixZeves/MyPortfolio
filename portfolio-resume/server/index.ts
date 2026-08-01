import Fastify from "fastify"

import { generatePdf } from "./generatePDF"

const app = Fastify()

app.post("/api/pdf", async (_, reply) => {

    const pdf = await generatePdf()

    reply
        .header(
            "Content-Type",
            "application/pdf"
        )
        .header(
            "Content-Disposition",
            "attachment; filename=portfolio.pdf"
        )

    return pdf

})

app.listen({

    port: 3000

})