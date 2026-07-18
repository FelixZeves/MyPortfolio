import type { SignalGeneratorConfig } from '@/types/signals/signalGenerator'

export const signalGeneratorConfig: SignalGeneratorConfig = {

    /* Отступ элементов от границ панели (%) */

    padding: 5,

    /* Минимальная дистанция между Point и Cross (%) */

    minDistance: 8,

    /* Конфигурация линий */

    line: {

        length: {

            min: 20,

            max: 75,

        },

        direction: [
            {
                value:'horizontal',
                weight:70
            },
            {
                value:'vertical',
                weight:30
            }
        ],

        thickness: [

            {

                value: '1px',

                weight: 80,

            },

            {

                value: '2px',

                weight: 20,

            },

        ],

        flow: [

            {

                value: true,

                weight: 40,

            },

            {

                value: false,

                weight: 60,

            },

        ],

        flowOffset: {

            min: 0,

            max: 20,

        },

        appearance: {

            colors: [

                {

                    value: 'var(--signal-primary)',

                    weight: 50,

                },

                {

                    value: 'var(--signal-secondary)',

                    weight: 35,

                },

                {

                    value: 'var(--signal-additional)',

                    weight: 15,

                },

            ],

            opacity: {

                min: 0.20,

                max: 0.55,

            },

        },

    },

    /* Конфигурация точек */

    point: {

        size: {

            min: 4,

            max: 8,

        },

        appearance: {

            colors: [

                {

                    value: 'var(--signal-primary)',

                    weight: 50,

                },

                {

                    value: 'var(--signal-secondary)',

                    weight: 25,

                },

                {

                    value: 'var(--signal-additional)',

                    weight: 25,

                },

            ],

            opacity: {

                min: 0.55,

                max: 0.90,

            },

        },

        pulse:[

            {

                value: true,

                weight: 25,

            },

            {

                value: false,

                weight: 75,

            },

        ],

    },

    /* Конфигурация крестиков */

    cross: {

        size: {

            min: 8,

            max: 16,

        },

        thickness: [

            {

                value: '1px',

                weight: 80,

            },

            {

                value: '2px',

                weight: 20,

            },

        ],

        appearance: {

            colors: [


                {

                    value: 'var(--signal-secondary)',

                    weight: 65,

                },

                {

                    value: 'var(--signal-additional)',

                    weight: 35,

                },

            ],

            opacity: {

                min: 0.35,

                max: 0.70,

            },

        },

    },

}