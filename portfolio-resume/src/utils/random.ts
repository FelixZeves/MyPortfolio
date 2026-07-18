import type { WeightedValue } from '@/types/weightedValue'


/* Случайное число в диапазоне */
export function randomBetween(
    min:number,
    max:number
):number {

    return Math.random() * (max - min) + min

}

/* Случайное целое число */
export function randomInt(
    min:number,
    max:number
):number {

    return Math.floor(
        randomBetween(min, max + 1)
    )

}

/* Случайное значение по весу */
export function randomWeighted<T>(
    values: WeightedValue<T>[]
):T {

    const totalWeight = values.reduce(
        (sum,item) => sum + item.weight,
        0
    )


    let random = Math.random() * totalWeight


    for(const item of values){

        random -= item.weight

        if(random <= 0){

            return item.value

        }

    }

    return values.at(-1)!.value

}