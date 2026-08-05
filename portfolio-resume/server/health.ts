import { config } from "./config"


export async function checkSite(){

    try {

        const response = await fetch(
            config.pdfUrl
        )


        return response.ok

    }

    catch {

        return false

    }

}