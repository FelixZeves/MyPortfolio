<script setup lang="ts">

import { Icon } from '@iconify/vue';

import type { SoftSkill } from '@/types/softSkill';

import { computed } from 'vue'

import { generateTraitLayouts } from '@/utils/generators/generateTraitLayouts'
import { traitLayoutGeneratorConfig } from '@/config/traitLayoutGeneratorConfig'

import PropertyTrait from './traits/PropertyTrait.vue';
import RegistryTrait from './traits/RegistryTrait.vue';
import NoteTrait from './traits/NoteTrait.vue';
import HighlightTrait from './traits/HighlightTrait.vue';

const props = defineProps<{

    softSkills: SoftSkill[]

}>()

const traits = computed(() =>
    generateTraitLayouts(
        props.softSkills,
        traitLayoutGeneratorConfig
    )
)

const variantComponents = {
    property: PropertyTrait,
    registry: RegistryTrait,
    note: NoteTrait,
    highlight: HighlightTrait
} as const

</script>


<template>

    <section class="professional-trait-skills">

        <div class="professional-trait-list">

            <article
                v-for="item in traits"
                :key="item.trait.title"
                class="professional-trait-item"
                :class="[
                    `w-${item.layout.width}`,
                    `h-${item.layout.height}`,
                    `variant-${item.layout.variant}`
                ]"
            >

                <component
                    :is="variantComponents[item.layout.variant]"
                    :item="item"
                />
            </article>

        </div>

    </section>

</template>

<style scoped>


.professional-trait-skills{

    font-family: var(--font-code);

    margin: .75rem;

}

.professional-trait-list{

    display:grid;

    grid-template-columns:
        repeat(6,minmax(0,1fr));

    grid-auto-flow:dense;

    gap:.75rem;

}

.w-1{

    grid-column:span 2;

    width: 100%;

}

.w-2{

    grid-column:span 3;

    width: 100%;

}

.w-3{

    grid-column:span 4;

    width: 100%;

}

.h-1{

    min-height:100px;

    height: auto;

}

.h-2{

    min-height:200px;

    height: auto;

}

</style>