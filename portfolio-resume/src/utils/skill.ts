import type { SkillLevel } from "@/types/skill"

export function getSkillLevelName(
    level: SkillLevel
): string {
    const levels = {
        0: '',
        1: 'Базовый',
        2: 'Продвинутый',
        3: 'Профессиональный'
    }

    return levels[level]
}

export function getSkillProgress(
    level: SkillLevel
): number {
    return level / 3
}