import type { WeightedValue } from "../weightedValue"
import type { Range } from "../range"

export interface SignalAppearance {

    colors: WeightedValue<string>[]

    opacity: Range<number>

}