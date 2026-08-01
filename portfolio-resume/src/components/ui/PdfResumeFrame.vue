<script setup lang="ts">

withDefaults(
    defineProps<{

        label?: string

    }>(),
    {

        label: "DOC // PDF"

    }
)

</script>

<template>

    <div
        class="resume-frame"
        :data-label="label"
    >

        <section
            class="
                resume-sheet
                shadow-2xl
            "
        >

            <slot />

        </section>

    </div>

</template>

<style scoped>

.resume-frame {

    position: relative;

    padding: 12px;

    background: var(--paper);

    border: 1px solid var(--industrial-black);

}

.resume-frame::before {

    content: "";

    position: absolute;

    inset: 11px;

    border: 2px solid rgba(var(--industrial-black-rgb), .4);

}

.resume-frame::after {

    content: attr(data-label);

    position: absolute;

    top: 10px;
    right: -2px;

    padding: 4px 8px;

    background: var(--signal-primary);

    color: var(--paper);

    font-family: var(--font-paper);

    font-size: 10px;

    letter-spacing: .15em;

}

.resume-sheet {

    width: 794px;

    min-height: 1123px;

    position: relative;
    isolation: isolate;

    display: grid;

    background: var(--paper);

}

.resume-sheet > * {

    position: relative;

    z-index: 1;

}

</style>