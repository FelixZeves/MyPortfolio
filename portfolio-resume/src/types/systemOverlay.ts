export interface OverlayController {

    appendStep(
        text:string
    ):number

    updateStep(
        id:number,
        text:string
    ):void

    setPending(
        id:number
    ):void

    completeStep(
        id:number
    ):void

    reset():void

}