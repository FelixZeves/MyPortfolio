import type { SignalElement, SignalPointData } from '@/types/signals/signals'
import { signalGeneratorConfig as config } from '@/config/signalGenerator'
import { randomBetween, randomInt, randomWeighted } from '@/utils/random'
import { generateAvailablePosition } from './generateAvailableSignalPosition'

export function generateSignalPoints(
    count:number,
    elements:SignalElement[]
):SignalPointData[] {

    const points:SignalPointData[] = []

    for(let i=0;i<count;i++){


        const point:SignalPointData = {

            id:crypto.randomUUID(),

            type:'point',

            position:generateAvailablePosition([...elements, ...points]),

            size:`${randomInt(
                config.point.size.min,
                config.point.size.max
            )}px`,

            color:randomWeighted(
                config.point.appearance.colors
            ),

            opacity:randomBetween(
                config.point.appearance.opacity.min,
                config.point.appearance.opacity.max
            ),

            pulse:randomWeighted(
                config.point.pulse
            )

        }

        points.push(point)

    }

    return points

}