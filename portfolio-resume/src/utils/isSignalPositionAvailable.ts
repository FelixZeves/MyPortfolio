import type { SignalElement } from '@/types/signals/signals'
import type { UIPosition } from '@/types/uiPosition'

import {
    parseSignalPosition
} from './parseSignalPosition'


export function isSignalPositionAvailable(
    position: UIPosition,
    elements: SignalElement[],
    minDistance:number
):boolean {


    const current =
        parseSignalPosition(position)


    return elements.every(element=>{


        const existing =
            parseSignalPosition(
                element.position
            )


        const distance =
            Math.sqrt(
                Math.pow(current.x - existing.x,2)
                +
                Math.pow(current.y - existing.y,2)
            )


        return distance >= minDistance

    })

}