import type { SignalElement } from '@/types/signals/signals'
import { signalGeneratorConfig as config } from '@/config/signalGenerator'

import { generateSignalPosition } from './generateSignalPosition'
import { isSignalPositionAvailable } from '@/utils/isSignalPositionAvailable'

export function generateAvailablePosition(
    elements:SignalElement[]
){

    const maxAttempts = 50


    for(
        let attempt = 0;
        attempt < maxAttempts;
        attempt++
    ){

        const position =
            generateSignalPosition()


        if(
            isSignalPositionAvailable(
                position,
                elements,
                config.minDistance
            )
        ){

            return position

        }

    }

    return generateSignalPosition()

}