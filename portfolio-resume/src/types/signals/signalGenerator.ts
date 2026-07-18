import type { WeightedValue } from '../weightedValue'
import type { Range } from '../range'
import type { SignalAppearance } from './signalAppearance'

type SignalLineDirection =
    'horizontal'
    | 'vertical'

export interface SignalGeneratorConfig {

    /* Отступ элементов от границ панели (%) */
    padding: number

    /* Минимальная дистанция между Point и Cross (%) */
    minDistance: number

    /* Конфигурация линий */
    line: {

        length: Range<number>

        direction: WeightedValue<SignalLineDirection>[]

        thickness: WeightedValue<string>[]

        flow: WeightedValue<boolean>[]

        flowOffset: Range<number>

        appearance: SignalAppearance

    }

    /* Конфигурация точек */
    point: {

        size: Range<number>

        pulse: WeightedValue<boolean>[]
        
        appearance: SignalAppearance

    }

    /* Конфигурация крестиков */
    cross: {

        size: Range<number>

        thickness: WeightedValue<string>[]

        appearance: SignalAppearance

    }

}