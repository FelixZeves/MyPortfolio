<script setup lang="ts">
import { Icon } from '@iconify/vue';

import type { Contact } from '@/types/contact.ts';

import Logo from './ui/Logo.vue';

defineProps<{
    contacts: Contact[]
}>()

</script>

<template>

    <div class="footer-section">


        <div class="
            footer-body
            industrial-data-panel-light
        ">

            <div class="footer-logo-part">


                <div class="footer-logo">

                    <Logo class="footer-logo-image" color="var(--signal-additional)"/>

                </div>

                <div class="footer-logo-text">

                    <span>разработчик</span>
                    
                    <span>операционных</span>

                    <span>систем</span>

                </div>


            </div>

            <div class="footer-slash footer-slash-primary"></div>
            
            <div class="footer-contact-part">


                <div class="footer-contacts">

                    <div
                        v-for="contact in contacts"
                        :key="contact.type"
                        class="footer-contact-row"
                    >

                        <Icon
                            v-if="contact.icon"
                            :icon="contact.icon"
                            class="footer-contact-icon"
                        />

                        <span class="footer-contact-title">
                            {{ contact.type }}
                        </span>

                        <a
                            v-if="contact.url"
                            :href="contact.url"
                            target="_blank"
                            class="footer-contact-value"
                        >
                            {{ contact.value }}
                        </a>

                        <span
                            v-else
                            class="footer-contact-value"
                        >
                            {{ contact.value }}
                        </span>

                    </div>


                </div>


            </div>

            <div class="footer-coordinates-part">


                <div class="footer-slash footer-slash-secondary"></div>

                <div class="footer-coordinates">

                    <span class="footer-coordinates-title">
                        локация
                    </span>

                    <span>
                        55.1644° N
                    </span>

                    <span>
                        61.4368° E
                    </span>


                </div>


            </div>


        </div>


    </div>

</template>

<style scoped>

.footer-body{

    @apply
        flex
        flex-row
        w-full
        h-full
        pe-1
        ps-2
        pt-2
        mb-2
        font-code;

    position:relative;

}

.footer-logo-part{

    @apply flex flex-row gap-2 z-10 pe-4;

}

.footer-logo{

    @apply flex self-center w-[96px] h-[96px] shrink-0 ;
    
}

.footer-logo-image{

    @apply
        w-full
        h-full
        block;

}

.footer-logo-text{
    
    @apply flex flex-col gap-1 my-3 px-2 text-signal-additional border-l uppercase text-[.7rem] justify-center;

}

.footer-contact-part{

    @apply
        flex
        flex-row
        grow
        basis-[60%]
        mx-4
        my-2
        z-10;

}

.footer-slash{

    width:2px;
    height:90%;

    transform:skewX(-12deg);

    flex-shrink:0;

}

.footer-slash-primary{

    @apply bg-signal-primary;

}

.footer-slash-secondary{

    @apply bg-signal-secondary;

}

.footer-contacts{

    @apply
        grid
        grid-cols-3
        gap-x-7
        gap-y-4
        flex-1
        ms-2;

}

.footer-contact-row{

    display: grid;

    grid-template-columns: 18px auto;

    grid-template-areas:
        "icon title"
        "value value";

    column-gap:.25rem;
    row-gap:.1rem;

    align-content: start;

}

.footer-contact-icon{

    grid-area: icon;

    @apply
        text-signal-primary
        text-[.85rem];

}

.footer-contact-title{

    grid-area: title;

    @apply
        uppercase
        text-signal-additional
        text-[.62rem]
        tracking-widest
        leading-none;

}

.footer-contact-value{

    grid-area: value;

    @apply
        text-signal-secondary
        text-nowrap
        text-[.72rem]
        tracking-tight
        leading-tight;

    padding-left: 5px;
}

.footer-coordinates-part{

    @apply
        flex
        flex-row
        w-[12%]
        ms-4
        z-10
        shrink-0;

}

.footer-coordinates{

    @apply
        flex
        flex-col
        justify-center
        relative
        ms-3
        uppercase
        text-[.62rem];

}

.footer-coordinates-title{

    @apply
        text-signal-secondary
        font-code-ru
        uppercase
        mb-1
        tracking-widest;

}

.footer-coordinates span:not(.footer-coordinates-title){

    @apply text-paper;

}

</style>