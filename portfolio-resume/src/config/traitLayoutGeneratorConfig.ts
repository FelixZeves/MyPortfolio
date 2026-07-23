import type { TraitLayoutGeneratorConfig } from "@/types/TraitsLayoutGenerator";

export const traitLayoutGeneratorConfig: TraitLayoutGeneratorConfig = {
    widths:[

        {
            value:1,
            weight:50
        },
    
        {
            value:2,
            weight:30
        },

        {
            value:3,
            weight:20
        }
    
    ],

    heights:[

        {
            value:1,
            weight:70
        },
    
        {
            value:2,
            weight:30
        }
    
    ],

    variants: [

        {
            value:'property',
            weight:35
        },
    
        {
            value:'registry',
            weight:25
        },
    
        {
            value:'note',
            weight:25
        },
    
        {
            value:'highlight',
            weight:15
        }
    
    ]
}