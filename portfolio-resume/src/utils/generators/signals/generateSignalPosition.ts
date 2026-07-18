import type { UIPosition } from '@/types/uiPosition'
import { signalGeneratorConfig } from '@/config/signalGenerator'
import { randomBetween } from '@/utils/random'


export function generateSignalPosition(): UIPosition {

    const padding = signalGeneratorConfig.padding

    return {

        top: `${randomBetween(
            padding,
            100 - padding
        )}%`,


        left: `${randomBetween(
            padding,
            100 - padding
        )}%`

    }

}