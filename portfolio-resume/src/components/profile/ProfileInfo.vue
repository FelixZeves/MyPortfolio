<script setup lang="ts">

import type { Profile } from '@/types/profile.ts';
import type { Language } from '@/types/language.ts';
import { computed } from 'vue';
import { getLanguageLevelName, getLanguageProgress } from '@/utils.ts/language';

import HexRating from '../ui/HexRating.vue';

const props = defineProps<{
    profile: Profile,
    languages: Language[]
}>()

const profileFields = computed(() => [
    {
        key: 'surname',
        value: props.profile.surname
    },
    {
        key: 'firstName',
        value: props.profile.firstName
    },
    {
        key: 'patronymic',
        value: props.profile.patronymic
    }
])

const specialization = computed(() => 
    props.profile.specialization
)

</script>

<template>

    <div
        class="
            industrial-panel-edges
            h-full
            flex
            flex-col
            gap-4
            pt-5
            font-code
        "
    >

        <header>

            <span class="text-signal-primary">
                PR0F1LE_DATA
            </span>

        </header>

        <div class="flex flex-col gap-2 pe-1">
            <span class="text-signal-additional">
                {
            </span>
            <div
                v-for="item in profileFields"
                :key="item.key"
                class="flex flex-col gap-1 pl-4"
            >
                <div class="flex flex-row no-wrap justify-between">
                    <span class="code-key">
                        {{item.key}}:
                    </span>

                    <span class="code-value text-end">
                        "{{item.value}}"
                    </span>
                </div>

            </div>

            <div class="flex flex-col pl-4">

                <div class="flex justify-between">
                    <span class="code-key">
                        specialization:
                    </span>
                </div>

                <span class="text-signal-additional">
                    [
                </span>

                <span
                    v-for="(item, index) in specialization"
                    class="pl-4 code-value"
                >
                    "{{ item }}"{{ index < specialization.length - 1 ? ',' : '' }}
                </span>

                <span class="text-signal-additional">
                    ]
                </span>

            </div>
            
            <div class="flex flex-col pl-4">

                <span class="code-key">
                    languages:
                </span>

                <span class="text-signal-additional">
                    [
                </span>

                <div
                    v-for="(language, index) in languages"
                    :key="language.name"
                    class="pl-4 flex flex-col"
                >

                    <span class="text-signal-additional">
                        {
                    </span>

                    <div class="pl-4 flex justify-between">
                        <span class="code-key">
                            name:
                        </span>

                        <span class="code-value">
                            "{{ language.name }}"
                        </span>
                    </div>


                    <div class="pl-4 flex justify-between">
                        <span class="code-key">
                            level:
                        </span>

                        <span class="code-value">
                            {{ getLanguageLevelName(language.level) }}
                        </span>
                    </div>

                    <HexRating
                        :value="language.level"
                    />


                    <span class="text-signal-additional">
                        }{{ index < languages.length - 1 ? ',' : '' }}
                    </span>

                </div>


                <span class="text-signal-additional">
                    ]
                </span>

            </div>

            <span class="text-signal-additional">
                }
            </span>

            <span class="text-signal-additional">>_</span>

        </div>

    </div>

</template>


<style scoped>

.code-value{
    @apply text-signal-secondary
}

.code-key{
    @apply text-signal-primary
}

header {

    display:flex;

    align-items:center;

    gap:1rem;


    font-size:.8rem;

    letter-spacing:.25em;


}

</style>