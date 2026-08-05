export const config = {

    base: import.meta.env.BASE_URL,

    pdfMode: import.meta.env.VITE_PDF_MODE,

    pdfFile: import.meta.env.VITE_PDF_FILE,

    pdfUrl: import.meta.env.VITE_PDF_URL,

} as const