import type { SignalCrossData, SignalElement } from '@/types/signals/signals'
import { signalGeneratorConfig } from '@/config/signalGenerator'

import { generateAvailablePosition } from './generateAvailableSignalPosition'

import { randomBetween, randomWeighted } from '@/utils/random'




export function generateSignalCrosses(
    count:number,
    elements:SignalElement[]
):SignalCrossData[] {

    const crosses:SignalCrossData[] = []

    for(let i=0; i<count; i++){

        const cross:SignalCrossData = {

            id:crypto.randomUUID(),

            type:'cross',

            position:generateAvailablePosition(elements),


            size:`${
                randomBetween(
                    signalGeneratorConfig.cross.size.min,
                    signalGeneratorConfig.cross.size.max
                )
            }px`,


            thickness:
                randomWeighted(
                    signalGeneratorConfig.cross.thickness
                ),


            color:
                randomWeighted(
                    signalGeneratorConfig.cross.appearance.colors
                ),


            opacity:
                randomBetween(
                    signalGeneratorConfig.cross.appearance.opacity.min,
                    signalGeneratorConfig.cross.appearance.opacity.max
                )

        }

        crosses.push(cross)

    }

    return crosses

}