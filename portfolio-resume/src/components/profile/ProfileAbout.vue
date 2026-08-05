<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { useQuasar } from 'quasar'

const $q = useQuasar()

import type { Profile } from '@/types/profile.ts';

import Logo from '../ui/Logo.vue';
import { getEmploymentFormatName, getEmploymentTypeName } from '@/utils/employment.ts';
import { downloadPdf } from '@/utils/downloadPdf.ts';


const props = defineProps<{
    profile: Profile
}>()

const isExpanded = defineModel<boolean>('expanded')

const showFullText = ref(false)

watch(isExpanded, expanded => {

    if (expanded) {

        setTimeout(() => {
            showFullText.value = true
        }, 450)

    } else {

        showFullText.value = false

    }

})

const previewText = computed(() =>
    showFullText.value
        ? props.profile.about
        : `${props.profile.about.slice(0, 180)}...`
)

const employmentType = computed(
    () => getEmploymentTypeName(props.profile.employment.type)
)

const employmentFormat = computed(
    () => getEmploymentFormatName(props.profile.employment.format)
)

async function notifyPdf() {

    const notify = $q.notify({
        spinner: true,
        timeout: 0,
        group: false,
        position: "top",
        classes: "pdf-notify",
        message: "Подготовка документа..."
    })


    setTimeout(() => {
        notify({
            message: "Формирование страниц..."
        })
    }, 700)

    setTimeout(() => {
        notify({
            message: "Оптимизация PDF..."
        })
    }, 800)

    await downloadPdf()

    notify({
        spinner: false,
        icon: "done_all",
        timeout: 2500,
        message: "экспорт выполнен"
    })

}

</script>


<template>

<div class="about-block">

    <!-- Штамп-логотип -->
    <div class="sheet-mark">

        <Logo
            class="sheet-logo"
            color="var(--signal-secondary)"
        />

    </div>


    <!-- Главный лозунг -->
    <h2
        class="about-summary"
        :class="{ hidden : isExpanded}"
    >
        {{ profile.summary }}
    </h2>

    <h3
        v-if="isExpanded"
        class="about-title"
    >
        {{ profile.title }}
    </h3>

    <!-- Техническая выдержка -->
    <div
        class="about-preview"
        :class="{ expanded: isExpanded }"
    >
        {{ previewText }}
    </div>

    <div
        v-if="isExpanded"
        class="about-details"
    >

        <div class="detail-group">

            <div class="font-poster uppercase text-sm">
                предпочтения в работе
            </div>

            <div class="detail-col">
                <span class="detail-key">Тип занятости</span>
                <span class="detail-value">{{ employmentType }}</span>
            </div>

            <div class="detail-col">
                <span class="detail-key">Формат работы</span>
                <span class="detail-value">{{ employmentFormat }}</span>
            </div>

            <div class="detail-col">
                <span class="detail-key">Доход</span>
                <span class="detail-value">{{ profile.employment.salary }}</span>
            </div>

        </div>

        <div class="detail-group">

            <div class="font-poster uppercase text-sm">
                доп. информация
            </div>

            <div class="detail-col">
                <span class="detail-key">Семейное положение</span>
                <span class="detail-value">{{ profile.personal.maritalStatus }}</span>
            </div>

            <div v-if="profile.personal.drivingLicense" class="detail-col">
                <span class="detail-key">Водительские права</span>
                <span class="detail-value">
                    {{  'Категории: ' + profile.personal.drivingLicense }}
                </span>
            </div>

        </div>

    </div>


    <div class="about-actions">

        <q-btn
            outline
            class="info-btn"
            @click="isExpanded = !isExpanded"
        >
            {{ isExpanded ? 'СВЕРНУТЬ' : 'УЗНАТЬ БОЛЬШЕ' }}
        </q-btn>


        <q-btn
            flat
            class="pdf-btn"
            icon="picture_as_pdf"
            @click="notifyPdf"
        >
            СКАЧАТЬ PDF
        </q-btn>

    </div>


</div>

</template>


<style scoped>


.about-block {

    position: relative;
    overflow: hidden;

    display:flex;
    flex-direction:column;
    justify-content:flex-end;


    height:100%;
    padding-right: 6px;
    padding-top: 12px;
    padding-bottom: 12px;

}

.about-block::before {

    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: .55;

    background:

        linear-gradient(
            to right,
            transparent 31px,
            var(--paper-dark) 32px
        ),

        linear-gradient(
            to bottom,
            transparent 31px,
            var(--paper-dark) 32px
        );

    mask-image:
        radial-gradient(
            ellipse 70% 45% at 45% 38%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,.95) 40%,
            rgba(0,0,0,.6) 65%,
            transparent 100%
        );

    background-size:
        32px 32px;

}

.about-block::after {

    content: "";

    z-index: 1;

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: .6;

    background:
        radial-gradient(circle, var(--signal-primary-soft) 1.5px, transparent 0px) 0 0 / 64px 64px,
        radial-gradient(circle, var(--signal-primary-soft) 1px, transparent 0px) 32px 32px / 64px 64px;

    mask-image:
        radial-gradient(
            ellipse 70% 45% at 45% 38%,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,.95) 40%,
            rgba(0,0,0,.6) 65%,
            transparent 100%
        );

}

.sheet-mark {

    position:absolute;

    top:15px;
    right:15px;

    width:96px;
    height:96px;

    display:flex;
    align-items:center;
    justify-content:center;

    opacity:.5;

    transform:
        rotate(5deg)
        translate(.5px,1px);


    z-index:5;

    filter:
        blur(.2px);

}

.sheet-mark :deep(svg) {

    filter:
        drop-shadow(
            0 0 2px rgba(var(--signal-secondary-rgb), .2)
        );

}

.sheet-mark::before {

    content:"";

    position:absolute;

    inset: 0;

    z-index:-1;

    border-radius:18%;

    background:
        radial-gradient(
            ellipse at 45% 55%,
            rgba(var(--signal-secondary-rgb), .4),
            transparent 65%
        );

    opacity: .5;

    transform:
        translate(2px, 3px)
        rotate(-3deg);

}

/*
    Агитационный заголовок
*/

.about-summary {

    z-index: 10;

    margin:0;

    max-width:90%;

    font-size:
        clamp(24px, 2vw, 42px);

    font-family: var(--font-poster);

    line-height:
        1.05;

    font-weight:
        900;

    text-transform:
        uppercase;

    letter-spacing:
        -0.03em;

    transition:
        opacity .45s ease,
        transform .45s ease;

    color:
        var(--industrial-black);

}

.about-summary.hidden{

    opacity:0;

    transform:
        translateY(-36px);

    pointer-events:none;

}

.about-title{

    z-index: 10;

    margin:0;

    max-width:90%;

    font-size: 24px;

    font-family: var(--font-poster);

    font-weight:
        600;

    text-transform:
        uppercase;

    letter-spacing:
        -0.03em;

    color:
        var(--industrial-black);

}

.about-preview {

    position:relative;

    margin-top:20px;
    margin-bottom: 20px;

    padding-left: .25rem;
    padding-right: .25rem;

    transition:
        transform .45s ease,
        margin .45s ease;

    font-size: 12px;

    font-family: var(--font-paper);

    line-height: 1.6;

    color:
        rgba(var(--industrial-black-rgb),.65);

}

.about-preview.expanded{

    margin-top: 0px;

    font-size: 14px;

    color: var(--industrial-black)

}


/*
    градиент исчезновения текста
*/

.about-preview::after {

    content:"";

    position:absolute;

    left:0;
    right:0;
    bottom:0;

    height:40px;


    background:
        linear-gradient(
            transparent,
            var(--paper)
        );

    transition:
        opacity .3s;

}

.about-preview.expanded::after{

    opacity:0;

}

.about-details{

    display: flex;

    flex-direction: row;

    justify-content: space-between;

    margin-inline: .25rem;

}

.detail-group{
    @apply flex flex-col gap-y-1
}

.detail-col{

    @apply flex flex-col

}

.detail-key{

    @apply text-sm font-semibold opacity-75

}

.detail-value{

@apply text-sm

}


.about-actions {

    display:flex;
    justify-content:space-between;

    margin-top:20px;

}


.q-btn {

    min-height:32px;

    padding:
        4px 6px;


    font-size:
        10px;

    letter-spacing:
        .08em;

}


/*
Продолжение профиля
*/

.info-btn {

    font-family: var(--font-paper);
    
    color: var(--signal-primary);

}


/*
Артефакт / документ
*/

.pdf-btn {

    font-family: var(--font-paper);

    color: var(--industrial-black);

}






</style>