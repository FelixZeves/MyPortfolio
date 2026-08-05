import { config } from "@/config"

export async function downloadPdf() {

    // Статический файл
    if (config.pdfMode === "static") {

        const link = document.createElement("a")
    
        const pdfUrl = new URL(
            config.pdfFile,
            window.location.origin + config.base
        )
    
        link.href = pdfUrl.href
        link.download = "portfolio.pdf"
    
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    
        return
    }

    // API
    const response = await fetch(config.pdfUrl, {
        method: "POST"
    })

    if (!response.ok) {
        throw new Error("Ошибка генерации PDF")
    }

    const blob = await response.blob()

    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")

    link.href = url
    link.download = "portfolio.pdf"

    link.click()

    URL.revokeObjectURL(url)

}