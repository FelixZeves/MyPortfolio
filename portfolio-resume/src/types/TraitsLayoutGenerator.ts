import type { TraitVariant } from "./generatedTrait"
import type { WeightedValue } from "./weightedValue"

export interface TraitLayoutGeneratorConfig  {

    widths: WeightedValue<number>[]

    heights: WeightedValue<number>[]

    variants: WeightedValue<TraitVariant>[]

}