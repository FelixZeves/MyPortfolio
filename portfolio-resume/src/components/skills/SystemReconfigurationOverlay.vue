<script setup lang="ts">

import { ref } from 'vue';

import { Icon } from '@iconify/vue';

const model = defineModel<boolean>()

interface LogEntry {

    id:number
    text:string
    printed:string
    status:'typing'|'pending'|'complete'

}

let stepId = 0

const visibleSteps = ref<LogEntry[]>([])

function appendStep(text:string){

    const id = stepId++

    visibleSteps.value.push({

        id,
        text,
        printed:"",
        status:"typing"

    })

    return id
}

function updateStep(
    id:number,
    value:string
){

    const step = visibleSteps.value.find(
        item => item.id === id
    )

    if(!step)
        return


    step.printed = value

}

function setPending(id:number){

    const step = visibleSteps.value.find(
        item => item.id === id
    )

    if(!step)
        return


    step.status = "pending"

}

function completeStep(id:number){

    const step = visibleSteps.value.find(
        item => item.id === id
    )


    if(!step)
        return


    step.printed = step.text

    step.status = "complete"

}

function reset(){

visibleSteps.value = []

stepId = 0

}

defineExpose({
    appendStep,
    updateStep,
    setPending,
    completeStep,
    reset
})

</script>

<template>

    <Transition name="overlay">

        <div v-if="model" class="system-overlay">
    
            <div class="system-window">
    
                <header class="system-header">
                    SYSTEM RECONFIGURATION
                </header>
    
                <div class="system-divider"/>
    
                <div class="system-log">
                    <div
                        v-for="step in visibleSteps"
                        :key="step.text"
                        class="log-item"
                    >
                        <Icon icon="oui:console" />

                        <span class="log-text">
                            {{ step.printed }}
                        </span>

                        <span
                            v-if="step.status === 'pending'"
                            class="log-pending"
                        >
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </span>

                        <span
                            v-if="step.status === 'complete'"
                            class="log-complete"
                        >
                            [COMPLETE]
                        </span>

                    </div>
                </div>
    
                <div class="system-footer">
    
                    PLEASE DO NOT INTERRUPT
    
                </div>
    
            </div>
    
        </div>

    </Transition>

</template>

<style scoped>

.system-overlay{

    position:absolute;
    inset:0;

    z-index:100;

    display:flex;
    justify-content:center;
    align-items:center;

    padding:2rem;

    background:
        rgba(var(--industrial-navy-rgb), .85);

    backdrop-filter:blur(4px);

    overflow:hidden;
}

.system-window{

    position:relative;

    width:min(620px, 92%);
    min-height:320px;

    padding:1.5rem;

    background:
        linear-gradient(
            180deg,
            rgba(var(--technical-grid-rgb), .22),
            rgba(0,0,0,.28)
        );

    border:
        1px solid rgba(var(--signal-additional-rgb), .22);

    box-shadow:
        0 0 18px rgba(var(--signal-primary-rgb), .12);

}

.system-window::before,
.system-window::after{

    content:"";

    position:absolute;

    width: 100%;
    height: 18px;
}

.system-window::before{

    top: 0px;
    left: 0px;
    

    border-top:2px solid var(--signal-primary);
    border-left:2px solid var(--signal-primary);
    border-right:2px solid var(--signal-primary);

}

.system-window::after{

    bottom: 0px;
    right: 0px;

    border-bottom:2px solid var(--signal-primary);
    border-left:2px solid var(--signal-primary);
    border-right:2px solid var(--signal-primary);

}

.system-header{

    font-family:var(--font-code);

    font-size:.82rem;

    letter-spacing:.3em;

    color:var(--signal-primary);

    text-transform:uppercase;

}

.system-divider{

    margin:.9rem 0 1.2rem;

    height:1px;

    background:

        linear-gradient(
            to right,
            var(--signal-primary),
            transparent
        );
}

.system-log{

    display:flex;

    flex-direction:column;

    gap:.7rem;

    min-height:170px;

    font-family:var(--font-code);

    font-size:.72rem;

    letter-spacing:.18em;

    color:var(--signal-additional);

}

.log-item{

    @apply flex flex-row gap-2 text-signal-primary

}

.log-item svg{

    @apply w-[12px] h-[12px] shrink-0 mt-[.25rem] text-signal-additional;
    
}

.log-pending{

    @apply flex gap-[.05rem] text-signal-secondary;

}

.log-pending span{

    opacity:.15;

    animation:dotPulse .9s infinite;

}

.log-pending span:nth-child(2){

    animation-delay:.2s;

}

.log-pending span:nth-child(3){

    animation-delay:.4s;

}

@keyframes dotPulse{

    0%,100%{

        opacity:.15;

    }

    50%{

        opacity:1;

    }

}

.log-complete{

    @apply text-signal-additional

}

.system-footer{

    margin-top:auto;

    padding-top:1rem;

    font-size:.65rem;

    letter-spacing:.22em;

    color:var(--signal-secondary);

    text-align:right;

}

</style>