import type { LanguageLevel } from "@/types/language"

export function getLanguageLevelName(
    level: LanguageLevel
): string {
    const levels = {
        0: '',
        1: 'A1',
        1.5: 'A1-A2',
        2: 'A2',
        2.5: 'A2-B1',
        3: 'B1',
        3.5: 'B1-B2',
        4: 'B2',
        4.5: 'B2-C1',
        5: 'C1',
        5.5: 'C1-C2',
        6: 'C2'
    }
    return levels[level]
}

export function getLanguageProgress(
    level: LanguageLevel
): number {
    return level / 6 * 100
}