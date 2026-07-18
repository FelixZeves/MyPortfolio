import type { SignalElement } from "@/types/signals/signals"
import { generateSignalPoints } from "./generateSignalPoints"
import { generateSignalLines } from "./generateSignalLines"
import { generateSignalCrosses } from "./generateSignalCrosses"

export interface GenerateSignalElementsOptions {

    lines?: number

    points?: number

    crosses?: number

}

export function generateSignalElements(
    options: GenerateSignalElementsOptions = {}
): SignalElement[] {

    const {
        lines = 0,
        points = 0,
        crosses = 0
    } = options

    const elements: SignalElement[] = []

    elements.push(
        ...generateSignalLines(lines, elements)
    )

    elements.push(
        ...generateSignalPoints(points, elements)
    )

    elements.push(
        ...generateSignalCrosses(crosses, elements)
    )

    return elements

}
