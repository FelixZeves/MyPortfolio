import type { SignalElement, SignalLineData } from '@/types/signals/signals'
import { signalGeneratorConfig as config } from '@/config/signalGenerator'
import { generateAvailablePosition } from './generateAvailableSignalPosition'

import { randomBetween, randomInt, randomWeighted
} from '@/utils/random'


export function generateSignalLines(
    count:number,
    elements:SignalElement[]
):SignalLineData[] {


    return Array.from(
        {length:count},
        ()=>{

            return {

                id: crypto.randomUUID(),

                type:'line',

                position:generateAvailablePosition(elements),


                direction: randomWeighted(
                    config.line.direction
                ),


                length:`${
                    randomBetween(
                        config.line.length.min,
                        config.line.length.max
                    )
                }%`,


                thickness:
                    randomWeighted(
                        config.line.thickness
                    ),


                flow:
                    randomWeighted(
                        config.line.flow
                    ),


                flowOffset:`${
                    randomBetween(
                        config.line.flowOffset.min,
                        config.line.flowOffset.max
                    )
                }px`,


                color:
                    randomWeighted(
                        config.line.appearance.colors
                    ),


                opacity:
                    randomBetween(
                        config.line.appearance.opacity.min,
                        config.line.appearance.opacity.max
                    )

            }

        }
    )

}