import type { TraitVariant, GeneratedTrait } from "@/types/generatedTrait"
import type { SoftSkill } from "@/types/softSkill"
import { randomWeighted } from "../random"
import type { TraitLayoutGeneratorConfig } from "@/types/TraitsLayoutGenerator"

export function generateTraitLayouts(
    traits: SoftSkill[],
    config: TraitLayoutGeneratorConfig
): GeneratedTrait[] {

    return traits.map(trait => ({

        trait,

        layout:{

            width: randomWeighted(config.widths),
    
            height: randomWeighted(config.heights),
    
            variant: randomWeighted(config.variants),

        },

    }))

}