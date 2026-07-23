import type { SoftSkill } from "./softSkill"

export type TraitVariant = 
    |'property'
    |'registry'
    |'note'
    |'highlight'

export interface GeneratedTrait {

    trait: SoftSkill

    layout: {

        width: number

        height: number

        variant: TraitVariant

    }

}